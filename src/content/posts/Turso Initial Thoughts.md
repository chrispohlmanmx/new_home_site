---
tags: [personal-website, learning, project, coding, turso, database, deployment, libsql, sqlite, astro]
created: 2025-07-18 15:14
author: Chris Pohlman
description: My thoughts on setting up my bookshelf page using Turso, Astro, python, and Obsidian
title: Building a Bookshelf with Turso
pubDate: 2025-07-19
---

# Thoughts on using Turso
Based on my initial experience of creating a database with tables for books and authors, with the intention of creating a bookshelf page on my personal website based on the one from [Dave ruperts website](https://daverupert.com/bookshelf/) 


## Motivation for choosing Turso
My main motivation for going with Turso over other options was the generous free tier available and the fact that its is largely still just sqlite under the hood. I felt like that means that I could enjoy the benefits of a remote db without the lock-in that often comes with that. I also enjoy that I retain a local version of my db so if/when in the future Turso decides to be less generous with their free tier offering I don't need to necessarily rush to retrieve my data.

Turso also just feels like the cool new kid on the database offering block and it integrates directly with Astro via Astro:db. I'm already using Astro for my personal website so it felt like a solid option.

Additionally I wanted something that would be new to me so I could learn some new skills. Prior to this, I have only connected to a database through code using Django and only at a previous job where a lot of the database setup was done for me by the dev ops/IT team. 

## Installation/Set up 
Installing turso on Linux mint was pretty easy. The only issue I ran into was when it came time to login in via the terminal and I was missing a package. I googled the error message I got and updated a couple packages as was suggested online. Afterwards I ran the login command again and still got the error message but the login worked so I decided to ignore it and moved on 🤷‍♂️.

I next grabbed the url to my remote db and created an access token for it, saved both in a .env file and started working on actually doing some development with it.

## The Project
Like I mentioned earlier my ultimate goal was to create a bookshelf page on my personal website to track/display the books I've read. The idea for doing this came from look at [Dave Rupert's bookshelf](https://daverupert.com/bookshelf/) so my hope was to end up with something with at least a similar vibe. I had heard him discuss his bookshelf before on the [Shoptalk podcast](https://shoptalkshow.com/). 

I had recently started using the Book Search plugin in my Obsidian vault to create notes on books I've read and I want to continue to use Obsidian as my ultimate source of truth for all of my personal and work notes as much as possible. Keeping that goal in mind I first wrote a python script to grab all of my book notes and extract the data in the frontmatter from each note, as well as any personal notes I had written about the book if there was any.

Obsidian uses Yaml for the frontmatter and it is separated from the main body of the notes using `---` fences. I also use the Auto Note mover plugin to ensure all of my book notes end up in the same folder within my vault. This combined with using Templater to ensure a fairly consistent structure of each book note meant that parsing the notes files in python was straight forward and simple.

I googled for a python yaml parser and found [pyYaml](https://pyyaml.org/wiki/PyYAMLDocumentation), installed and used that to handle the frontmatter portion of each note, and then updated my book note template to have a section for my own personal comments. That part I grabbed simply using the index method of the python list object to search for the text that marks the start of the new section `# Notes`. Then I just sliced my list of lines in the file to get everything after that.

Putting both pieces together into a dictionary now had me ready for uploading my data into my new Turso database. Here is where I decided on another new to me technology for primarily learning purposes. [Sqlalchemy](https://docs.sqlalchemy.org/en/20/index.html).

## Sqlalchemy and thoughts on ORMs
Before going into my experience with SqlAlchemy and Turso I think its worth describing my personal experience with relational databases leading up to this project. I have a certificate in SQL application development from a community college, whatever that may mean or be worth, and at my previous job I worked with a legacy codebase written in Perl and at least at that job the way we would access data in the company's database, which was DB2 by the way, was to use code that looked a lot like this:

```perl
db.prepare("SELECT name FROM customers WHERE name = ?")
db.execute('tom')
db.fetchall()
```

Now I'm probably a tiny bit off on the syntax and you may well not be familiar with Perl code but I still think it should be fairly clear that what I wrote above is very simple SQL and not some kind of ORM. Which is a bit of a long winded way of saying that I'm actually much more comfortable writing raw SQL queries as compared to using any of the many ORM options available. I did do a bit of dev work at that company in Django which has a built-in ORM which I found fairly easy to use but other than that, nada. 

So to start my Sqlalchemy journey I tried following the quickstart for it in Turso's docs. I quickly ran into one pretty major stumbling block however as the quickstart didn't actually cover how to insert new data into the database. So I bounced over to Sqlalchemy's docs and their quickstart where after more digging than I felt should have been necessary I realized the answer was contained in this section of the quickstart which I noticed and read, but was repeatedly missing the actual bit of code that I needed to write. Certainly just a skill issue on my part but I'll drop a screenshot so you can decide for yourself.

![SqlAlchemy Docs](/project-images/sqlalchemy_docs.png)

Now from here I only ran into one additional problem which doesn't really seem to have blocked anything. When I actually created my tables in Turso using sqlalchemy the types for the columns ended up incorrect. Columns that were supposed to be strings ended up with type numeric instead of text. This didn't seem to actually prevent me from writing the correct data into the database but I didn't love it. I tried doing some digging but never really found an answer as to why it was happening. for reference here is the python code for my models.

```python
from typing import Optional, List
from sqlalchemy import ForeignKey
from sqlalchemy import String, Integer, Date
from sqlalchemy.orm import Mapped, mapped_column, relationship, DeclarativeBase

class Base(DeclarativeBase):
    pass


class Book(Base):
    __tablename__ = "book"
    book_id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    title: Mapped[str] = mapped_column(String)
    status: Mapped[str] = mapped_column(String(30))
    date_finished: Mapped[Optional[str]] = mapped_column(Date)
    cover: Mapped[Optional[str]] = mapped_column(String(255))
    notes: Mapped[Optional[str]] = mapped_column(String)
    author_id: Mapped[int] = mapped_column(ForeignKey("author.author_id"))
    author: Mapped["Author"] = relationship(back_populates="books")


    def __repr__(self) -> str:
        return f"title: {self.title!r}"

class Author(Base):
    __tablename__ = "author"

    author_id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    name: Mapped[Optional[str]] = mapped_column(String) 
    books: Mapped[List["Book"]] = relationship(back_populates="author", cascade="all, delete-orphan") 

    def __repr__(self) -> str:
        return f"name: {self.name!r}"
```

Again could be a skill issue on my part. I was able to very easily edit the column types in the dashboard for my Turso database however and like I mentioned it never actually prevented me from writing the data I wanted so I just moved on. 
## Consuming the data with Astro:db
Now that I had a shiny new database filled with data my next job was reading that data and displaying that on my personal website. This proved to be pretty painless overall just by following the guide in Astro's docs. I created a couple of new environment variables using the names that Astro looks for by default. Then partially recreated my db schema to get the values I wanted in the database config file that running `pnpm astro add db` had handily created for me. Finally I made a new page to hold my bookshelf and queried the database

```javascript
import { db, Book, eq } from "astro:db";
const books = await db.select().from(Book).where(eq(Book.status, "finished"));

```

And then displayed it on my page

```html
		{
			books.map((book) => (
				<div class="book">
					<img
						src={book.cover}
						alt={`Cover of ${book.title}`}
					/>
					<h3>{book.title}</h3>
				</div>
			))
		}
	
```

The only thing I missed here the first time was adding `--remote` to both the dev, and build scripts in my package.json. Definitely my fault this time and easily fixable luckily.

## Closing thoughts
Overall I'm pretty happy with how this went. I have a few more TODOs on the project such as making the page look better on mobile, and scheduling my python script to run every so often to keep my Turso db up to date with my Obsidian vault. However I got a, to me, reasonable MVP of what I wanted up and running without spending a ridiculous amount of time on it, no $ being spent out of pocket, and I learned a couple of new things to at least a very basic level. If you want to check it out its available at [Bookshelf](https://chrispohlman.com/bookshelf). 

I'm not sure that I'm super sold on the idea of using an ORM instead of just writing raw SQL based on my personal experiences with now sqlalchemy and Astro:db (which uses DrizzleORM under the hood), but at least I can say I gave a couple of them a try. 

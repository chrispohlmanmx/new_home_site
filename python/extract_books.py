from sqlalchemy.util import b
import yaml
import os
import sys

from dotenv import load_dotenv

from sqlalchemy import create_engine
from sqlalchemy.orm import Session

from models import Book, Base, Author

def get_book_file_path_list(book_file_directory):
    book_files = os.listdir(book_file_directory)
    return book_files

def extract_frontmatter(path):
    with open(path) as f:
        lines = f.readlines()
        lines = [line.rstrip('\n') for line in lines]
    # pull out yaml frontmatter
    # find second --- which will be the end of the yaml
    end_index = lines.index('---', 1)

    frontmatter = "\n".join(lines[1:end_index])

    return yaml.safe_load(frontmatter)

def extract_notes(path):
    with open(path) as f:
        lines = f.readlines()
        lines = [line.rstrip('\n') for line in lines]
    try:
        notes_index = lines.index('# Notes')
        notes = lines[notes_index+1:]
        notes = "\n".join(notes)
    except:
        notes = None

    return notes 

def get_book_data(book_file_directory):
    base_dir = book_file_directory
    books = get_book_file_path_list(base_dir)
    
    book_data = {}

    for book in books:
        data = extract_frontmatter(os.path.join(base_dir, book))
        notes = extract_notes(os.path.join(base_dir, book))
        try:
            book_title = data['title']
            if book_title not in book_data:
                book_data[book_title] = data
                book_data[book_title]['notes'] = notes
        except:
            print(f'{book} is not a book')
    return book_data

def main(book_file_directory):
    data = get_book_data(book_file_directory)

    load_dotenv()

    TURSO_DATABASE_URL = os.getenv("TURSO_DATABASE_URL")
    TURSO_AUTH_TOKEN = os.getenv("TURSO_AUTH_TOKEN")


    engine = create_engine(
        "sqlite+libsql:///embedded.db",
        connect_args={
            "auth_token": TURSO_AUTH_TOKEN,
            "sync_url": TURSO_DATABASE_URL,
        },
    )

    Base.metadata.create_all(engine) 
    
    with Session(engine) as session:
        for book in data.keys():
            print(f'processing {book} for db')
            book = data[book]
            try:
                date_finished = book['date_finished']
            except:
                date_finished = None
            add_new_book(session, book['author'], book['title'], book['status'], date_finished, book['cover'], book['notes'])

def add_new_book(session, author_name, book_title, book_status, date_finished, book_cover, notes):
    book = ( 
        session.query(Book)
        .join(Author)
        .filter(Book.title == book_title)
        .filter(Author.name == author_name) 
        .one_or_none()
    )
    
    if book is not None:
            return

    if book is None:
            book = Book(
                title=book_title,
                status=book_status,
                date_finished=date_finished,
                cover=book_cover,
                notes=notes,
            )
    author = (
        session.query(Author)
        .filter(Author.name == author_name)
        .one_or_none()
    )

    if author is None:
            author = Author(name = author_name)
            session.add(author)

    book.author = author
    session.add(book)

    session.commit()


if __name__ == "__main__":
    print(main(sys.argv[1]))


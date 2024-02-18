---
title: PCG and Resumes
author: Chris Pohlman
description:
    "A short blog about games featuring procedural content generation and
    learning to make a resume"
image:
    url: "/project-images/developer-tea.jpg"
    alt: "Logo image for the Developer tea podcast"
pubDate: 2022-08-18
tags:
    ["substack", "blogging", "pcg", "procedural-content-generation", "resumes"]
---

# What I’m coding

This week I got to work on something I personally find extremely cool,
procedural content generation for video games. Ever since playing FTL: Faster
Than Light for the first time back in 2011 it quickly became a favorite feature
for a game to have. For those of you who aren’t familiar with procedural content
generation or PCG, it’s really just a way of referring to content that was
created at least somewhat randomly. That is to say that the game designers
didn’t specifically craft it to be the same for every player.

Now this can come in a lot of different forms and levels ranging from the very
simple to the very complex and anywhere in between. On the simple end you can
procedurally generate what is in a chest a player finds for instance. Skyrim
does this for basically every chest in the game. On the very complex end you
have entire games that are procedurally generated such as Minecraft or No Man’s
Sky. These sorts of games usually focus on systems to guide how the player is
allowed to interact with the world to create gameplay, and typically have little
to no story beyond what the player or players create for themselves.

A genre that uses PCG as a staple is the Rogue-like or Rogue-lite, named after
an older game called Rogue that really set the standard. In Rogue-likes often
times the game map you play on is randomly created at the start of each game,
and that is what I set out to do this week with Pac-man.

To accomplish this I used a very simple setup that I would describe as being
similar to working with Legos. I split the map up into 3 equal sections, built
out a few versions of each, and snapped them together just like Legos to create
the final game map.

    def createRandomMap():
        #this will build out a random map by picking a top, middle, and bottom piece
        #from a set of dicts{}
        map = []
        top = tops[random.choice(list(tops.keys()))]
        middle = middles[random.choice(list(middles.keys()))]
        bottom = bottoms[random.choice(list(bottoms.keys()))]
        for line in top:
            map.append(line)
        for line in middle:
            map.append(line)
        for line in bottom:
            map.append(line)
        return map

---

# What I’m Learning

This week I learned a bit about how to craft a good technical resume and perhaps
more importantly what to avoid when creating one for yourself.

#### Do

-   Include links to your relevant online presence such as LinkedIn, GitHub, a
    portfolio page, etc.

Summarize your technical skills

-   Make it your own

    -   Don’t be afraid to show some of your own personality and skills

-   Think of it like setting up a dating profile for your professional self

    -   This time the hot guy/girl is going to be the rad company you’re
        applying at

#### Don’t

-   Make it overly lengthy and detailed

    -   You definitely don’t need to include every job experience you’ve had
        especially the ones that aren’t relevant to the one you want

-   Include your contact information in a header

    -   It can get lost in automatic resume readers/screens

-   Make it overly stylized

    -   Again automatic resume readers, and you want it to be easy for someone
        to read and process quickly

-   Use acronyms or jargon without spelling them out

    -   The person reading your resume initially may not have any experience in
        the industry you are applying to

# Pick of the Week

#### Developer Tea podcast

Developer tea by Jonathan Cutrell is a cool short podcast that dives into topics
ranging from how to have better meetings, to productivity, choosing tools,
really anything and everything that a software engineer is likely to deal with
during their career that isn’t explicitly about how to code or what latest new
tech is worth checking out.

---
title: Digital Organization and Hello World Season
author: Chris Pohlman
description: "Automating some digital organization tasks, and starting school"
image:
    url: "../../../public/project-images/60-songs-cranberries.webp"
    alt:
        "Cover image from a podcast called 60 songs that explain the 90's,
        episode The Cranberries: Zombie"
pubDate: 2022-09-01
tags: ["school", "organization", "automation"]
---

# What I’m coding

This week was a little light on interesting coding projects between school
starting and project presentations for Techwise. I did discover a hole in my
downloads folder automation script while working on my Pac-man project and took
some time to fill it in however. The script reads through the files in my
Downloads folder and automatically moves them to a more relevant folder based on
that files extension (i.e. .mp3 or .pdf). It works quite well but I realized I
had completely forgotten about audio files when I was adding in sound effects to
the game! Luckily past me took some lessons on code modularity to heart which
made it simple to add in what I needed.

The following is all I needed to add in to get the script updated.

    def is_audio_file(filename: str) -> bool:
        filename = filename.lower()
        return filename.endswith('.mp3') or filename.endswith('.pcm') or filename.endswith('.wav') or \
               filename.endswith('.aiff') or filename.endswith('.aac') or filename.endswith('.ogg') \
               or filename.endswith('.wma') or filename.endswith('.flac') or filename.endswith(
            '.alac')

    #And a quick addition of an extra elif to the main function
    elif is_audio_file(name):
       dest = f'{SOURCE}/Audio/{name}'
       move_file(src, dest)

If you’d like to check out the full script its up on
[GitHub](https://github.com/chrispohlmanmx/organizeDownloadsFolder).

The start of school also means that for coding classes it is currently what I
will call Hello, World season! Luckily my only coding class that had me actually
write a program was Python so print(“Hello, World”) and you’re done. Next up
will be figuring out how to write a python script to make all the “Introduce
Yourself” discussion posts that easy and if I do I’ll be sure to release it on
GitHub as well after all those are just made to be automated.

# Pick of the Week - 60 Songs that Explain the 90’s

60 Songs that Explain the 90’s is a podcast from the Ringer featuring rock
critic Rob Harvilla breaking down the sort of lore, influence, and general vibes
surrounding a particular 90’s song that had a big impact. The songs come from
all genres and Rob does an excellent job of using other music related to the
song he is ostensibly focusing on to give context. Perhaps I’m a bit biased
being born in 1993 but I find it incredibly entertaining, informative and a
great way to discover or rediscover some classics from an era of music that
featured some of my favorite bands.

This weeks song was
[“Zombie by The Cranberries”](https://www.theringer.com/2022/8/17/23309016/zombie-cranberries-podcast)

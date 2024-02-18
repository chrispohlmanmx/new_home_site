---
title: "1st Newsletter Edition"
pubDate: 2022-08-11
description: "My first substack newsletter post"
author: "Chris Pohlman"
image:
    url: "../../../public/project-images/close-enough.jpg"
    alt: "Image of a show called Close Enough on HBO"
tags:
    [
        "substack",
        "blogging",
        "coding",
        "techwise",
        "pygame",
        "python",
        "cooking",
    ]
---

## **What I’m Coding**

This week I’m working on a project for a class I’m in, we are making a version
of Pac-man using pygame and I’ve been working on implementing A\* pathfinding
for the ghosts using the python-pathfinding library. It’s still certainly a bit
buggy with some occasional ghosts living up to their namesake better than I’d
like and going straight through walls. Below is the implementation of the
pathfinder I’m using to create the paths the ghosts follow.
[This video was extremely helpful in setting up the code.](https://www.youtube.com/watch?v=8SigT_jhz4I)

    class Pathfinder:
        def __init__(self, matrix):
            self.matrix = matrix
            self.grid = Grid(matrix = matrix)
            self.path = []


        def create_path(self, ghost, pacman_coord):
            #start cell
            start_x, start_y = ghost.get_coord()
            start = self.grid.node(start_x, start_y)
            #end cell
            end_x, end_y = pacman_coord
            #end_x, end_y = [3,3]
            end = self.grid.node(end_x, end_y)

            #path
            finder = AStarFinder()
            self.path, _ = finder.find_path(start, end, self.grid)
            self.grid.cleanup()
            print(self.path)
            return self.path


        def empty_path(self):
            self.path = []

Thanks for reading Christopher’s Newsletter! Subscribe for free to receive new
posts and support my work.

## **What I’m Learning**

This week I learned a lot about A\* and pathfinding algorithms in general. A\*
(read A-Star) is the industry standard algorithm for any kind of pathfinding
where you want to find the shortest path from point A to B. It does this using a
formula of f(n) = g(n) + h(n) and the concept of a graph of nodes connected by
edges. To help explain what that actually means I’ll break down each of the 4
pieces starting with h(n).

h(n) is the heuristic function which is a fancy way of saying its the guess. For
our purposes we are naively guessing at the distance between the point we are
starting at and point n. You can do this by using Euclidean distance (a^2 + b^2
= c^2) or Manhattan distance sometimes called L distance, which is just the
distance you travel down then over similar to how you would travel on foot
through a city on a grid. This value doesn’t take into account any obstacles or
anything of that sort

g(n) is the current shortest distance found from the starting point to point n
as you travel along the graph. This is the part that updates depending on what
is found as the paths are checked.

f(n) is the combination of the two and once the end node is reached this will be
the shortest possible path from the start to the end.

The graph is arguably the most important part. Understanding that any grid can
be converted to a graph of nodes representing points on the grid and edges
representing connections between those points. Most importantly of all you can
add weights to those edges to represent areas that are slower to pass through,
like a highway versus a city street, or a flat meadow versus a rocky mountain.
Edges can also be directed to show that they only allow travel in a single
direction, and just because an edge is shown between two nodes that doesn’t
necessarily mean those nodes are physically connected meaning you can model
things like teleport points.

If you want to learn more
[this Wikipedia article](https://en.wikipedia.org/wiki/A*_search_algorithm) is a
good place to start.

## What I’m Cooking

This week my gf and I had a picnic with her extended family and having recently
acquired a cheap chuck roast that was looking pretty good I decided to make some
Italian-style shredded beef for a sandwich filling. I found
[this](https://www.thechunkychef.com/slow-cooker-shredded-italian-beef/) recipe
online to use as a base and modified it to fit things I had on hand and to
better fit my own tastes, I swapped the pickled peppers for a blend of fresh
poblanos and yellow onions, the white vinegar for apple cider vinegar, and added
in some garlic powder for a final ingredient list of

Chuck Roast

Apple Cider Vinegar

Poblanos

Yellow Onion

Crushed Red Pepper

Garlic Powder

Salt

Pepper

## What I’m Struggling with

The struggle this week has been getting a bug free version of the ghost movement
working and finding time in a busy schedule to do the really important things
like spending time with my Gf. On the first point I have a backup plan to still
deliver a minimum viable product on schedule if I can’t quite make it happen
with the AI, on the second I’m blocking out some extra time to focus on her each
night this week. Never be afraid to schedule in no work times for yourself since
it’s often that time that is most important even though it might not feel as
traditionally productive.

## Pick of the week

Each week I plan to give you all one thing I’ve been enjoying from basically any
category I choose

This week it is
[Close Enough on HBO Max.](https://www.imdb.com/title/tt6994156/) This is a
great adult cartoon from the makers of The Regular Show and follows a
non-traditional home consisting of a married couple and their daughter and their
friends and recently divorced couple. It’s funny, heartfelt, and a little
raunchy, there are random supernatural elements and lots of chaos that all
magically fit together nicely to deliver entertaining short stories showing off
the sort of messy life that many of us now call normal.

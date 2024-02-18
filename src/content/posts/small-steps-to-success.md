---
title: Success, one step at a time
author: Chris Pohlman
description: I read Atomic Habits and wanted to talk about it
tags: ["habits", "learning", "coding", "substack"]
image:
    url: /project-images/libby.png
    alt: logo image for the app Libby
pubDate: 2022-09-15
---

## Success, one step at a time

This week I wanted to talk a little about how small improvements can pay off
over the long term. If you spend much time around anyone who is extremely good
or really successful at something they do and you ask them about it, they will
likely all tell you something similar about how they got that way. Consistency.
Consistency is key to improving at anything. If you do something everyday and
each time you do it you try to push yourself just a tiny bit, you will improve
at it. From day to day you likely won’t notice much of a change, but week to
week, month to month, year to year those tiny improvements will compound in
massive differences. So the next time you want to get good at something, first
try getting just a little bit better than you are right now and then a little
bit better than that.

## What I’m Coding

This week I’ve been learning about stacks in my Data Structures course. Stacks
are a data structure where the last item in is the first one out otherwise known
as LIFO. If you have ever played Magic: The Gathering you are likely very
familiar with the concept. If not simply picture a stack of books, you can put
more books on top of the stack but you are only allowed to remove them one at a
time from the top.

    class Stack:
        def __init__(self, max_size=5):
            self.top = -1
            self.max_size = max_size  # TODO comment
            self.items = ["" for x in range(max_size)]  # TODO comment

        def is_empty(self):
            return self.top == -1

        def is_full(self):
            return self.top == self.max_size - 1

        def push(self, item):
            if self.is_full():
                raise StackFullException.StackFullException
            else:
                self.top += 1
                self.items[self.top] = item

        def pop(self):
            item_str = ""
            if self.is_empty():
                raise StackEmptyException.StackEmptyException
            else:
                item_str = self.items[self.top]
                self.top -= 1
            return item_str

## What I’m Cooking

### **[Hot Caramel-Popcorn Bourbon Apple Cider](https://www.seriouseats.com/hot-spiked-cider-bourbon-caramel-popcorn)**

While this might only just barely count as cooking you do use a stove to make
the key ingredient, in this case the caramel popcorn infused bourbon, so I’m
going to count it. It’s perhaps a bit early to be diving into the fall recipes
weather-wise, but Starbucks has the pumpkin drinks out and Halloween candy is
decorating shelves everywhere so I wanted to share this recipe I found a few
years back. You can use any caramel-popcorn you like, along with any apple cider
and any bourbon, but I would suggest getting a high quality apple cider as a
base for the drink, and pick a bottle of bourbon that you wouldn’t find in the
well of your local dive bar. The recipe is linked above but It really is as
simple as heating a cup of bourbon on low with a big handful of caramel-popcorn
tossed in. Strain that out and either chill for later, or add 2 oz to some
warmed apple cider in a mug and toss a pat of butter on top. Enjoy.

## Pick of the Week - Libby

This weeks pick is really two picks, the app Libby and by extension, your local
library. Because Libby uses your library card to give you access to all of your
local libraries online materials on demand. You can checkout books, magazines,
audiobooks, whatever your local library has available. And if you have multiple
libraries that you have cards for you can add all of them and checkout materials
from all of simultaneously all for free.

[Libby](https://www.overdrive.com/apps/libby)

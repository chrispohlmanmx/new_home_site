---
---

[Subscribe now](https://christopherpohlman.substack.com/subscribe?)

## You’re only human after all

You have neither infinite time, nor infinite abilities. You, your life, your
work and perhaps most importantly your time all have limitations. One way of
looking at this is to be depressed and opt to stay wherever you are currently in
life because of those limitations. Or you can start to reframe how you view them
and begin to work within or around those limitations in order to achieve your
goals. For an extremely simple example of this imagine you are bowling and the
guard rails are up on the lane you are in. If your goal was to get the ball into
the gutter this would provide a substantial challenge. Luckily for you, your
goal is to knock down all pins none of which are in that gutter. The guard rails
are technically a limitation, they limit where your bowling ball is allowed to
go, but rather than make the game more difficult they actually help make it
easier.

## Limitations are guides

The same can be said for many limitations in life. You likely can’t jump as high
as a professional basketball player and thus likely didn’t waste much time in
your life pursuing a career as one. You could likely improve your jumping
abilities through large amounts of training and perseverance, but if you were to
instead spend that time and effort on something you are already good at you
likely might achieve a higher level of success overall, and you will probably
get there much faster. By accepting the things that we aren’t as well suited for
and looking instead pursuing those things that we are well suited for while
keeping in mind where we ultimately want to end up, we begin to make trade-offs
that will push us in the direction of our end-goals more quickly.

Thanks for reading Christopher’s Newsletter! Subscribe for free to receive new
posts and support my work.

Now I don’t want to frame this as a magic trick that will allow you to avoid
hard work all together, or to make light of those limitations that are more
severe, after all not being born with a one in a billion aptitude for jumping is
certainly not the same as being paralyzed. Really this is a personal exercise to
identify the things you are bad at, or the obstacles that are in your way, and
begin thinking about ways you can work around them, or use them to help identify
new paths towards your goals that you might have otherwise missed. No one can
become a master of everything and you might find yourself better off overall if
you can find those things that are uniquely easy for you to master and embrace
them.

## What I’m Coding

Speaking of limitation the large number of them on my time have meant that I
haven’t had the chance to dive into any particularly interesting coding projects
recently, though I do have plans for one I hope to start over winter break, stay
tuned for more on that. In the meantime here is some code I wrote for a homework
assignment, showing off how you can pass arbitrary numbers of arguments to a
function in python without needing to necessarily declare what those arguments
will be first, notice that the keywords before the “=” sign in the last few
lines are different in each of the calls to the average_scores function.

    def average_scores(*args, **kwargs)->str:
        total = 0
        for score in args:
            total += score
        average = total / len(args)

        result = ""
        for key,value in kwargs.items():
            result += f'{key} = {value}, '
        result += f' Average GPA = {average:.2f}'
        return result

    if __name__ == '__main__':
        print(average_scores(4, 3, 2, 4, first_name='Michelle', last_name='Ruse', major='World_domination'))
        print(average_scores(4,3,2,1,1,4,4,4, name="Chris", major="CIS"))
        print(average_scores(4,3,3, name="All Might", course="Hero Course", school="UA"))

If you run this then you will key the following

    first_name = Michelle, last_name = Ruse, major = World_domination,  Average GPA = 3.25
    name = Chris, major = CIS,  Average GPA = 2.88
    name = All Might, course = Hero Course, school = UA,  Average GPA = 3.33

# Pick of the Week - [mCoding Youtube Channel](https://www.youtube.com/c/mCodingWithJamesMurphy)

[

![](https://bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com/public/images/9502f6fa-63a6-4755-a945-cffa00d89077_88x88.jpeg)

](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F9502f6fa-63a6-4755-a945-cffa00d89077_88x88.jpeg)

[mCoding](https://www.youtube.com/c/mCodingWithJamesMurphy) is a YouTube channel
from James Murphy focused on python, c++, and math. While that might not
immediately have you jumping out your chair with excitement, it does do a great
job of explaining more advanced concepts in programming and python specifically
in ways that are easy to understand even for novices in the language. If you
want to see some deep dives into the specifics of python and how things that
might seem very simple on the surface can actually be much odder than you’d
expect under the hood, this might be the channel for you.

Thanks for reading Christopher’s Newsletter! Subscribe for free to receive new
posts and support my work.

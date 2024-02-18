---
pubDate: 2022-11-03
---

## The more you learn the more you realize you don’t know

Or to put it another way your number of questions you might have about a given
subject will begin to expand as they become more specific. For example lets say
I know basically nothing about tennis. If I wanted to find out more I’d likely
start by asking a very broad question like what is tennis? Then from there I
might find out it’s a sport and can ask more questions like how is it played?
This might quickly explode into more and more specific questions regarding rules
and how they interact with each other, who makes the best rackets or tennis
balls?, etc. Pretty obvious but recognizing what phase in the question asking
spectrum you are at for a given subject might give you a better idea of how much
you actually know on a subject already. If you feel like you have a ton of very
specific questions you might already be further in your journey of learning
about that subject than you thought.

This does bring up another issue however, especially when it comes to fields
like computer programming which require a lot of knowledge and a lot of practice
to master. How do you keep from getting stuck in mode or the other? After all
without asking new questions you likely won’t make progress and without
practicing implementing the things you learn from those questions you likely
won’t get much value out of asking them. My suggestion is to focus mainly on
practice whenever you can, but to also keep a log of any questions you run into
while you are coding, or reading documentation, or any other time they might pop
into your head. This way you won’t need to worry about any pesky infinite loops
in your learning process.

Thanks for reading Christopher’s Newsletter! Subscribe for free to receive new
posts and support my work.

Whenever you come across something you aren’t quite sure that you understand,
write it down, make it detailed or broad, feel free to include context or not,
whatever will make it easier to research answers later. Then next time you have
extra time but can’t actually practice coding pull up your question list and
pick one to research, or if you come across an answer naturally go back and put
the answer in your log. Over time you will end up with a wonderful custom wiki
that will show off just how much you’ve learned. This practice works great for
any subject matter too, not just for coding!

## What I’m coding this Week

This week I added to my roll for sandwich website and gave it a new feature of
accepting custom lists of ingredients from users, so you can always roll a
sandwich that you have the ingredients at home for. This is accomplished using a
form and saving the entered data to local storage in the browser. The function
that makes it work is pretty simple but it of course took a few iterations of
bug fixing to get it working the way I intended.

    function getUserFoods() {
        const breadsTextArea = document.querySelector("#breads");
        const meatsTextArea = document.querySelector("#meats");
        const cheesesTextArea = document.querySelector("#cheeses");
        const veggiesTextArea = document.querySelector("#veggies");
        const condimentsTextArea = document.querySelector("#condiments");

        const breadsList = breadsTextArea.value.split(",");
        const meatsList = meatsTextArea.value.split(",");
        const cheesesList = cheesesTextArea.value.split(",");
        const veggiesList = veggiesTextArea.value.split(",");
        const condimentsList = condimentsTextArea.value.split(",");

        localStorage.setItem("breads", breadsList);
        localStorage.setItem("meats", meatsList);
        localStorage.setItem("cheeses", cheesesList);
        localStorage.setItem("veggies", veggiesList);
        localStorage.setItem("condiments", condimentsList);
        localStorage.setItem("useUserFoods", "true");

        userFoodsSection.classList.add("hidden");
        landingSection.classList.add("hidden");
        sandwichSection.classList.remove("hidden");
        roll();
    }

## Pick of the Week - Morning Brew

[

![](https://bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com/public/images/ef3f6cac-9a4d-4a38-9d27-1397f4c5690c_1200x1200.png)

](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fef3f6cac-9a4d-4a38-9d27-1397f4c5690c_1200x1200.png)

[Morning Brew](https://www.morningbrew.com/daily/r?kid=de8ca90d) is another
newsletter focused on bringing you a concise collection of news stories that are
primarily relevant to the world of business in the most general sense. You also
get a quick snapshot of the current state of the stock market and the writing
tends to be pretty fun. The company behind Morning Brew also puts out a few
other newsletters focused on more specific things such as emerging tech!

Thanks for reading Christopher’s Newsletter! Subscribe for free to receive new
posts and support my work.

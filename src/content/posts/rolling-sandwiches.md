---
pubDate: 2022-10-27
---

[Share Christopher’s Newsletter](https://christopherpohlman.substack.com/?utm_source=substack&utm_medium=email&utm_content=share&action=share)

# Make your silly ideas

Recently I talked about ways to help yourself be more creative even when you
aren’t particularly creative by default. Another piece of that puzzle is to not
get caught up in the idea that your ideas have to be good, meaningful, or
substantial to be worth doing something with. A silly idea can easily turn out
to have more value than you might expect, and sometimes a series of silly ideas
pursued until completion can become something really cool once they are done.

I was watching a
[YouTube video](https://www.youtube.com/watch?v=PKy2lYEnhgs&t=6233s) by Theo -
ping.gg where he built a full stack web application to determine which Pokemon
is the most round. This is clearly a ridiculous question, the answer is
[Spheal](<https://bulbapedia.bulbagarden.net/wiki/Spheal_(Pok%C3%A9mon)>)
clearly, but he recorded it into a tutorial and used it to show off many of the
components that go into a modern web application. That silly question made for a
very simple and easy to describe and understand goal for the development which
made it a perfect tutorial. You can check out the final product
[here](https://roundest.t3.gg/). This ended up giving me the little bit of extra
motivation I needed to make my own website based on a silly idea.

Thanks for reading Christopher’s Newsletter! Subscribe for free to receive new
posts and support my work.

[

![](https://bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com/public/images/1b60eb9d-dc28-4403-9c2a-124bf4906df2_250x250.webp)

](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F1b60eb9d-dc28-4403-9c2a-124bf4906df2_250x250.webp)

## What I’m Coding

This week I decided to test out some of the web development things I’ve been
learning in the TechWise program to see if they’ve actually been sticking in my
brain. I had the idea to make a website based on a TikTok by
[@adventuresinaardia](https://www.tiktok.com/@adventuresinaardia?lang=en) where
the creator rolls dice to decide what he has to make his sandwich out of.

In a nutshell my website does the same thing. Under the hood there are lists of
ingredients for each part of a sandwich, I defined these as bread, meat, cheese,
veggie, and condiment, and then rather than rolling dice I let Javascript’s
built in Math.random do the selecting. The whole site is only one page, with
different sections being set to hidden depending on the state of the website.
Very simple, but I like to think kinda fun. The main function that handles the
bulk of the site is below and if you want to check out more its all up on
[GitHub](https://github.com/chrispohlmanmx/rollForSandwich). You can try out the
site yourself at

[https://chimerical-rolypoly-ebe7d4.netlify.app/](https://chimerical-rolypoly-ebe7d4.netlify.app/).
This also gave me a chance to try out hosting a site on Netlify which turned out
to be extremely simple to setup and use. Just point it at a GitHub repo and
you’re good to go.

    function roll() {
        var breadsSelection;
        var meatsSelection;
        var cheesesSelection;
        var veggiesSelection;
        var condimentsSelection;

        var useUserFoods = localStorage.getItem("useUserFoods");

        console.log(useUserFoods);

        if (useUserFoods === "true") {
            userBreads = localStorage.getItem("breads").split(",");
            userMeats = localStorage.getItem("meats").split(",");
            userCheeses = localStorage.getItem("cheeses").split(",");
            userVeggies = localStorage.getItem("veggies").split(",");
            userCondiments = localStorage.getItem("condiments").split(",");

            breadsSelection = userBreads[getRandomInt(userBreads.length)];
            meatsSelection = userMeats[getRandomInt(userMeats.length)];
            cheesesSelection = userCheeses[getRandomInt(userCheeses.length)];
            veggiesSelection = userVeggies[getRandomInt(userVeggies.length)];
            condimentsSelection =
                userCondiments[getRandomInt(userCondiments.length)];
        } else {
            breadsSelection = breads[getRandomInt(breads.length)];
            meatsSelection = meats[getRandomInt(meats.length)];
            cheesesSelection = cheeses[getRandomInt(cheeses.length)];
            veggiesSelection = veggies[getRandomInt(veggies.length)];
            condimentsSelection = condiments[getRandomInt(condiments.length)];
        }
        const breadDiv = document.querySelector("#bread div.card-body");
        const meatDiv = document.querySelector("#meat div.card-body");
        const cheeseDiv = document.querySelector("#cheese div.card-body");
        const veggieDiv = document.querySelector("#veggies div.card-body");
        const condimentDiv = document.querySelector("#condiments div.card-body");

        removeChildren(breadDiv);
        removeChildren(meatDiv);
        removeChildren(cheeseDiv);
        removeChildren(veggieDiv);
        removeChildren(condimentDiv);

        const breadSpan = document.createElement("span");
        breadSpan.classList.add(
            "card-text",
            "font-weight-bold",
            "text-center",
            "text-capitalize"
        );
        breadSpan.innerText = breadsSelection;
        breadDiv.appendChild(breadSpan);

        const meatSpan = document.createElement("span");
        meatSpan.classList.add(
            "card-text",
            "font-weight-bold",
            "text-center",
            "text-capitalize"
        );
        meatSpan.innerText = meatsSelection;
        meatDiv.appendChild(meatSpan);

        const cheeseSpan = document.createElement("span");
        cheeseSpan.classList.add(
            "card-text",
            "font-weight-bold",
            "text-center",
            "text-capitalize"
        );
        cheeseSpan.innerText = cheesesSelection;
        cheeseDiv.appendChild(cheeseSpan);

        const veggieSpan = document.createElement("span");
        veggieSpan.classList.add(
            "card-text",
            "font-weight-bold",
            "text-center",
            "text-capitalize"
        );
        veggieSpan.innerText = veggiesSelection;
        veggieDiv.appendChild(veggieSpan);

        const condimentSpan = document.createElement("span");
        condimentSpan.classList.add(
            "card-text",
            "font-weight-bold",
            "text-center",
            "text-capitalize"
        );
        condimentSpan.innerText = condimentsSelection;
        condimentDiv.appendChild(condimentSpan);

        // console.log(
        //     `Bread: ${breadsSelection}, Meat: ${meatsSelection}, Cheese: ${cheesesSelection}, Veggie: ${veggiesSelection}, Condiments: ${condimentsSelection}`
        // );
    }

## Pick of the Week - [Syntax.fm](https://syntax.fm/)

[

![](https://bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com/public/images/665c576e-3c64-46c1-80db-48cfd036ddb3_899x856.png)

](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F665c576e-3c64-46c1-80db-48cfd036ddb3_899x856.png)

Syntax is a podcast by developers Wes Bos and Scott Tolinski that focuses on Web
development. Most of the episodes feature the two talking to each other about
different web technologies, or answering listener questions, but they also
sometimes have other developers on for interviews and deeper dives into specific
bits of web development. Overall its a well-made and fun to listen to podcast
for anyone who is either involved in web development or maybe just wants to
enjoy some tasty web development treats to satisfy their own curiosity about web
development.

Thanks for reading Christopher’s Newsletter! Subscribe for free to receive new
posts and support my work.

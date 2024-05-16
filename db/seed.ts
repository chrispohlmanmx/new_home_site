import { db, media } from "astro:db";

export default async function () {
    await db.insert(media).values([
        { name: "The Merlin Saga by T.A. Barron", medium: "Books" },
        { name: "The Hobbit", medium: "Books" },
        { name: "The Lord of The Rings Trilogy", medium: "Books" },
        { name: "Harry Potter", medium: "Books" },
        { name: "Slaughterhouse Five", medium: "Books" },
        { name: "The legend of King Arthur", medium: "Books" },
        { name: "Siddartha", medium: "Books" },
        { name: "A Clockwork Orange", medium: "Books" },
        { name: "Ishmael", medium: "Books" },
        { name: "Deltora Quest 1", medium: "Books" },
        {
            name: "So you Want to be a Wizard",
            medium: "Books",
            author: "Diane Duane",
        },
        { name: "Making Money", medium: "Books" },
        { name: "Going Postal", medium: "Books" },
        { name: "Atomic Habits", medium: "Books" },
        { name: "MX vs ATV Unleashed", medium: "Video Games" },
        { name: "Super Smash Bros Melee", medium: "Video Games" },
        { name: "Morrowind", medium: "Video Games" },
        { name: "Oblivion", medium: "Video Games" },
        { name: "Skyrim", medium: "Video Games" },
        { name: "FTL: Faster than light", medium: "Video Games" },
        { name: "Dragon Age Origins", medium: "Video Games" },
        { name: "Mass Effect 1-3", medium: "Video Games" },
        { name: "The Outer Wilds", medium: "Video Games" },
        { name: "Terraria", medium: "Video Games" },
        { name: "Borderlands 1 & 2", medium: "Video Games" },
        { name: "Portal", medium: "Video Games" },
        { name: "Dishonored", medium: "Video Games" },
        { name: "Batman Arkham Asylum", medium: "Video Games" },
        { name: "Batman Arkham City", medium: "Video Games" },
        { name: "Mark of the Ninja", medium: "Video Games" },
        { name: "Geometry Wars Retro Evolved", medium: "Video Games" },
        { name: "Bioshock", medium: "Video Games" },
        { name: "Bioshock 2", medium: "Video Games" },
        { name: "Stars Wars Battlefront 2", medium: "Video Games" },
        { name: "Halo 1-3", medium: "Video Games" },
        {
            name: "Star Wars knights of the old republic 2",
            medium: "Video Games",
        },
        { name: "Wolfenstein The New Order", medium: "Video Games" },
        { name: "Kingdoms of Amalur Reckoning", medium: "Video Games" },
        { name: "Farcry 3 Blood dragon", medium: "Video Games" },
        { name: "Assassins Creed Brotherhood", medium: "Video Games" },
        { name: "Pokemon Gen 1-3", medium: "Video Games" },
        { name: "Teslagrad", medium: "Video Games" },
        { name: "Bastion", medium: "Video Games" },
        { name: "Age of Empires 2", medium: "Video Games" },
        { name: "Stardew Valley", medium: "Video Games" },
        { name: "It takes two", medium: "Video Games" },
        { name: "Baldur's Gate 3", medium: "Video Games" },
        { name: "Rogue legacy", medium: "Video Games" },
        {
            name: "Star Wars Galactic Battlegrounds Saga",
            medium: "Video Games",
        },
        { name: "Limbo", medium: "Video Games" },
        { name: "Tony Hawk's Pro Skater", medium: "Video Games" },
        { name: "Need for Speed Underground 1-2", medium: "Video Games" },
        { name: "Need for Speed Most Wanted", medium: "Video Games" },
        { name: "Saints Row 1-3", medium: "Video Games" },
        { name: "Amnesia dark descent", medium: "Video Games" },
        { name: "God of War 3", medium: "Video Games" },
        { name: "Psych", medium: "TV shows" },
        { name: "Monk", medium: "TV shows" },
        { name: "Friends", medium: "TV shows" },
        { name: "Naruto Shippuden", medium: "TV shows" },
        { name: "Dragon Ball Z", medium: "TV shows" },
        { name: "One punch Man", medium: "TV shows" },
        { name: "Seinfeld", medium: "TV shows" },
        { name: "Stranger Things", medium: "TV shows" },
        { name: "Lost", medium: "TV shows" },
        { name: "Malcom in the Middle", medium: "TV shows" },
        { name: "King of the Hill", medium: "TV shows" },
        { name: "South Park", medium: "TV shows" },
        { name: "Spongebob", medium: "TV shows" },
        { name: "Mobile Suit Gundam", medium: "TV shows" },
        {
            name: "I think Gundam Wing would have been the one I saw",
            medium: "TV shows",
        },
        { name: "Kill La Kill", medium: "TV shows" },
        { name: "Gurren lagan", medium: "TV shows" },
        { name: "Stargate Atlantis", medium: "TV shows" },
        { name: "Star Trek Next Generations", medium: "TV shows" },
        { name: "Breaking Bad", medium: "TV shows" },
        { name: "Avatar TOLA & Korra", medium: "TV shows" },
        { name: "FullMetal Alchemist Brotherhood", medium: "TV shows" },
        { name: "Attack on Titan", medium: "TV shows" },
        { name: "Hunter x Hunter", medium: "TV shows" },
        { name: "Gravity Falls", medium: "TV shows" },
        { name: "Cowboy Bebop", medium: "TV shows" },
        { name: "Batman The animated Series", medium: "TV shows" },
        { name: "Justice League Ultimate", medium: "TV shows" },
        { name: "Its Always Sunny in Philadelphia", medium: "TV shows" },
        { name: "Ted Lasso", medium: "TV shows" },
        { name: "Over the garden Wall", medium: "TV shows" },
        { name: "Blue Eye Samurai", medium: "TV shows" },
        { name: "House", medium: "TV shows" },
        { name: "Parks and Rec", medium: "TV shows" },
        { name: "Daredevil", medium: "TV shows" },
        { name: "Demon Slayer", medium: "TV shows" },
        { name: "The Newsroom", medium: "TV shows" },
        { name: "West Wing", medium: "TV shows" },
        { name: "Battlestar Galactica", medium: "TV shows" },
        { name: "The IT Crowd", medium: "TV shows" },
        { name: "Silicon Valley", medium: "TV shows" },
        { name: "Chefs Table", medium: "TV shows" },
        { name: "No Reservations with Anthony Bourdain", medium: "TV shows" },
        { name: "Still Standing", medium: "TV shows" },
        { name: "True detective 1", medium: "TV shows" },
        { name: "Supernatural", medium: "TV shows" },
        { name: "The Black Cauldron", medium: "Movies" },
        { name: "The Land before Time", medium: "Movies" },
        { name: "Cars", medium: "Movies" },
        { name: "The Incredibles 1-2", medium: "Movies" },
        { name: "Christopher Nolan's Batman movies", medium: "Movies" },
        { name: "Batman", medium: "Movies" },
        { name: "The Lord of the Rings Trilogy", medium: "Movies" },
        { name: "Spiderman", medium: "Movies" },
        {
            name: "Basically all of the movies other than the Amazing Spiderman 1-2",
            medium: "Movies",
        },
        {
            name: "Spiderman 2 and the Into the Spiderverse movies in particular though",
            medium: "Movies",
        },
        { name: "John Wick 1-4", medium: "Movies" },
        { name: "The fast and the furious series", medium: "Movies" },
        { name: "Lock, stock and two smoking barrels", medium: "Movies" },
        { name: "Smoking Aces", medium: "Movies" },
        { name: "Snatch", medium: "Movies" },
        { name: "Shawshank Redemption", medium: "Movies" },
        { name: "12 angry men", medium: "Movies" },
        { name: "Forrest Gump", medium: "Movies" },
        { name: "Toy Story 1-2", medium: "Movies" },
        { name: "The Matrix 1-3", medium: "Movies" },
        { name: "Star Wars the original trilogy", medium: "Movies" },
        { name: "Saving Private Ryan", medium: "Movies" },
        { name: "Monty Python and the Holy Grail", medium: "Movies" },
        { name: "Monty Python and the life of brian", medium: "Movies" },
        { name: "The Green Mile", medium: "Movies" },
        { name: "Terminator 2", medium: "Movies" },
        { name: "Spirited Away", medium: "Movies" },
        { name: "Castle in the sky", medium: "Movies" },
        { name: "Sky captain and the world of tomorrow", medium: "Movies" },
        { name: "Iron Sky", medium: "Movies" },
        { name: "Big Fish", medium: "Movies" },
        { name: "Gladiator", medium: "Movies" },
        { name: "Goodfellas", medium: "Movies" },
        { name: "The lion king", medium: "Movies" },
        { name: "Remember the Titans", medium: "Movies" },
        { name: "Unforgiven", medium: "Movies" },
        { name: "Django Unchained", medium: "Movies" },
        { name: "Raiders of the Lost Ark", medium: "Movies" },
        { name: "Indiana Jones and the last crusade", medium: "Movies" },
        { name: "Star Trek 2,4, First Contact", medium: "Movies" },
        { name: "Wall-e", medium: "Movies" },
        { name: "Inglorius Bastards", medium: "Movies" },
        { name: "Kill Bill 1-2", medium: "Movies" },
        { name: "Ip Man", medium: "Movies" },
        { name: "The ones with Donnie Yen", medium: "Movies" },
        { name: "Braveheart", medium: "Movies" },
        { name: "Good Will Hunting", medium: "Movies" },
        { name: "Defending your life", medium: "Movies" },
        { name: "The Patriot", medium: "Movies" },
        { name: "Idiocracy", medium: "Movies" },
        { name: "Office Space", medium: "Movies" },
        { name: "Full Metal Jacket", medium: "Movies" },
        { name: "Die Hard", medium: "Movies" },
        { name: "Top Gun", medium: "Movies" },
        { name: "The Truman Show", medium: "Movies" },
        { name: "Click", medium: "Movies" },
        { name: "50 first dates", medium: "Movies" },
        { name: "Pan's labyrinth", medium: "Movies" },
        { name: "V for Vendetta", medium: "Movies" },
        { name: "Wall Street", medium: "Movies" },
        { name: "The Big short", medium: "Movies" },
        { name: "Rocky 1-4", medium: "Movies" },
        { name: "Creed 1-2", medium: "Movies" },
        { name: "Warrior", medium: "Movies" },
        { name: "Fargo", medium: "Movies" },
        { name: "O brother where art thou?", medium: "Movies" },
        { name: "Blade Runner and Blade Runner 2049", medium: "Movies" },
        { name: "Dead Poets Society", medium: "Movies" },
        { name: "How to Train your dragon 1-3", medium: "Movies" },
        { name: "Logan", medium: "Movies" },
        { name: "The Wizard of Oz", medium: "Movies" },
        { name: "The Iron Giant", medium: "Movies" },
        { name: "Aladdin", medium: "Movies" },
        { name: "Groundhog Day", medium: "Movies" },
        { name: "Ghostbusters 1-2", medium: "Movies" },
        { name: "Rush", medium: "Movies" },
        { name: "Mad Max Thunderdome and Fury Road", medium: "Movies" },
        { name: "Million Dollar Baby", medium: "Movies" },
        { name: "Klaus", medium: "Movies" },
        { name: "The Santa claus 1-2", medium: "Movies" },
        { name: "Finding Nemo", medium: "Movies" },
        { name: "Jurassic Park 1, 3", medium: "Movies" },
        { name: "Interstellar", medium: "Movies" },
        { name: "Shutter Island", medium: "Movies" },
        { name: "Lucky Number Slevin", medium: "Movies" },
        { name: "Donnie Darko", medium: "Movies" },
        { name: "The Prestige", medium: "Movies" },
        { name: "Back to the future trilogy", medium: "Movies" },
        { name: "The Illusionist", medium: "Movies" },
        { name: "The fifth element", medium: "Movies" },
        { name: "12 monkeys", medium: "Movies" },
        { name: "Mr. Nobody", medium: "Movies" },
    ]);
}
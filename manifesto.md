# So What do I want from this websie?

The basic idea for this website is simple. A place where I can track/ show off all of my interests.

But what does that mean? Well let's start by breaking down my interests. These incle:

- Gaming (Obviously)
- 3d Graphics
- Programming

Now let's look at each one and see what we want from it

## Gaming

I personaly mostly game on pc and PS5, but I also do emulation, and play on other platforms that I own. I also do a lot of achievement hunting.

- I want to be able to see a nice representation of all games that I have beaten.
- I want to be able to click on one of those games and see the artwork for it, screenshots that I have taken for that game, maybe in a carousel. Obviously those pictures should be able to be expanded too. I should also be able to give each game a rating, chart the platform that I beat it in, write a small review, maybe be able to see a small marketing blur about it. This page would look a lot like the pages I made for games in my game store.
- I want STATS!!!! Stats are the best. I want charts with stats on them for genres of games, for consoles played on etc. I also want to see the time spend on each game, total time spend per console, total time spend in general etc. Basically take the functionality of how long to beat and put it on my own website.
- I want a section where I can see games I have 100% on Steam or otherwise, as well as my plats. I envision this to be like a seperate page.
- If I can find a way to do it, I would like to implement a "similar games" section on the individual game's page. Idealy this will hit some api to get recomendations for games and auto-generate the list, while also being able to get box covers on its' own and will filter out any games already beaten.
- A backlog feature, where I can store games that I am interested in. I should be able to mark any games I am currently playing.
- I am a FF14 player. Its' page sould have a way to show the high end content I have already beaten, simmilar to what the 1.0 version had.

## 3D Graphics

This section should be very straight forward enough. It will just have a bunch of renders that I have done. It should implement pagination so that we don't get so much of an overhead with all the images loaded.

## Programming

Another straight forward section. Show off some of my projects that I am particularly happy with. Sould have links to github and possible live versions. Again, pagination should be implemented here.

# The others

The site will also implement a couple more pages in its' initial form. A blog and a home page as well as a hidden admin page.

## The blog

I would like a simple implementation of a blog so I can feed the world with my very bad takes on staf that come to mind.

## The home page

The home page will have a small introduction message and then display a few things:

- The game I am currently playing should be displayed front and center.
- Recent pictures added
- Links to the last three blogs, with some exerpts from them.
- Recent renders

## The admin page

I don't want to have to update the repo every time I want to interact with the webpage by adding content. I want a password protected, hidden admin page, that will allow me to do operations on the website like adding new stuff, deleting stuff, updating staff etc. This will be implemented on the second iteration.

# How am I gonna do all this?

Now that I haave an idea on what the page should look like, lets see how I am gonna accomplish all that.

First and foremost, it is good to note that this is a rewrite of the original webpage. The ooriginal version was written in plain old html-css-js. It was done like this deliberately, as it was meant to be a way to unblock my brain from all the ReactJS shit I had to deal with in previews projects. While react is a good framework and one that I like, I found that there are plenty of pain points that are absolutely maddening to deal with, especialy when considering that most of my projects where small and likely didn't gain much from using react anyway. But, I digress. What this means for the re-write is that I have a basic example of how the website should be operating when online.

Another thing to consider is why rewrite the site in the first place. The website in its' simple form that it exists right now is not THAT bad, but as time passes I find myself using in more and more, and wanting to do more and more with it. If I was to continue with my current implementation I would just keep adding more chaos with each new feature implemented. A rewrite that will use a frontend framework and will focus on extensibility became more and more desirable. Finaly I hate that I currently have to update the repo every single time I want to add a new image, or change something else in the site.

On another note, this re-write isn't happening just for the websites' shake. It also is meant to be a challenge in learning new things, getting out of my comfort zone and maybe finaly rebuilding my confidence in my programming abilities.

As such the new implementation will **not use React or Node**. This is a big deal for me and I will probably come to regret it many times in the future, when I will be struggling with the new technologies I'll be using.

Owing to the ammount of new technologies that will be used, I plan to break down the rewrite in three phases, to keep the amount of new information as small as possible per phase.

## Phase 1

In phase 1 the website will be implemented without a back end. That means:

- All pages are going to be hard coded.
- The blog page will keep linking to that one shitty blog I made ages ago and never used again.
- The admin page will be a dummy page with nothing in it.
- Despite being hardcoded, all pages will need to look like they will be in the final version, have their carousels implemented, have their pagination implemented etc.
- Exception to the above will be the individual games pages as it would be kinda stupid to try and implement a seperate page for each of the 100+ games I have beaten.

Basicaly this phase is going to be all about porting the current website to my chosed framework.

## Phase 2

The server phase! This phase will be all about creating the back end for the project. Pages will move to being generated instead of hard coded, the images will leave the front end and go to the back end etc. It's in this phase when the individual games page will be implemented, as well as the admin page.

## Phase 3

A new blog setup will be implemented here. This will test the implementation's ability to add new features to the website. Also in this phase I will do clean up of the code base.

# The stack

Ok, with the work now outlined I need to decide what exactly I want to use in this project. As of the time of writing I have not concluded on a final stack, and since I know very little about the techs I am considering, I will not be outlining any libraries for individual components etc.

## The front end

As stated above, I do not want to use React. While my familiarity with the framework (no, it's not a library), would mean that I would be the most productive while using it, I am commited in using this project as a way to learn new stuff. So after a lot of thinking I came up with two possible solutions.

- Vue
- Svelte

Vue and Svelte have both been on my radar for a while now and I am glad I have the chance to use one of them. The final choice will be highly dependent on a couple of factors:

- Typescript support. After tasting the forbiden fruit of types in js I just can't go back. If any of those prevent me from using typescript, it will automaticaly disqualify it.
- Deployment choices.


## The back end

First of all I refuse to go serverless.In the back end I will be trying going with a new language, one of Rust, GO or C#. Out of all of them Rust is the one I am mostly interested in, but some research and deliberation will have to be done before I decide on what to use here. 

Another question is the database. Currently I have only experience in using MongoDB. Again I don't want to go with something I already know, so I will be going with SQL here to get some experience with the basics.

Finaly, I have to see what deployment options I have for the server. At some point I had heard that Oracle was giving a free server with limited size and speed. If that is still the case, it would be the ideal choice, since it is the most like using a local machine and will undoubtedly expose me to a bunch of things that automated solutions hide away.

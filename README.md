<h1><a href="https://ankiport-app.appspot.com/"><img src="./public/res/aplogo.png" alt="ankiport logo" width="100"/></a>Ankiport</h1>

<a href="https://travis-ci.org/jahzielv/ankiport-web">![ankiport-build](https://travis-ci.org/jahzielv/ankiport-web.svg?branch=master)</a>
<a href="https://prettier.io/">![prettier-badge](https://img.shields.io/badge/Style-Prettier-blue.svg)</a>

An app that lets you convert from Quizlet to Anki.

Just plug in a valid Quizlet URL, click `Make a Deck!`, and it'll download an Anki `.apkg` with all the text content transferred over.

## What is Quizlet?

[Quizlet](quizlet.com) is a web-based flashcard service that lets you create flashcard decks for pretty much anything. As a student, Quizlet has been a valuable resource for effective learning - it's also the defacto way to make and share flashcards, at least at my school. While Quizlet is a great and fast way to make flashcards and share them with others, there are a lot of features (custom images, audio, offline access, no ads) that are reserved only for paying members.

## What is Anki?

Enter [Anki](https://apps.ankiweb.net/)! Anki is also a flashcard service, but it beats Quizlet out in a number of ways. For starters, the Anki project is open source, and the Anki app is completely free. You get a lot of the features that you have to pay for in Quizlet for free, plus a load of other really great features that let you make Anki your own. Here are just some of them:

### Anki features that are free:

-   Offline studying
-   Custom image support
-   Audio
-   No ads!

### Additional features:

-   Latex support (for flawless looking math)
-   Code syntax highlighting (for all you CS college students)
-   Extensible (Anki is written in Python, and anyone can write an Anki extension for everyone to use)
-   Fully customizable card styles (via CSS)

As you can tell, I really like Anki :P I loved using Quizlet, but once I discovered Anki, I couldn't go back.

## Why Ankiport?

Like I said earlier, Quizlet is the standard way to make and share flashcards amongst my fellow students. Anki is pretty underground compared to Quizlet, so I often found myself still using Quizlet just for the sake of easy sharing. I wanted a bridge between the two, so that I could take stuff that had been made in Quizlet and port it over to Anki. From that idea, Ankiport was born!

---

## Feature List

### Current (0.0.4)

Ankiport can currently only handle text flashcards. Quizlet sets with images will still be processed, but the image won't be included in the Anki deck. Same goes for audio - support for these is coming soon!

### Coming Soon (0.2.0)

-   [ ] Image support
-   [ ] Changing Anki card style (CSS)

### On the horizon

-   Audio support
-   Math conversion to Latex
-   Sharing decks to Ankiweb

## Nerdy Deets

Ankiport is a pretty standard React app, originally bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
The backend is a Flask API that lives [here](https://ankiport-api.appspot.com/); the code can be found [here](https://github.com/jahzielv/ankiport-api).

---

## Credits

Many thanks to [Kerrick Staley](https://github.com/kerrickstaley) for writing [genanki](https://github.com/kerrickstaley/genanki), without which this project would not be possible!

I found the Ankiport logo here: https://www.goodfreephotos.com/vector-images/black-anchor-icon.png.php. It is indeed a good free photo.

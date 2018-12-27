import React, { Fragment } from "react";
import { Typography } from "@material-ui/core";

export const AboutSection = () => {


    return (
        <Fragment>
            <Typography variant="h3"><img src="../res/aplogo.png" alt="ankiport logo" width="100" />Ankiport</Typography>

            <Typography variant="body1">
                <p>An app that lets you convert from Quizlet to Anki.</p>
                <p>Just plug in a valid Quizlet URL, click <code>Make a Deck!</code>, and it'll download an Anki <code>.apkg</code> with all the text content transferred over.</p>
            </Typography>

            <Typography variant="h5"> What is Quizlet?</Typography>

            <Typography variant="body1"><a href="quizlet.com">Quizlet</a> is a web-based flashcard service that lets you create flashcard decks for pretty much anything.</Typography>
            <Typography variant="h5"> What is Anki?</Typography>

            <Typography variant="body1"> <a href="https://apps.ankiweb.net/">Anki</a> is also a flashcard service, but it beats Quizlet out in a number of ways. For starters, the Anki project is open source, and the Anki app is completely free. You get a lot of the features that you have to pay for in Quizlet for free, plus a load of other really great features that let you make Anki your own. Here are just some of them:</Typography>

            <Typography variant="subtitle2"> Quizlet features that are free: </Typography>
            <Typography variant="body1">
                <ul>
                    <li>Offline studying</li>
                    <li>Custom image support</li>
                    <li>Audio</li>
                    <li>No ads!</li>
                </ul>
            </Typography>

            <Typography variant="subtitle2">Additional features: </Typography>
            <Typography variant="body1">
                <ul>
                    <li>Latex support (for flawless looking math)</li>
                    <li>Code syntax highlighting (for all you CS college students)</li>
                    <li>Extensible (Anki is written in Python, and anyone can write an Anki extension for everyone to use)</li>
                    <li>Fully customizable card styles (via CSS)</li>
                </ul>
                As you can tell, I really like Anki :P I loved using Quizlet, but once I discovered Anki, I couldn't go back.
                    </Typography>

            <Typography variant="subtitle1"> Why Ankiport?</Typography>

            <Typography variant="body1">Like I said earlier, Quizlet is the standard way to make and share flashcards amongst my fellow students. Anki is pretty underground compared to Quizlet, so I often found myself still using Quizlet just for the sake of easy sharing. I wanted a bridge between the two, so that I could take stuff that had been made in Quizlet and port it over to Anki. From that idea, Ankiport was born!</Typography>
        </Fragment >
    )
}


export default AboutSection;
import React, { Fragment } from "react";
import { Typography, Grid } from "@material-ui/core";
// import aplogo from "../assets/aplogo.png";
import aplogo from "../assets/aplogo.webp";

export const AboutSection = () => {
    return (
        <Fragment>
            <Typography variant="h3">
                <img src={aplogo} alt="ankiport logo" width="100" />
                Ankiport
            </Typography>
            <Grid container direction="row">
                <img
                    alt="Ankiport Version"
                    src="https://img.shields.io/github/release/jahzielv/ankiport-web.svg"
                />
                <Typography variant="subtitle2" style={{ paddingLeft: "15px" }}>
                    Code hosted on{" "}
                    <a
                        href="https://github.com/jahzielv/ankiport-web"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        Github
                    </a>
                </Typography>
            </Grid>

            <Typography variant="body1" component={"span"}>
                <p>An app that lets you convert from Quizlet to Anki.</p>
                <p>
                    Just plug in a valid Quizlet URL, click <code>Make a Deck!</code>,
                    and it'll download an Anki <code>.apkg</code> with all the text
                    content transferred over.
                </p>
            </Typography>

            <Typography variant="h5"> What is Quizlet?</Typography>

            <Typography variant="body1" component={"span"}>
                <p>
                    <a href="quizlet.com">Quizlet</a> is a web-based flashcard service
                    that lets you create flashcard decks for pretty much anything.
                </p>
            </Typography>
            <Typography variant="h5"> What is Anki?</Typography>

            <Typography variant="body1">
                {" "}
                <a href="https://apps.ankiweb.net/">Anki</a> is also a flashcard
                service, but it beats Quizlet out in a number of ways. For starters, the
                Anki project is open source, and the Anki app is completely free. You
                get a lot of the features that you have to pay for in Quizlet for free,
                plus a load of other really great features that let you make Anki your
                own. Here are just some of them:
            </Typography>

            <Typography variant="subtitle2"> Anki features that are free: </Typography>
            <Typography variant="body1" component={"span"}>
                <ul>
                    <li>Offline studying</li>
                    <li>Custom image and audio support</li>
                    <li>No ads!</li>
                </ul>
            </Typography>

            <Typography variant="subtitle2">Additional features: </Typography>
            <Typography variant="body1" component={"span"}>
                <ul>
                    <li>Latex support (for flawless looking math)</li>
                    <li>Code syntax highlighting (for all you CS college students)</li>
                    <li>
                        Extensible (Anki is written in Python, and anyone can write an
                        Anki extension for everyone to use)
                    </li>
                    <li>Fully customizable card styles (via CSS)</li>
                </ul>
            </Typography>
        </Fragment>
    );
};

export default AboutSection;

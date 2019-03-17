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
                <p>Turn Quizlets into Anki decks.</p>
                <p>
                    Just type in a Quizlet's URL, click <code>Make a Deck!</code>, and
                    it'll download an Anki deck with all the text content transferred
                    over.
                </p>
            </Typography>

            <Typography variant="h5"> What is Quizlet?</Typography>

            <Typography variant="body1" component={"span"}>
                <p>
                    <a href="quizlet.com">Quizlet</a> is a popular web-based flashcard
                    service.
                </p>
            </Typography>
            <Typography variant="h5"> What is Anki?</Typography>

            <Typography variant="body1">
                {" "}
                <a href="https://apps.ankiweb.net/">Anki</a> is also a flashcard
                service, but it's open source and completely free (no ads either!). It's
                got cool features like:
            </Typography>

            <Typography variant="body1" component={"span"}>
                <ul>
                    <li>Offline studying</li>
                    <li>Custom image and audio support</li>
                    <li>Latex support (for flawless looking math)</li>
                    <li>Code syntax highlighting (for all you CS college students)</li>
                    <li>
                        Extensiblity (Anki is written in Python, and anyone can write
                        and publish Anki extension)
                    </li>
                    <li>Fully customizable card styles (via CSS)</li>
                    <li>Android and iOS apps</li>
                </ul>
            </Typography>
            <Typography>
                Hopefully Ankiport makes the transition from Quizlet to Anki a little
                easier!
            </Typography>
        </Fragment>
    );
};

export default AboutSection;

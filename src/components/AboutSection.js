import React, { Fragment } from "react";
import { Typography, Grid } from "@material-ui/core";

export const AboutSection = () => {


    return (
        <Fragment>
            <Typography variant="h3"><img src="../res/aplogo.png" alt="ankiport logo" width="100" />Ankiport</Typography>
            <Grid container direction="row">
                <Typography variant="subtitle2">Version 0.0.4</Typography>
                <Typography variant="subtitle2" style={{ paddingLeft: "15px" }}>Code hosted on <a href="https://github.com/jahzielv/ankiport-web" target="_blank">Github</a></Typography>
            </Grid>

            <Typography variant="body1">
                <p>An app that lets you convert from Quizlet to Anki.</p>
                <p>Just plug in a valid Quizlet URL, click <code>Make a Deck!</code>, and it'll download an Anki <code>.apkg</code> with all the text content transferred over.</p>
            </Typography>

            <Typography variant="h5"> What is Quizlet?</Typography>

            <Typography variant="body1">
                <p><a href="quizlet.com">Quizlet</a> is a web-based flashcard service that lets you create flashcard decks for pretty much anything.</p>
            </Typography>
            <Typography variant="h5"> What is Anki?</Typography>

            <Typography variant="body1"> <a href="https://apps.ankiweb.net/">Anki</a> is also a flashcard service, but it beats Quizlet out in a number of ways. For starters, the Anki project is open source, and the Anki app is completely free. You get a lot of the features that you have to pay for in Quizlet for free, plus a load of other really great features that let you make Anki your own. Here are just some of them:</Typography>

            <Typography variant="subtitle2"> Anki features that are free: </Typography>
            <Typography variant="body1">
                <ul>
                    <li>Offline studying</li>
                    <li>Custom image and audio support</li>
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
            </Typography>
            <Typography><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid autem habent admirationis, cum prope accesseris? At quanta conantur! Mundum hunc omnem oppidum esse nostrum! Incendi igitur eos, qui audiunt, vides. De quibus cupio scire quid sentias. Cur fortior sit, si illud, quod tute concedis, asperum et vix ferendum putabit? Duo Reges: constructio interrete. Ita fit cum gravior, tum etiam splendidior oratio. Quod cum ita sit, perspicuum est omnis rectas res atque laudabilis eo referri, ut cum voluptate vivatur. Ex quo intellegitur officium medium quiddam esse, quod neque in bonis ponatur neque in contrariis. Polemoni et iam ante Aristoteli ea prima visa sunt, quae paulo ante dixi. Octavium, Marci filium, familiarem meum, confici vidi, nec vero semel nec ad breve tempus, sed et saepe et plane diu. Est tamen ea secundum naturam multoque nos ad se expetendam magis hortatur quam superiora omnia. Quoniam, inquiunt, omne peccatum inbecillitatis et inconstantiae est, haec autem vitia in omnibus stultis aeque magna sunt, necesse est paria esse peccata. Concede nihil esse bonum, nisi quod bonestum sit: concedendum est in virtute esse positam beatam vitam vide rursus retro: dato hoc dandum erit illud. Non enim in ipsa sapientia positum est beatum esse, sed in iis rebus, quas sapientia comparat ad voluptatem. </p>

                <p>Atque adhuc ea dixi, causa cur Zenoni non fuisset, quam ob rem a superiorum auctoritate discederet. Quid, cum fictas fabulas, e quibus utilitas nulla elici potest, cum voluptate legimus? Atque his tribus generibus honestorum notatis quartum sequitur et in eadem pulchritudine et aptum ex illis tribus, in quo inest ordo et moderatio. Vides igitur te aut ea sumere, quae non concedantur, aut ea, quae etiam concessa te nihil iuvent. Quibus ego vehementer assentior. Tu enim ista lenius, hic Stoicorum more nos vexat. Curium putes loqui, interdum ita laudat, ut quid praeterea sit bonum neget se posse ne suspicari quidem. Potius inflammat, ut coercendi magis quam dedocendi esse videantur. </p>

                <p>Vives, inquit Aristo, magnifice atque praeclare, quod erit cumque visum ages, numquam angere, numquam cupies, numquam timebis. Sed haec ab Antiocho, familiari nostro, dicuntur multo melius et fortius, quam a Stasea dicebantur. Ista ipsa, quae tu breviter: regem, dictatorem, divitem solum esse sapientem, a te quidem apte ac rotunde; Is enim percontando atque interrogando elicere solebat eorum opiniones, quibuscum disserebat, ut ad ea, quae ii respondissent, si quid videretur, diceret. </p>

            </Typography>
        </Fragment >
    )
}


export default AboutSection;
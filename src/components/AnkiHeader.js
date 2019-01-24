import React from "react";
import { Grid, Typography } from "@material-ui/core";
import aplogo from "../assets/aplogo.webp";

class AnkiHeader extends React.Component {
    render() {
        return (
            <div>
                <Grid container direction="row" alignItems="baseline">
                    <img src={aplogo} alt="ankiport logo" width="100" height="100" />
                    <Typography variant="h1" align="left">
                        Ankiport
                    </Typography>
                </Grid>
            </div>
        );
    }
}

export default AnkiHeader;

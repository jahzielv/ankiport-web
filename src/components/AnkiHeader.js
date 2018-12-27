import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";

class AnkiHeader extends React.Component {
    render() {
        return (
            <div>
                <Grid container direction="row">
                    <Typography variant="h1" align="left">Ankiport</Typography>
                </Grid>
            </div>
        );
    }
}

export default AnkiHeader;
import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const AppHeader = () => (
    <AppBar position="static">
        <Toolbar>
            <Typography variant="title" color="inherit">
                Ankiport works
            </Typography>
        </Toolbar>
    </AppBar>
);

export default AppHeader;

import React, { Fragment } from "react";
import { CssBaseline, withStyles } from "@material-ui/core";

import Home from "./pages/Home";
import Footer from "./components/Footer";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import "typeface-roboto";

const styles = theme => ({
    main: {
        padding: 3 * theme.spacing.unit,
        [theme.breakpoints.down("xs")]: {
            padding: 2 * theme.spacing.unit
        }
    }
});

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
        fontFamily: ["Open Sans", "Arial", "sans-serif"].join(",")
    },
    palette: {
        primary: {
            light: "#69bbff",
            main: "#268bd2",
            dark: "#005ea0",
            contrastText: "#fff"
        },
        secondary: {
            light: "#2aa198",
            main: "#2aa198",
            dark: "#6c71c4",
            contrastText: "#000"
        }
    }
});

const App = ({ classes }) => (
    <MuiThemeProvider theme={theme}>
        <Fragment>
            <CssBaseline />
            <main className={classes.main}>
                <Home />
            </main>
            <Footer />
        </Fragment>
    </MuiThemeProvider>
);

export default withStyles(styles)(App);

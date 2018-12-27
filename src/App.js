import React, { Fragment } from 'react';
import {
    CssBaseline,
    withStyles,
} from '@material-ui/core';

import Home from './pages/Home';
import Footer from "./components/Footer";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const styles = theme => ({
    main: {
        padding: 3 * theme.spacing.unit,
        [theme.breakpoints.down('xs')]: {
            padding: 2 * theme.spacing.unit,
        },
    },
});

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
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

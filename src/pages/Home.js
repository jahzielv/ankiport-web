import React from 'react';
import {
    Typography,
    Button,
    Grid,
    TextField
} from '@material-ui/core';
import classNames from "classnames";
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Input from "../components/InputArea";
import Footer from "../components/Footer";


const styles = {
    root: {
        background: "light-grey",
        color: 'white',
        padding: "10px",
        justify: "center",
        // alignContent: "center",
        alignItems: "flex-start",
        direction: "column"
    },
};


function HomePage(props) {
    const { classes, children, className, ...other } = props;

    return (
        <Grid container className={classNames(classes.root)}>
            <Grid container className={classNames(classes.root)} direction="column" id="gridContent">
                <Typography variant="h1" align="center">Ankiport</Typography>
                <Input />
            </Grid>
        </Grid>
    );
}

HomePage.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
};

export default withStyles(styles)(HomePage);
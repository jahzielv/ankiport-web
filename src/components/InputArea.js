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



const styles = {
    root: {
        padding: "10px",
        border: "50px",
        // justify: "center",
        // alignContent: "center",
        // alignItems: "center",
        // direction: "column"
    },
    buttonStyle: {
        padding: "50px",
        border: "20px"
    }
};


function InputArea(props) {
    const { classes, children, className, ...other } = props;

    return (
        <Grid container className={classes.root} direction="column">
            <TextField
                id="outlined-with-placeholder"
                label="Quizlet Deck URL"
                placeholder=""
                className={classes.textField}
                margin="normal"
                variant="outlined"
            />
            <Button className={classes.buttonStyle} id="buttonPort" variant="extendedFab" color="primary" size="large">
                <Typography variant="h5">
                    Make a deck!
                </Typography>
            </Button>
        </Grid>
    );
}

InputArea.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
};

export default withStyles(styles)(InputArea);
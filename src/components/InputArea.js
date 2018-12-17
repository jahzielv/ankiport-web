import React from 'react';
import {
    Button,
    Grid,
    TextField
} from '@material-ui/core';
import classNames from "classnames";
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';



const styles = {
    root: {
        paddingTop: "40px",

    }
};


function InputArea(props) {
    const { classes, children, className, ...other } = props;

    return (
        <Grid container spacing={40} className={classes.root} direction="column">

            <Grid container item direction="row" justify="left" alignItems="center" spacing={40}>
                <TextField
                    id="outlined-with-placeholder"
                    label="Quizlet Deck URL"
                    placeholder=""
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    // fullWidth
                    style={{ width: "1000px" }}
                />
                <div style={{ paddingLeft: "30px" }}>
                    <Button id="buttonPort" variant="extendedFab" color="primary" size="large">
                        Make a deck!
                    </Button>
                </div>
            </Grid>
        </Grid>
    );
}

InputArea.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
};

export default withStyles(styles)(InputArea);
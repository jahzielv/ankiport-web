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
    border: "20px",
    // justify: "center",
    // alignContent: "center",
    // alignItems: "center",
    // direction: "column"
  },
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
        <Button id="buttonPort" variant="extendedFab" color="primary" size="large">
          Port to Anki
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
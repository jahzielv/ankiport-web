import React from 'react';
import {
  Typography,
  Button,
  Grid
} from '@material-ui/core';
import classNames from "classnames";
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = {
  root: {
    background: "light-grey",
    color: 'white',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    padding: "10px",
    justify: "center",
    alignContent: "center",
    alignItems: "center",
    direction: "column"
  },
};


function HomePage(props) {
  const { classes, children, className, ...other } = props;

  return (
    <Grid container className={classNames(classes.root)}>
      <Grid container className={classNames(classes.root)} direction="column" alignItems="center" id="gridContent">
        <Typography variant="display1" align="center">Welcome to Ankiport!</Typography>
        <Button id="buttonPort" variant="contained" color="primary">Port to Anki</Button>
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
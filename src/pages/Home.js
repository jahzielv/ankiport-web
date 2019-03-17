import React from "react";
import { Grid } from "@material-ui/core";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Input from "../components/InputArea";

const styles = {
    root: {
        background: "light-grey",
        color: "white",
        padding: "10px",
        justify: "center",
        alignItems: "flex-start",
        direction: "column"
    }
};

function HomePage(props) {
    const { classes } = props;

    return (
        <Grid container className={classNames(classes.root)}>
            <Input />
        </Grid>
    );
}

HomePage.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object.isRequired,
    className: PropTypes.string
};

export default withStyles(styles)(HomePage);

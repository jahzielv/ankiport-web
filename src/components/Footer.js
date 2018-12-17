import React from "react";
import { withStyles, Typography } from "@material-ui/core";

const styles = theme => (
    {
        footer: {
            position: "absolute",
            left: "0",
            bottom: "0",
            right: "0",
            height: "35px"
        },
        footerText: {
            paddingRight: "20px",
            // paddingBottom: "10px",
            color: "navy"
        }
    }
);



const Footer = ({ classes }) => {
    return (
        <div className={classes.footer}>
            <Typography className={classes.footerText} align="right">Made with &#10084; by <a href="https://jahz.co">JVE</a>.</Typography>
        </div>
    );
}

export default withStyles(styles)(Footer);
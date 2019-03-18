import React, { Fragment } from "react";
import { withStyles, Typography } from "@material-ui/core";

const styles = theme => ({
    footer: {
        // position: "absolute",
        left: "0",
        bottom: "0",
        right: "0",
        // width: "160px",
        position: "fixed",
        height: "35px"
        // background: "red"
    },
    footerText: {
        paddingLeft: "20px",
        paddingTop: "5px",
        color: "navy",
        align: "left"
    },
    phantom: {
        display: "block",
        padding: "20px",
        height: "60px",
        width: "100%"
    },
    footerLink: {
        color: "navy"
    }
});

const Footer = ({ classes }) => {
    return (
        <Fragment>
            <div className={classes.phantom} />
            <div className={classes.footer}>
                <div className={classes.footerText}>
                    <Typography>
                        Made with{" "}
                        <span role="img" aria-label="Bread Emoji">
                            🍞
                        </span>
                        by{" "}
                        <a
                            className={classes.footerLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://jahz.co"
                        >
                            JVE
                        </a>
                        .
                    </Typography>
                </div>
            </div>
        </Fragment>
    );
};

export default withStyles(styles)(Footer);

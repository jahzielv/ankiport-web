import React, { Fragment } from "react";
import { Fab, Grid, TextField, Snackbar, Button, Modal } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import fetch from "node-fetch";
import PropTypes from 'prop-types';
import AboutSection from "./AboutSection";

const saveAs = require("file-saver");

const styles = theme => ({
    paper: {
        position: 'relative',
        width: theme.spacing.unit * 130,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
    },
});


function getModalStyle() {

    return {
        top: "50%",
        left: "50%",
        transform: `translate(-50%, -50%)`,
        maxHeight: "100%",
        overflow: "scroll"
    };
}

function createBody(values) {
    let reqBody = [];
    for (let property in values) {
        let encodedKey = encodeURIComponent(property);
        let encodedValue = encodeURIComponent(values[property]);
        reqBody.push(encodedKey + "=" + encodedValue);
    }
    reqBody = reqBody.join("&");
    return reqBody;
}

export class InputArea extends React.Component {
    state = {
        id: "",
        portErr: false,
        badUrl: false,
        modalOpen: false
    };

    deckButtonClick = () => {
        let qUrl = null;
        try {
            qUrl = new URL(this.state.id);
            if (qUrl.hostname !== "quizlet.com") {
                throw TypeError;
            }
            let qId = qUrl.pathname.split("/")[1];
            let filename;
            var css = {
                // "font-family": "times",
                // "font-size": "40px",
                // "text-align": "center",
                // "color": "blue",
                // "background-color": "white"
                "font-family": "arial",
                "color": "green"
            }
            var config = {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
                    "Access-Control-Allow-Headers": "Origin, X-Requested-With, contentType, Content-Type, Accept, Authorization"
                },
                body: createBody(css)
            }
            fetch(`https://861d16bb.ngrok.io/port?setID=${qId}`, config)
                .then(response => {
                    filename = response.headers.get("x-filename");
                    if (filename === null) {
                        return Promise.reject(
                            "404 error - invalid set ID number"
                        );
                    } else {
                        return response.blob();
                    }
                })
                .then(blob => saveAs(blob, filename))
                .catch(err => {
                    console.log(err);
                    this.setState({ portErr: true });
                });
        } catch (TypeError) {
            this.setState({ badUrl: true });
        }
    };

    handleClose = () => {
        this.setState({ portErr: false });
    };

    handleCloseUrl = () => {
        this.setState({ badUrl: false });
    };

    handleModalOpen = () => {
        this.setState({ modalOpen: true });
    };

    handleModalClose = () => {
        this.setState({ modalOpen: false });
    };



    render() {
        const { portErr, badUrl } = this.state;
        const { classes } = this.props;
        return (
            <Fragment>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.modalOpen}
                    onClose={this.handleModalClose}
                    style={{
                        overflow: "scroll"
                    }}

                >
                    <div style={getModalStyle()} className={classes.paper}>
                        <AboutSection />
                    </div>
                </Modal>
                <Grid
                    container
                    spacing={40}
                    style={{ paddingTop: "40px" }}
                    direction="column"
                >
                    <Grid
                        container
                        item
                        direction="row"
                        justify="flex-start"
                        alignItems="center"
                        spacing={40}
                    >
                        <TextField
                            id="url-field"
                            label="Quizlet Deck URL"
                            placeholder=""
                            margin="normal"
                            type="url"
                            variant="outlined"
                            style={{ width: "1000px" }}
                            onChange={e => {
                                this.setState({ id: e.target.value });
                            }}
                        />
                        <div style={{ paddingLeft: "30px" }}>
                            <Fab
                                id="buttonPort"
                                variant="extended"
                                color="primary"
                                size="large"
                                onClick={this.deckButtonClick}
                            >
                                Make a deck!
                        </Fab>
                        </div>

                        <div style={{ paddingLeft: "30px" }}><Button variant="text" onClick={this.handleModalOpen}>About</Button></div>
                    </Grid>
                    <Snackbar
                        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                        open={portErr}
                        autoHideDuration={6000}
                        onClose={this.handleClose}
                        ContentProps={{
                            "aria-describedby": "porterr-msg",
                        }}
                        message={
                            <span id="porterr-msg">
                                We couldn't find that Quizlet{" "}
                                <span role="img" aria-label="disappointed-face">
                                    😔
                            </span>
                                Please try again!
                        </span>
                        }
                    />
                    <Snackbar
                        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                        open={badUrl}
                        autoHideDuration={6000}
                        onClose={this.handleCloseUrl}
                        ContentProps={{
                            "aria-describedby": "message-id",
                        }}
                        message={
                            <span id="message-id">
                                Make sure your URL is correct{" "}
                                <span role="img" aria-label="eyes">
                                    👀
                            </span>
                            </span>
                        }
                    />
                </Grid>
            </Fragment >
        );
    }
}

InputArea.propTypes = {
    classes: PropTypes.object.isRequired,
};
const InputAreaE = withStyles(styles)(InputArea);
export default InputAreaE;

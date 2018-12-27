import React from "react";
import { Fab, Grid, TextField, Snackbar, Button } from "@material-ui/core";
import fetch from "node-fetch";
const saveAs = require("file-saver");

export class InputArea extends React.Component {
    state = {
        id: "",
        portErr: false,
        badUrl: false,
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
            fetch(`https://ankiport-api.appspot.com/port?setID=${qId}`)
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

    render() {
        const { portErr, badUrl } = this.state;
        return (
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

                    <div style={{ paddingRight: "600px" }}><Button variant="text">About</Button></div>
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
        );
    }
}

export default InputArea;

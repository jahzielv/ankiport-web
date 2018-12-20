import React from 'react';
import {
    Button,
    Grid,
    TextField,
    Snackbar
} from '@material-ui/core';
import fetch from "node-fetch";
const saveAs = require("file-saver");

export class InputArea extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        id: "",
        portErr: false
    }

    deckButtonClick = () => {
        let filename;
        fetch(`https://ankiport-api.appspot.com/port?setID=${this.state.id}`)

            .then((response) => {
                filename = response.headers.get("x-filename");
                if (filename === null) {
                    return Promise.reject("404 error - invalid set ID number");
                } else {
                    return response.blob();
                }
            })
            .then((blob) => saveAs(blob, filename))
            .catch((err) => {
                console.log(err);
                this.setState({ portErr: true });
            });
    }

    handleClose = () => {
        this.setState({ portErr: false });
    }


    render() {
        const { portErr } = this.state;
        return (
            <Grid container spacing={40} style={{ paddingTop: "40px" }} direction="column" >

                <Grid container item direction="row" justify='flex-start' alignItems="center" spacing={40}>
                    <TextField
                        id="outlined-with-placeholder"
                        label="Quizlet Deck URL"
                        placeholder=""
                        margin="normal"
                        variant="outlined"
                        style={{ width: "1000px" }}
                        onChange={e => { this.setState({ id: e.target.value }) }}
                    />
                    <div style={{ paddingLeft: "30px" }}>
                        <Button id="buttonPort" variant="extendedFab" color="primary" size="large" onClick={this.deckButtonClick}>
                            Make a deck!
                    </Button>
                    </div>
                </Grid>
                <Snackbar
                    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                    open={portErr}
                    autoHideDuration={4000}
                    onClose={this.handleClose}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">We couldn't find that Quizlet 😔 Please try again!</span>}
                />
            </Grid >
        );
    }
}


export default InputArea;
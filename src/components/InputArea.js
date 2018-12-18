import React from 'react';
import {
    Button,
    Grid,
    TextField
} from '@material-ui/core';
import fetch from "node-fetch";
const saveAs = require("file-saver");

export class InputArea extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        id: ""
    }

    deckButtonClick = () => {
        fetch(`http://665b146b.ngrok.io/port?setID=${this.state.id}`)
            .then(response => response.blob())
            .then(blob => saveAs(blob, 'test.apkg'));
    }


    render() {

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
            </Grid >
        );
    }
}


export default InputArea;
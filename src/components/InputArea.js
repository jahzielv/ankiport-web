import React, { Fragment } from "react";
import {
    Fab,
    Grid,
    TextField,
    Snackbar,
    Button,
    ExpansionPanel,
    ExpansionPanelDetails,
    ExpansionPanelSummary,
    Typography,
    Select,
    MenuItem,
    FormControl,
    InputLabel
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import fetch from "node-fetch";
import PropTypes from "prop-types";
import AboutSection from "./AboutSection";
import ChromePicker from "react-color";

const saveAs = require("file-saver");

const styles = theme => ({
    heading: {
        color: theme.palette.primary.dark
    },
    formControl: {
        minWidth: "200px"
    },
    hexText: {
        minWidth: "100px"
    },
    labelText: {
        color: theme.palette.primary.dark
    },
    gridStyle: {
        // minWidth: "1000px",
        paddingTop: "40px",
        paddingLeft: "25%",
        paddingRight: "25%"
    },
    gridItem: {
        margin: "10px",
        width: "inherit"
        // minWidth: "800px"
    },
    gridButton: {
        margin: "10px"
    }
});

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
        modalOpen: false,
        color: "#5FA9EC",
        font: "roboto",
        fontSize: "20"
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
                "font-family": this.state.font,
                "font-size": this.state.fontSize + "px",
                color: this.state.color
            };
            var config = {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
                    "Access-Control-Allow-Headers":
                        "Origin, X-Requested-With, contentType, Content-Type, Accept, Authorization"
                },
                body: createBody(css)
            };
            fetch(`https://ankiport-api.appspot.com/port?setID=${qId}`, config)
                .then(response => {
                    filename = response.headers.get("x-filename");
                    if (filename === null) {
                        return Promise.reject("404 error - invalid set ID number");
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

    handleChangeSelect = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleColorChange = color => {
        this.setState({ color: color.hex });
    };

    render() {
        const { portErr, badUrl } = this.state;
        const { classes } = this.props;
        return (
            <Fragment>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    // alignContent="center"
                    className={classes.gridStyle}
                >
                    {/* <Grid item> */}
                    <TextField
                        id="url-field"
                        label="Quizlet Deck URL"
                        placeholder=""
                        margin="normal"
                        type="url"
                        variant="outlined"
                        onChange={e => {
                            this.setState({ id: e.target.value });
                        }}
                        className={classes.gridItem}
                    />
                    <ExpansionPanel className={classes.gridItem}>
                        <ExpansionPanelSummary>
                            <Typography variant="body1" className={classes.heading}>
                                Customize your cards!
                            </Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Grid
                                container
                                direction="row"
                                justify="space-between"
                                spacing={8}
                            >
                                <FormControl className={classes.formControl}>
                                    <InputLabel
                                        htmlFor="usr-font"
                                        className={classes.labelText}
                                    >
                                        Font
                                    </InputLabel>
                                    <Select
                                        value={this.state.font}
                                        onChange={this.handleChangeSelect}
                                        inputProps={{
                                            name: "font",
                                            id: "usr-font"
                                        }}
                                        style={{ fontFamily: this.state.font }}
                                    >
                                        <MenuItem value="sans-serif">
                                            <em>Default</em>
                                        </MenuItem>
                                        <MenuItem
                                            value={"times"}
                                            style={{ fontFamily: "times" }}
                                        >
                                            Times New Roman
                                        </MenuItem>
                                        <MenuItem
                                            value={"arial"}
                                            style={{ fontFamily: "Arial" }}
                                        >
                                            Arial
                                        </MenuItem>
                                        <MenuItem
                                            value={"courier"}
                                            style={{ fontFamily: "Courier" }}
                                        >
                                            Courier
                                        </MenuItem>
                                    </Select>
                                </FormControl>

                                <FormControl className={classes.formControl}>
                                    <Typography
                                        variant="body1"
                                        className={classes.labelText}
                                    >
                                        Font Color
                                    </Typography>

                                    <ChromePicker
                                        color={this.state.color}
                                        onChangeComplete={this.handleColorChange}
                                    />
                                </FormControl>

                                <FormControl className={classes.formControl}>
                                    {/* TODO: find a way to style these arrows! */}
                                    <div style={{ paddingTop: "7px" }}>
                                        <TextField
                                            id="font-size"
                                            variant="outlined"
                                            type="number" // number
                                            label="Font Size"
                                            value={this.state.fontSize}
                                            onChange={e => {
                                                this.setState({
                                                    fontSize: e.target.value
                                                });
                                            }}
                                            className={classes.labelText}
                                        />
                                    </div>
                                </FormControl>
                            </Grid>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>

                    <div className={classes.gridButton}>
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
                </Grid>
                <Snackbar
                    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                    open={portErr}
                    autoHideDuration={6000}
                    onClose={this.handleClose}
                    ContentProps={{ "aria-describedby": "porterr-msg" }}
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
                    ContentProps={{ "aria-describedby": "message-id" }}
                    message={
                        <span id="message-id">
                            Make sure your URL is correct{" "}
                            <span role="img" aria-label="eyes">
                                👀
                            </span>
                        </span>
                    }
                />
            </Fragment>
        );
    }
}

InputArea.propTypes = {
    classes: PropTypes.object.isRequired
};
const InputAreaE = withStyles(styles)(InputArea);
export default InputAreaE;

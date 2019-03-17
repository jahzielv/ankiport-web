import React from "react";
import { withStyles, Modal, Button } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import PropTypes from "prop-types";
import AboutSection from "./AboutSection";
import ToolBar from "@material-ui/core/Toolbar";

const styles = theme => ({
    paper: {
        position: "relative",
        width: theme.spacing.unit * 130,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4
    },

    root: {
        flexGrow: 1
    },
    grow: {
        flexGrow: 1
    }
});

function getModalStyle() {
    return {
        top: "50%",
        left: "50%",
        transform: `translate(-50%, -50%)`,
        maxHeight: "100%",
        overflow: "scroll",
        width: "inherit"
    };
}

class AnkiHeader extends React.Component {
    state = { modalOpen: false };

    handleModalOpen = () => {
        this.setState({ modalOpen: true });
    };

    handleModalClose = () => {
        this.setState({ modalOpen: false });
    };

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <ToolBar>
                        {/* <Grid
                            container
                            direction="row"
                            // alignContent=""
                            alignItems="center"
                        > */}
                        <div className={classes.grow}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                version="1.0"
                                width="275"
                                height="100"
                                viewBox="0 0 700.000000 196.000000"
                                preserveAspectRatio="xMidYMid meet"
                            >
                                <metadata>
                                    Created by potrace 1.12, written by Peter Selinger
                                    2001-2015
                                </metadata>
                                <g
                                    transform="translate(0.000000,196.000000) scale(0.100000,-0.100000)"
                                    fill="#000000"
                                    stroke="none"
                                >
                                    <path d="M370 1742 c-44 -21 -74 -79 -65 -122 9 -42 50 -87 85 -95 16 -4 32 -10 35 -15 3 -5 -15 -55 -40 -112 -25 -56 -45 -107 -45 -112 0 -6 12 -23 27 -38 l27 -28 74 72 74 73 283 -290 c156 -159 281 -293 279 -297 -2 -4 -30 -17 -62 -29 -43 -16 -80 -22 -152 -23 l-95 -1 -5 43 -5 43 -100 -71 c-55 -39 -100 -75 -100 -79 0 -10 186 -171 198 -171 4 0 7 15 7 34 0 38 12 46 68 46 46 0 182 24 244 43 26 8 68 27 94 41 38 21 59 26 120 26 l74 0 0 74 c0 61 5 85 30 138 39 83 60 182 60 286 l0 82 46 0 c25 0 44 4 42 9 -7 21 -161 202 -168 199 -12 -4 -150 -189 -150 -200 0 -4 21 -8 46 -8 l46 0 -4 -87 c-5 -81 -28 -166 -57 -213 -11 -16 -5 -22 -371 332 l-225 218 73 73 c39 40 72 77 72 83 0 6 -13 23 -29 38 l-29 27 -111 -56 c-62 -30 -116 -53 -121 -50 -6 4 -10 15 -10 26 0 36 -31 80 -65 95 -44 18 -53 18 -95 -4z m78 -48 c33 -23 27 -83 -9 -103 -24 -13 -29 -13 -53 2 -34 23 -37 78 -4 101 28 20 38 20 66 0z" />
                                    <path d="M3199 965 c-1 -250 -2 -461 -3 -467 -1 -9 17 -14 52 -16 l52 -3 0 125 0 124 31 26 c17 14 34 26 39 26 4 0 58 -68 120 -150 l112 -150 59 0 c32 0 59 4 59 9 0 5 -61 89 -135 187 -74 97 -135 180 -135 183 0 4 56 66 125 138 69 72 125 135 125 140 0 6 -26 8 -57 5 -57 -4 -59 -5 -133 -80 -42 -43 -106 -111 -143 -152 l-67 -74 0 292 0 292 -50 0 -50 0 -1 -455z" />
                                    <path d="M3870 1383 c-41 -14 -55 -87 -22 -116 42 -38 102 -8 102 49 0 48 -39 81 -80 67z" />
                                    <path d="M1910 1348 c-24 -57 -332 -844 -333 -853 -1 -6 21 -10 51 -10 l53 0 52 135 52 135 174 0 174 0 53 -135 53 -135 57 -3 c51 -3 56 -1 50 15 -59 158 -332 851 -339 861 -5 6 -27 12 -48 12 -31 0 -41 -5 -49 -22z m99 -250 c24 -68 52 -145 62 -173 10 -27 19 -53 19 -57 0 -5 -56 -8 -124 -8 -69 0 -127 3 -129 8 -3 4 21 77 54 162 32 85 58 163 58 173 2 40 19 10 60 -105z" />
                                    <path d="M6177 1293 c-3 -4 -13 -36 -22 -71 -17 -60 -21 -65 -66 -88 -39 -19 -49 -30 -49 -49 0 -23 4 -25 44 -25 l44 0 4 -227 c3 -203 6 -232 23 -268 36 -73 122 -107 222 -89 48 9 48 9 51 52 l3 42 -53 -6 c-66 -7 -102 6 -123 45 -13 26 -15 66 -13 238 l3 208 93 3 92 3 0 39 0 39 -92 3 -93 3 -5 75 c-5 72 -6 75 -32 78 -14 2 -28 0 -31 -5z" />
                                    <path d="M2650 1134 c-19 -8 -48 -27 -63 -42 -23 -22 -29 -24 -37 -12 -5 8 -10 25 -10 38 0 19 -5 22 -45 22 l-45 0 0 -331 0 -330 53 3 52 3 5 230 c5 252 10 272 73 319 38 28 151 35 195 12 62 -32 67 -54 70 -323 l4 -243 49 0 49 0 0 243 c0 269 -8 322 -57 369 -16 15 -45 34 -65 42 -49 21 -181 21 -228 0z" />
                                    <path d="M4146 1139 c-3 -8 -4 -223 -3 -479 l2 -465 53 -3 52 -3 0 180 0 181 43 -30 c79 -56 211 -62 295 -13 87 50 134 154 135 298 2 224 -91 345 -263 345 -80 0 -122 -13 -172 -51 -20 -16 -39 -29 -42 -29 -3 0 -6 16 -6 35 0 32 -2 35 -29 35 -16 0 -36 3 -45 6 -9 3 -18 0 -20 -7z m374 -97 c107 -55 131 -310 41 -422 -75 -93 -234 -72 -284 38 -18 39 -22 66 -22 157 0 98 3 116 25 160 17 34 36 55 60 67 46 24 135 23 180 0z" />
                                    <path d="M5060 1141 c-78 -25 -136 -78 -172 -156 -20 -43 -23 -66 -23 -170 0 -104 3 -127 24 -172 26 -59 93 -126 149 -151 25 -11 65 -16 122 -16 132 0 209 45 267 155 26 51 28 61 28 179 -1 140 -14 184 -76 254 -52 60 -100 79 -204 83 -49 1 -101 -1 -115 -6z m184 -95 c43 -18 81 -69 97 -129 15 -62 7 -212 -14 -253 -39 -76 -125 -116 -213 -100 -49 10 -109 67 -128 123 -19 55 -21 194 -5 244 17 49 57 99 93 115 41 17 128 18 170 0z" />
                                    <path d="M5845 1136 c-16 -8 -48 -32 -69 -54 -22 -23 -43 -39 -48 -36 -4 3 -8 25 -8 50 l0 44 -45 0 -45 0 0 -331 0 -330 53 3 52 3 5 222 5 221 30 44 c42 60 104 91 171 85 l52 -5 6 36 c3 21 6 43 6 50 0 17 -126 15 -165 -2z" />
                                    <path d="M3834 1124 c3 -9 6 -157 6 -330 l0 -314 50 0 50 0 0 314 c0 173 3 321 6 330 5 14 -3 16 -56 16 -53 0 -61 -2 -56 -16z" />
                                </g>
                            </svg>
                        </div>

                        <Modal
                            aria-labelledby="simple-modal-title"
                            aria-describedby="simple-modal-description"
                            open={this.state.modalOpen}
                            onClose={this.handleModalClose}
                            style={{ overflow: "scroll" }}
                        >
                            <div style={getModalStyle()} className={classes.paper}>
                                <Button
                                    style={{
                                        position: "absolute",
                                        top: "20px",
                                        right: "20px"
                                    }}
                                    onClick={this.handleModalClose}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                                        <path d="M0 0h24v24H0z" fill="none" />
                                    </svg>
                                </Button>
                                <AboutSection />
                            </div>
                        </Modal>

                        <div className={classes.gridButton}>
                            <Button variant="text" onClick={this.handleModalOpen}>
                                About
                            </Button>
                        </div>
                        {/* </Grid> */}
                    </ToolBar>
                </AppBar>
            </div>
        );
    }
}

AnkiHeader.propTypes = {
    classes: PropTypes.object.isRequired
};

const AnkiHeaderE = withStyles(styles)(AnkiHeader);

export default AnkiHeaderE;

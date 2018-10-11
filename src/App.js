// import React, { Component } from 'react';
// import logo from './logo.svg';
// import Button from "@material-ui/core/Button"
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           Hello Jahziel!
//         </p>
//         <Button variant="contained" color="primary">Yeet</Button>
//       </div>
//     );
//   }
// }

// export default App;

import React, { Fragment } from 'react';
import {
  CssBaseline,
  withStyles,
} from '@material-ui/core';

import AppHeader from './components/AppHeader';
import Home from './pages/Home';

const styles = theme => ({
  main: {
    padding: 3 * theme.spacing.unit,
    [theme.breakpoints.down('xs')]: {
      padding: 2 * theme.spacing.unit,
    },
  },
});

const App = ({ classes }) => (
  <Fragment>
    <CssBaseline />
    <AppHeader />
    <main className={classes.main}>
      <Home />
    </main>
  </Fragment>
);

export default withStyles(styles)(App);

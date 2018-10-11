import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Menu,
  Drawer,
  MenuItem,
} from '@material-ui/core';

const AppHeader = () => (
  <AppBar position="static">
    <Toolbar>
        <Drawer variant="persistent">
            <MenuItem>Yeet</MenuItem>
        </Drawer>
      <Typography variant="title" color="inherit">
        Ankiport works
      </Typography>
    </Toolbar>
  </AppBar>
);

export default AppHeader;
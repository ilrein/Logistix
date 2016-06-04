import React from 'react';
import AppBar from 'material-ui/AppBar/AppBar';

const NavBar = () => (
  <AppBar
    showMenuIconButton={ false }
    title="Logistix"
    titleStyle={{ textAlign: 'center' }}
  />
);

export default NavBar;

import React from 'react';
import AppBar from 'material-ui/lib/app-bar';

const NavBar = () => (
  <AppBar
    showMenuIconButton={ false }
    title="Logistix"
    titleStyle={{ textAlign: 'center' }}
  />
);

export default NavBar;

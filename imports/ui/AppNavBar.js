import { Meteor } from 'meteor/meteor';
import React from 'react';
import AppBar from 'material-ui/AppBar/AppBar';
import Drawer from 'material-ui/Drawer/Drawer';
import MenuItem from 'material-ui/MenuItem/MenuItem';

import UserNameContainer from '../containers/UserNameContainer';

const style = {
  menuItem: {
    // color: 'blue',
  },
};

class AppNavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { open: false };

    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.goToDashboard = this.goToDashboard.bind(this);
    this.goToTest = this.goToTest.bind(this);
  }

  handleToggle() {
    this.setState({ open: !this.state.open });
  }

  handleClose() {
    this.setState({ open: false });
  }

  handleLogout() {
    this.handleClose();
    Meteor.logout();
  }

  goToDashboard() {
    FlowRouter.go('/dashboard');
    this.handleClose();
  }

  goToTest() {
    FlowRouter.go('/test');
    this.handleClose();
  }

  render() {
    return (
      <div className="AppBar__wrapper">
        <AppBar
          title="Logistix"
          onLeftIconButtonTouchTap={this.handleToggle}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={open => this.setState({ open })}
        >
          <MenuItem
            onTouchTap={this.goToDashboard}
            style={style.menuItem}
            disabled={false}
          >
            Dashboard
          </MenuItem>
          <MenuItem
            onTouchTap={this.goToTest}
            style={style.menuItem}
            disabled={false}
          >
            Test Page
          </MenuItem>
          <MenuItem
            onTouchTap={this.handleClose}
            style={style.menuItem}
            disabled
          >
            <UserNameContainer />
          </MenuItem>
          <MenuItem
            onTouchTap={this.handleLogout}
            style={style.menuItem}
          >
            Logout
          </MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default AppNavBar;

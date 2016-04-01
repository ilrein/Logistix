import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

import NavBar from './NavBar';

export default class Root extends React.Component {
  render() {
    return (
      <NavBar />
    );
  }
}

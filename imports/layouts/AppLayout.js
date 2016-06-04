import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppNavBar from '../ui/AppNavBar';

const AppLayout = ({ content }) => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <div>
      <AppNavBar />
      <main>
        {content}
      </main>
    </div>
  </MuiThemeProvider>
);

AppLayout.propTypes = {
  content: React.PropTypes.node.isRequired,
};

export default AppLayout;

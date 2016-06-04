import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import NavBar from '../ui/NavBar';

const MainLayout = ({ content }) => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <div>
      <NavBar />
      <main>
        {content}
      </main>
    </div>
  </MuiThemeProvider>
);

MainLayout.propTypes = {
  content: React.PropTypes.node.isRequired,
};

export default MainLayout;

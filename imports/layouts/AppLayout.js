import React from 'react';

import AppNavBar from '../ui/AppNavBar';

const AppLayout = ({ content }) => (
  <div>
    <AppNavBar />
    <main>
      {content}
    </main>
  </div>
);

AppLayout.propTypes = {
  content: React.PropTypes.node.isRequired,
};

export default AppLayout;

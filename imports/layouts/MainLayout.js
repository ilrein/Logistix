import React from 'react';

import NavBar from '../ui/NavBar';

const MainLayout = ({ content }) => (
  <div>
    <NavBar />
    <main>
      {content}
    </main>
  </div>
);

MainLayout.propTypes = {
  content: React.PropTypes.node.isRequired,
};

export default MainLayout;

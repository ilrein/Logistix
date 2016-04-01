import React from 'react';

import NavBar from '../ui/NavBar';

const MainLayout = ({content}) => (
  <div>
    <NavBar />
    <main>
      {content}
    </main>
  </div>
)

export default MainLayout;

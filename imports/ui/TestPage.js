import React from 'react';

import LoadingSpinner from './LoadingSpinner';

const TestPage = () => (
  <div className="TestPage">
    <LoadingSpinner />
  </div>
);

TestPage.propTypes = {
  // children: React.PropTyes.node,
};

export default TestPage;

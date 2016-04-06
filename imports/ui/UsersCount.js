import React from 'react';

const UsersCount = ({ totalUsers }) => { // eslint-disable-line
  console.log({ totalUsers });
  return <div>{totalUsers}</div>;
};

// UsersCount.propTypes = {
//   userCount: React.PropTypes.number.isRequired,
// };

export default UsersCount;

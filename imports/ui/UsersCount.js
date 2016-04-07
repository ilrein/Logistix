import React from 'react';

const UsersCount = ({ totalUsers }) => <div>{totalUsers}</div>;

UsersCount.propTypes = {
  totalUsers: React.PropTypes.number.isRequired,
};

export default UsersCount;

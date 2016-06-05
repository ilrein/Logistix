import React from 'react';

const UsersCount = ({ totalUsers }) => { // eslint-disable-line
  return (
    <div>
      <h6>Total Users Connected</h6>
      {totalUsers}
    </div>
  );
};

UsersCount.propTypes = {
  totalUsers: React.PropTypes.number.isRequired,
};

export default UsersCount;

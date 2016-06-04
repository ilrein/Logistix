import React from 'react';

const UserName = ({ userName }) => <div>{userName}</div>;

UserName.propTypes = {
  userName: React.PropTypes.string.isRequired,
};

export default UserName;

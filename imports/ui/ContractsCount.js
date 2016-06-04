import React from 'react';

const ContractsCount = ({ totalContracts }) => <div>{totalContracts}</div>;

ContractsCount.propTypes = {
  totalContracts: React.PropTypes.number.isRequired,
};

export default ContractsCount;

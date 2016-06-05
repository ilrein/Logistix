import React from 'react';

const ContractsCount = ({ totalContracts }) => { // eslint-disable-line
  return (
    <div>
      <h6>Total Contracts</h6>
      {totalContracts}
    </div>
  );
};

ContractsCount.propTypes = {
  totalContracts: React.PropTypes.number.isRequired,
};

export default ContractsCount;

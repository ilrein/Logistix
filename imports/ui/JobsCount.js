import React from 'react';

const JobsCount = ({ totalJobs }) => <div>{totalJobs}</div>;

JobsCount.propTypes = {
  totalJobs: React.PropTypes.number.isRequired,
};

export default JobsCount;

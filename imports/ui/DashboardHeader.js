import React, { Component, PropTypes } from 'react';

import UsersCountContainer from '../containers/UsersCountContainer';
import ContractsCountContainer from '../containers/ContractsCountContainer';

// import IssueContract from './IssueContract';
import Modal from './Modal';

export default class DashboardHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="dashboard-header">
        <UsersCountContainer />
        <ContractsCountContainer />
        <div>
          <h6>Actions</h6>
          <Modal issueContract={this.props.issueContract} />
        </div>
      </div>
    );
  }
}

DashboardHeader.propTypes = {
  issueContract: PropTypes.func,
};

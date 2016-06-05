import React, { Component } from 'react';

import UsersCountContainer from '../containers/UsersCountContainer';
import ContractsCountContainer from '../containers/ContractsCountContainer';
import IssueContract from './IssueContract';

export default class DashboardHeader extends Component {
  constructor(props) {
    super(props);

    this.issueContract = this.issueContract.bind(this);
  }

  issueContract() {
    console.log('clicked issue contract');
  }

  render() {
    return (
      <div className="dashboard-header">
        <UsersCountContainer />
        <ContractsCountContainer />
        <IssueContract
          callback={this.issueContract}
        />
      </div>
    );
  }
}

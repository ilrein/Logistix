import React from 'react';
import Card from 'material-ui/Card/Card';
import CardHeader from 'material-ui/Card/CardHeader';

import Map from './Map';
import UsersCountContainer from '../containers/UsersCountContainer';
import ContractsCountContainer from '../containers/ContractsCountContainer';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Card>
          <CardHeader
            title="Total Users Online"
            children={<UsersCountContainer />}
          />
          <CardHeader
            title="Total Jobs"
            children={<ContractsCountContainer />}
          />
          <Map />
        </Card>
      </div>
    );
  }
}

export default Dashboard;

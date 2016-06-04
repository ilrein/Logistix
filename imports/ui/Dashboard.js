import React from 'react';
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';

import Map from './Map';
import UsersCountContainer from '../containers/UsersCountContainer';
import JobsCountContainer from '../containers/JobsCountContainer';

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
            children={<JobsCountContainer />}
          />
          <Map />
        </Card>
      </div>
    );
  }
}

export default Dashboard;

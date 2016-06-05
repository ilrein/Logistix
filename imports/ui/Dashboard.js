import React from 'react';
import Card from 'material-ui/Card';
import CardHeader from 'material-ui/Card/CardHeader';

import Map from './Map';
import DashboardHeader from './DashboardHeader';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="card-wrapper">
        <Card className="card">
          <CardHeader
            className="card-header"
            children={<DashboardHeader />}
            title="Dashboard"
          />
          <Map />
        </Card>
      </div>
    );
  }
}

export default Dashboard;

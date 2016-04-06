import React from 'react';
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';

import Map from './Map';
import UsersCountContainer from '../containers/UsersCountContainer';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    console.log(UsersCountContainer);
  }

  render() {
    return (
      <Card>
        <CardHeader
          title="A Great Title"
          subtitle="A Better Subtitle"
        />
        <Map />
      </Card>
    );
  }
}

export default Dashboard;

import React from 'react';
import Card from 'material-ui/Card';
import CardHeader from 'material-ui/Card/CardHeader';
import { Marker } from 'react-gmaps';

import Map from './Map';
import DashboardHeader from './DashboardHeader';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { contract: null };
    this.getContracts = this.getContracts.bind(this);
    this.setContract = this.setContract.bind(this);
  }

  getContracts() {
    // forEach marker in marker collection, I should
    // return a marker with geocoded points
    // leave a hardcoded one for the next step

    return (
      <Marker
        lat={43.892}
        lng={-79.4691}
      />
    );
  }

  setContract(contract) {
    const directionRequest = {
      origin: contract.pickup,
      destination: contract.dropoff,
      travelMode: google.maps.TravelMode.DRIVING,
    };
    const directionsService = new google.maps.DirectionsService();

    directionsService.route(directionRequest, (result, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        this.setState({ contract: result });
      } else {
        console.log('failed', status);
      }
    });
  }

  render() {
    return (
      <div className="card-wrapper">
        <Card className="card">
          <CardHeader
            className="card-header"
            children={<DashboardHeader issueContract={this.setContract} />}
            title="Dashboard"
          />
          <Map
            contracts={this.getContracts}
          />
        </Card>
      </div>
    );
  }
}

export default Dashboard;

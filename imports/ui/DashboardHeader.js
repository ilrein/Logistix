import React, { Component } from 'react';

import UsersCountContainer from '../containers/UsersCountContainer';
import ContractsCountContainer from '../containers/ContractsCountContainer';

// import IssueContract from './IssueContract';
import Modal from './Modal';

export default class DashboardHeader extends Component {
  constructor(props) {
    super(props);

    this.issueContract = this.issueContract.bind(this);
  }

  issueContract(contract) {
    // DirectionsRequest Object
    // {
    //   origin: LatLng | String | google.maps.Place, REQUIRED
    //   destination: LatLng | String | google.maps.Place, REQUIRED
    //   travelMode: TravelMode, REQUIRED
    //   transitOptions: TransitOptions,
    //   drivingOptions: DrivingOptions,
    //   unitSystem: UnitSystem,
    //   waypoints[]: DirectionsWaypoint,
    //   optimizeWaypoints: Boolean,
    //   provideRouteAlternatives: Boolean,
    //   avoidHighways: Boolean,
    //   avoidTolls: Boolean,
    //   region: String
    // }
    //
    // currently have global access to google.maps
    // let's open a modal with inputs for the above
    const directionRequest = {
      origin: contract.pickup,
      destination: contract.dropoff,
      travelMode: google.maps.TravelMode.DRIVING,
    };

    const directionsService = new google.maps.DirectionsService();
    // const directionsDisplay = new google.maps.DirectionsRenderer();

    directionsService.route(directionRequest, (result, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        console.log('status ok', result);
        // directionsDisplay.setDirections(result);
      }
    });
  }

  render() {
    return (
      <div className="dashboard-header">
        <UsersCountContainer />
        <ContractsCountContainer />
        <div>
          <h6>Actions</h6>
          <Modal
            issueContract={this.issueContract}
          />
        </div>
      </div>
    );
  }
}

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

  issueContract() {
    // DirectionsRequest Object
    // {
    //   origin: LatLng | String | google.maps.Place,
    //   destination: LatLng | String | google.maps.Place,
    //   travelMode: TravelMode,
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

    console.log(google.maps);
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

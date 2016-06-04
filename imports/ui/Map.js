import React from 'react';
import { Gmaps, Marker } from 'react-gmaps';

import LoadingSpinner from './LoadingSpinner';

// Goals for this:
// - get the location of the user dynamically
// - see other users as markers

export default class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      credentials: {
        v: '3.exp',
        key: null,
      },
      coordinates: {
        lat: null,
        lng: null,
      },
    };

    Meteor.call('googleMapsApiKey', (err, res) => {
      if (!err) {
        // grab the API key
        this.setState({ credentials: { key: res } });

        // grab the user's GPS coordinates
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            this.setState({
              coordinates: {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              },
            });
          });
        } else {
          console.log('geolocation not supported');
        }
      }
    });
  }

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true,
    });
  }

  // The docs are bad, here are all the events:
  // ------------------------------------------
  // bounds_changed
  // center_changed
  // click
  // dblclick
  // drag
  // dragend
  // dragstart
  // heading_changed
  // idle
  // maptypeid_changed
  // mousemove
  // mouseout
  // mouseover
  // projection_changed
  // resize
  // rightclick
  // tilesloaded
  // tilt_changed
  // zoom_changed

  onDragEnd(e) {
    console.log('onDragEnd', e);
  }

  onCloseClick() {
    console.log('onCloseClick');
  }

  onClick(e) {
    console.log('onClick', e);
  }

  onDragStart(e) {
    console.log('onDragStart', e);
  }

  render() { // eslint-disable-line
    if (this.state.credentials.key && this.state.coordinates.lat) {
      return (
        <Gmaps
          width={'800px'}
          height={'600px'}
          lat={this.state.coordinates.lat}
          lng={this.state.coordinates.lng}
          zoom={12}
          loadingMessage={''}
          params={this.state.credentials}
          onMapCreated={this.onMapCreated}
          style={{ width: '100%' }}
        >
          <Marker
            lat={this.state.coordinates.lat}
            lng={this.state.coordinates.lng}
            draggable
            onDragStart={this.onDragStart}
          />
        </Gmaps>
      );
    } else { // eslint-disable-line
      return <div>loading</div>;
    }
  }
}

import React from 'react';
import { Gmaps, Marker, InfoWindow, Circle } from 'react-gmaps';

// Goals for this:
// - get the location of the user dynamically
// - see other users as markers

export default class Map extends React.Component {
  constructor(props) {
    super(props);

    this.onMapCreated = this.onMapCreated.bind(this);

    this.state = {
      credentials: {
        v: '3.exp',
        key: null,
      },
      coordinates: {
        lat: 51.5258541,
        lng: -0.08040660000006028,
      },
    };

    Meteor.call('googleMapsApiKey', (err, res) => {
      if (!err) {
        this.setState({ credentials: { key: res } });
      }
    });
  }

  onMapCreated(map) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
        this.setState({
          coordinates: {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          },
        });
        console.log(this.state);
      });
    } else {
      console.log('geolocation not supported');
    }

    map.setOptions({
      disableDefaultUI: true,
    });
  }

  // The docs are bad, here are all the events:
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
    if (this.state.credentials.key) {
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
          <InfoWindow
            lat={this.state.coordinates.lat}
            lng={this.state.coordinates.lng}
            content={'Hello, React :)'}
            onCloseClick={this.onCloseClick}
          />
          <Circle
            lat={this.state.coordinates.lat}
            lng={this.state.coordinates.lng}
            radius={500}
            onClick={this.onClick}
          />
        </Gmaps>
      );
    } else { // eslint-disable-line
      return <div>Loading</div>;
    }
  }
}

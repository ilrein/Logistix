// import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Gmaps, Marker, InfoWindow, Circle } from 'react-gmaps';

// Goals for this:
// - get the location of the user dynamically
// - see other users as markers

const coords = {
  lat: 51.5258541,
  lng: -0.08040660000006028,
};

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      v: '3.exp',
      key: null,
    };

    // Meteor.call('googleMapsApiKey', (err, res) => {
    //   if (!err) {
    //     this.setState({ key: res });
    //     console.log('we should have setstate by now', this.getState());
    //   }
    // });
  }

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true,
    });
  }

  // The docs are bad, here are all the options:
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

  render() {
    return (
      <Gmaps
        width={'800px'}
        height={'600px'}
        lat={coords.lat}
        lng={coords.lng}
        zoom={12}
        loadingMessage={'Be happy'}
        params={this.state}
        onMapCreated={this.onMapCreated}
        style={{ width: '100%' }}
      >
        <Marker
          lat={coords.lat}
          lng={coords.lng}
          draggable
          onDragStart={this.onDragStart}
        />
        <InfoWindow
          lat={coords.lat}
          lng={coords.lng}
          content={'Hello, React :)'}
          onCloseClick={this.onCloseClick}
        />
        <Circle
          lat={coords.lat}
          lng={coords.lng}
          radius={500}
          onClick={this.onClick}
        />
      </Gmaps>
    );
  }
}

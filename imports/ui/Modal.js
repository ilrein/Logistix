import React, { Component, PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import TextField from 'material-ui/TextField';

/**
 * Dialogs can be nested. This opens a Date Picker from within a Dialog.
 */

export default class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      pickup: null,
      dropoff: null,
    };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.selectStartDate = this.selectStartDate.bind(this);
    this.selectStartTime = this.selectStartTime.bind(this);
    this.setLocationDropoff = this.setLocationDropoff.bind(this);
    this.setLocationPickup = this.setLocationPickup.bind(this);
    this.handleAccept = this.handleAccept.bind(this);
    // this.props.issueContract();
  }

  setLocationDropoff(e) {
    // console.log('Location dropoff has been set');
    this.setState({
      dropoff: e.target.value,
    });
  }

  setLocationPickup(e) {
    // console.log('Location pickup has been set');
    this.setState({
      pickup: e.target.value,
    });
  }

  handleOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    console.log('closing the modal');
    this.setState({ open: false });
  }

  handleAccept() {
    const data = {
      date: this.refs.date.state.date,
      time: this.refs.time.state.time,
      pickup: this.state.pickup,
      dropoff: this.state.dropoff,
    };

    console.log('Accepted the modal', data);
    this.setState({ open: false });
  }

  selectStartDate() {
    console.log('start DATE has been selected');
  }

  selectStartTime() {
    console.log('start TIME has been selected');
  }

  render() {
    const actions = [
      <FlatButton
        label="Ok"
        primary
        keyboardFocused
        onTouchTap={this.handleAccept}
      />,
    ];

    return (
      <div>
        <RaisedButton label="Issue Contract" onTouchTap={this.handleOpen} />
        <Dialog
          title="Issue Contract"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <p className="modal-subtitle">
            Choose the start of the contract.
          </p>
          <DatePicker
            hintText="Select the date of the pickup"
            onChange={this.selectStartDate}
            ref="date"
          />
          <TimePicker
            hintText="Select the time of the pickup"
            onChange={this.selectStartTime}
            ref="time"
          />
          <TextField
            hintText="Pickup Address"
            onChange={this.setLocationPickup}
            ref="pickup"
          />
          <TextField
            hintText="Destination"
            onChange={this.setLocationDropoff}
            ref="dropoff"
          />
        </Dialog>
      </div>
    );
  }
}

Modal.propTypes = {
  issueContract: PropTypes.func,
};

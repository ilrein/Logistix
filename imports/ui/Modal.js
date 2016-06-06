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
  }

  setLocationDropoff(e) {
    this.setState({
      dropoff: e.target.value,
    });
  }

  setLocationPickup(e) {
    this.setState({
      pickup: e.target.value,
    });
  }

  handleOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }

  handleAccept() {
    const data = {
      date: this.refs.date.state.date,
      time: this.refs.time.state.time,
      pickup: this.state.pickup === null ?
        this.refs.pickup.props.defaultValue : this.state.pickup,
      dropoff: this.state.dropoff === null ?
        this.refs.dropoff.props.defaultValue : this.state.dropoff,
    };
    this.setState({ open: false });
    // console.log('issueing contract with data', data);
    this.props.issueContract(data);
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
        <RaisedButton
          label="Issue Contract"
          onTouchTap={this.handleOpen}
        />
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
            defaultValue="211 Yonge St, ON"
            hintText="Pickup Address"
            onChange={this.setLocationPickup}
            ref="pickup"
          />
          <TextField
            defaultValue="26 Wallenberg Drive, ON"
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

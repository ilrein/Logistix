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

    this.state = { open: false };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.selectStartDate = this.selectStartDate.bind(this);
    this.handleAccept = this.handleAccept.bind(this);
    // this.props.issueContract();
  }

  handleOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    console.log('closing the modal');
    this.setState({ open: false });
  }

  handleAccept() {
    console.log('Accepted the modal', this.refs.date.state);
    this.setState({ open: false });
  }

  selectStartDate() {
    console.log('start date has been selected');
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
          />
          <TextField
            hintText="Pickup Address"
          />
          <TextField
            hintText="Destination"
          />
        </Dialog>
      </div>
    );
  }
}

Modal.propTypes = {
  issueContract: PropTypes.func,
};

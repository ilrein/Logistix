import React, { Component, PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';

import { FloatingInput } from './Inputs';

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
    // this.props.issueContract();
  }

  handleOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    console.log('closing the modal', this.refs.date.state);
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
        onTouchTap={this.handleClose}
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
          Choose the start of the contract.
          <br />
          <DatePicker
            hintText="Date Picker"
            onChange={this.selectStartDate}
            ref="date"
          />
          <FloatingInput />
        </Dialog>
      </div>
    );
  }
}

Modal.propTypes = {
  issueContract: PropTypes.func,
};

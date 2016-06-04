// import Meteor from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import React, { Component } from 'react';
import TextField from 'material-ui/TextField/TextField';
import RaisedButton from 'material-ui/RaisedButton/RaisedButton';

const style = {
  container: {
    paddingTop: 20,
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  field: {
    width: '80%',
  },
  button: {
    display: 'inline-block',
    marginLeft: 10,
  },
};

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.clickSignUp = this.clickSignUp.bind(this);
    this.clickBack = this.clickBack.bind(this);
  }

  clickSignUp(event) {
    event.preventDefault();
    const emailAddress = this.refs.emailAddress.getValue();
    const password = this.refs.password.getValue();
    const passwordConfirmation = this.refs.passwordConfirmation.getValue();

    if (password === passwordConfirmation) {
      console.log('both match');
      Accounts.createUser({
        email: emailAddress,
        password,
      }, () => {
        console.log('User created successfully!');
        // Meteor.loginWithPassword(emailAddress, password, () => {});
        FlowRouter.go('/dashboard');
      });
    } else {
      console.log('they dont match');
    }
  }

  clickBack(event) {
    event.preventDefault();
    console.log('Clicked back');
    FlowRouter.go('/');
  }

  render() {
    return (
      <form
        className="register-form"
      >
        <div
          style={style.container}
        >
          <TextField
            hintText="Email address"
            ref="emailAddress"
            style={style.field}
            type="email"
          />
          <br />
          <TextField
            hintText="Password"
            type="password"
            ref="password"
            style={style.field}
          />
          <br />
          <TextField
            hintText="Confirm Password"
            type="password"
            ref="passwordConfirmation"
            style={style.field}
          />
          <br />
          <div>
            <RaisedButton
              label="Sign up"
              primary
              style={style.button}
              onClick={this.clickSignUp}
            />
            <RaisedButton
              label="Back"
              style={style.button}
              onClick={this.clickBack}
            />
          </div>
        </div>
      </form>
    );
  }
}

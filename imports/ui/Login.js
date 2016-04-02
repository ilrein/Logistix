import React, { Component } from 'react';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';

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
    width: '80%'
  },
  button: {
    display: 'inline-block',
    marginLeft: 10,
  }
}

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.clickLogin = this.clickLogin.bind(this);
    this.clickRegister = this.clickRegister.bind(this);
  }

  clickLogin(event) {
    event.preventDefault();
    console.log('Clicked login');
  }

  clickRegister(event) {
    event.preventDefault();
    console.log('Clicked register');
  }

  render() {
    return (
      <form
        className="login-form"
      >
        <div
          style={style.container}
        >
          <TextField
            hintText="Email address"
            style={style.field}
          /><br/>
          <TextField
            hintText="Password"
            type="password"
            style={style.field}
          /><br/>
          <div>
            <RaisedButton
              label="Login"
              secondary={true}
              style={style.button}
              onClick={this.clickLogin}
            />
            <RaisedButton
              label="Register"
              primary={true}
              style={style.button}
              onClick={this.clickRegister}
            />
          </div>
        </div>
      </form>
    );
  }
}

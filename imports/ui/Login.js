import React from 'react';
import { Accounts } from 'meteor/std:react-accounts-ui';

Accounts.ui.config({
  passwordSignupFields: 'EMAIL_ONLY',
  loginPath: '/',
  onSignedInHook: () => FlowRouter.go('/dashboard'),
  onSignedOutHook: () => FlowRouter.go('/'),
  // preSignUpHook: () => { console.log('hello') }
});

export default class Login extends React.Component {
  render() {
    return (
      <Accounts.ui.LoginForm />
    );
  }
}

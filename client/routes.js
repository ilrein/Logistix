import React from 'react';
import { mount } from 'react-mounter';

import MainLayout from '../imports/layouts/MainLayout';
import Login from '../imports/ui/Login';
import Register from '../imports/ui/Register';

import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// Can go away when react 1.0 release
injectTapEventPlugin();

FlowRouter.route('/', {
  action() {
    mount(MainLayout, {
      content: (<Login />)
    });
  }
});

FlowRouter.route('/register', {
  action() {
    mount(MainLayout, {
      content: (<Register />)
    });
  }
});

FlowRouter.route('/dashboard', {
  action() {
    mount(MainLayout, {
      content: (<div>Dashboard</div>)
    });
  }
});

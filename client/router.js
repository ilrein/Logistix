// Core libraries
import React from 'react';
import { mount } from 'react-mounter';
import { Tracker } from 'meteor/tracker';

// Layouts
import MainLayout from '../imports/layouts/MainLayout';
import AppLayout from '../imports/layouts/AppLayout';

// Components
import Login from '../imports/ui/Login';
import Register from '../imports/ui/Register';
import Dashboard from '../imports/ui/Dashboard';

import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// Can go away when react 1.0 release
injectTapEventPlugin();

// Home route
FlowRouter.route('/', {
  action() {
    mount(MainLayout, {
      content: (<Login />),
    });
  },
});

// Register route
FlowRouter.route('/register', {
  action() {
    mount(MainLayout, {
      content: (<Register />),
    });
  },
});

// Main part of the app, the dashboard
FlowRouter.route('/dashboard', {
  action() {
    mount(AppLayout, {
      content: (<Dashboard />),
    });
  },
});

// This should cause a redirect when you logout
// I'll need to finetune this
Tracker.autorun(() => {
  if (!Meteor.userId()) {
    FlowRouter.go('/');
  }
});

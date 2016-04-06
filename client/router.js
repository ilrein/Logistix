// Core libraries
import React from 'react';
import { mount } from 'react-mounter';
import { Tracker } from 'meteor/tracker';

// Layouts
import MainLayout from '../imports/layouts/MainLayout';
import AppLayout from '../imports/layouts/AppLayout';

// Stateless Components
import Login from '../imports/ui/Login';
import Register from '../imports/ui/Register';
import Dashboard from '../imports/ui/Dashboard';

// Containers
import UsersCountContainer from '../imports/containers/UsersCountContainer';

// Needed for onTouchTap
// Can remove when React 1.0 is released
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

//-------
// Routes
//-------

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

// testing page for debugging components
FlowRouter.route('/test', {
  action() {
    mount(AppLayout, {
      content: (
        <UsersCountContainer />
      ),
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

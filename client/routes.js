import React from 'react';
import { mount } from 'react-mounter';

import MainLayout from '../imports/layouts/MainLayout';
import Login from '../imports/ui/Login';

FlowRouter.route('/', {
  action() {
    mount(MainLayout, {
      content: (<Login />)
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

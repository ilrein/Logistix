/* eslint-disable */

Meteor.publish('userStatus', function() {
  return Meteor.users.find({ 'status.online': true });
});

// Jobs
import Jobs from '/lib/collections/JobsCollection';

Meteor.publish('jobs', function() {
  return Jobs.find({});
});

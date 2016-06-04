/* eslint-disable */

Meteor.publish('userStatus', function() {
  return Meteor.users.find({ 'status.online': true });
});

// Jobs
import Contracts from '/lib/collections/ContractCollection';

Meteor.publish('contracts', function() {
  return Contracts.find({});
});

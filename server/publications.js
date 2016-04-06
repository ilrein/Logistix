Meteor.publish('userStatus', function() { // eslint-disable-line  
  return Meteor.users.find({ 'status.online': true });
});

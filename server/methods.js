import { Meteor } from 'meteor/meteor';

Meteor.methods({
  googleMapsApiKey() {
    return Meteor.settings.googleMapsApiKey;
  },
});

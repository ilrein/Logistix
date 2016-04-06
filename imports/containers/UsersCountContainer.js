import { composeWithTracker } from 'react-komposer';
import UsersCount from '../ui/UsersCount';

function composer(props, onData) {
  const handle = Meteor.subscribe('userStatus');
  if (handle.ready()) {
    const users = Meteor.users.find({}).count();
    onData(null, { users });
  }
}

export default composeWithTracker(composer)(UsersCount);

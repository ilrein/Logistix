import { composeWithTracker } from 'react-komposer';
import UsersCount from '../ui/UsersCount';

function composer(props, onData) {
  const handle = Meteor.subscribe('userStatus');
  if (handle.ready()) {
    const totalUsers = Meteor.users.find({}).count();
    // console.log(totalUsers);
    onData(null, { totalUsers });
  }
}

export default composeWithTracker(composer)(UsersCount);

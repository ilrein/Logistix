import { composeWithTracker } from 'react-komposer';
import UserName from '../ui/UserName';

function composer(props, onData) {
  const handle = Meteor.user();
  if (handle) {
    const userName = handle.emails[0].address;
    // console.log(userName);
    onData(null, { userName });
  }
}

export default composeWithTracker(composer)(UserName);

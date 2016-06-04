import { composeWithTracker } from 'react-komposer';
import JobsCount from '../ui/JobsCount';

function composer(props, onData) {
  const handle = Meteor.subscribe('jobs');
  if (handle.ready()) {
    const totalJobs = Jobs.find({}).count();
    // console.log(totalUsers);
    onData(null, { totalJobs });
  }
}

export default composeWithTracker(composer)(JobsCount);

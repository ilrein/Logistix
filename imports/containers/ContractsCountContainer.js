import { composeWithTracker } from 'react-komposer';
import ContractsCount from '../ui/ContractsCount';

function composer(props, onData) {
  const handle = Meteor.subscribe('contracts');
  if (handle.ready()) {
    const totalContracts = Contracts.find({}).count();
    // console.log(totalUsers);
    onData(null, { totalContracts });
  }
}

export default composeWithTracker(composer)(ContractsCount);

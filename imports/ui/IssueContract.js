import React, { PropTypes } from 'react';
import { Button } from './Buttons';

const IssueContract = (props) => { // eslint-disable-line
  return (
    <div onTouchTap={props.callback}>
      <Button
        label="Issue Contract"
        type="default"
      />
    </div>
  );
};

IssueContract.propTypes = {
  callback: PropTypes.func,
};

export default IssueContract;

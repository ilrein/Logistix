import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export const Button = (props) => (
  <div className="button">
    <RaisedButton
      label={props.label}
      type={props.type}
    />
  </div>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

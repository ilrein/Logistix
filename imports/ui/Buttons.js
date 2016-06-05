import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

export const Button = (props) => (
  <div className="button">
    <RaisedButton
      label={props.label}
      style={style}
      type={style.type}
    />
  </div>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

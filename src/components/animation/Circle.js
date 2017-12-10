import React from 'react';
import PropTypes from 'prop-types';

const Circle = (props) => {
  const {value} = props;
  return (
    <span style={{width: value.x, height: value.x}} ></span>
  );
};


Circle.propTypes = {
  value: PropTypes.object.isRequired
};


export default Circle;

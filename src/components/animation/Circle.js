import React from 'react';

const Circle = (props) => {
  const {value} = props;
  return (
    <span style={{width: value.x, height: value.x}} ></span>
  );
}

export default Circle;

import React, { useEffect, useContext } from 'react';
import { Container } from 'react-pixi-fiber';
import MyContext from './MyContext';

const MyComponent = () => {
  const { x } = useContext(MyContext);
  // Inside of <Stage>, x is not defined
  debugger;

  return (
    <Container />
  )
};

export default MyComponent;

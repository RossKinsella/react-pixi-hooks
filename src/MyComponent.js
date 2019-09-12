import React, { useEffect } from 'react';
import { Container } from 'react-pixi-fiber';

const MyComponent = () => {
  useEffect(() => {
    let x = 2;
    debugger
  }, []);

  return (
    <Container />
  )
};

export default MyComponent;
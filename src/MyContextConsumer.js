import React, { useContext } from 'react';
import MyContext from './MyContext';
const MyContextConsumer = () => {
  const { x } = useContext(MyContext);
  // Outside of <Stage>, x is defined
  debugger

  return null;
};

export default MyContextConsumer;
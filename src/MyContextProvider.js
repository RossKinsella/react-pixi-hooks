import React from 'react';
import MyContext from './MyContext';

const MyContextProvider = ({ children }) => {
  return (
    <MyContext.Provider value={{x: 2}}>
      {children}
    </MyContext.Provider>
  )
};

export default MyContextProvider;
import React from 'react';
import { Stage } from 'react-pixi-fiber';
import './App.css';
import MyComponent from './MyComponent';
import MyContextProvider from './MyContextProvider';
import MyContextConsumer from './MyContextConsumer';

function App() {
  return (
    <MyContextProvider>
      <MyContextConsumer />
      <div className="App">
        <Stage>
          <MyComponent />
        </Stage>
      </div>
    </MyContextProvider>
  );
}

export default App;

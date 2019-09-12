import React from 'react';
import { Stage } from 'react-pixi-fiber';
import './App.css';
import MyComponent from './MyComponent';

function App() {
  return (
    <div className="App">
      <Stage>
        <MyComponent />
      </Stage>
    </div>
  );
}

export default App;

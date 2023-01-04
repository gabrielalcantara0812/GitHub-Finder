import React from 'react';
import {Outlet} from 'react-router-dom'
import module from './App.module.css'

function App() {
  return (
    <div className={module.app}>
      <h1>Hello, World</h1>
      <Outlet/>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './Pages/Main'
import MainRouting from './Pages/MainRouting';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Main/>
          <MainRouting/>
        </BrowserRouter>        
      </header>
    </div>
  );
}

export default App;

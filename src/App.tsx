import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./Pages/Main";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;

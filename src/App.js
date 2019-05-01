import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <div>Base Currency</div>
        <div className="d-flex align-items-center justify-content-between">
          <div>Currency</div>
          <div>Amount</div>
        </div>
      </header>
      <div className="content">
        {/* <CurrencyList /> TODO: create currency list component */}
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default App;

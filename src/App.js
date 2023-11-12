import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Offers from './Components/Offers_Page/Offers';
import Reg from './Components/Registered/Reg';
import PaymentPageModel from './Components/PaymentPageModel/PaymentPageModel';

function App() {
  return (
    <div>
      <Router>
        < PaymentPageModel />
      </Router>
      <Reg />
    </div>
  );
}

export default App;

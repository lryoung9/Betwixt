import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './Header/Header.js';
import Account from './Account/Account.js';
import MainPage from './MainPage/MainPage.js';
import Footer from './Footer/Footer.js';
import './App.css';

const App = () => (
  <Router>
    <div className="Container">
      <div className="header navbar">
        <Header />
        <Account />
      </div>

      <div className="content row justify-content-around">
        <Route exact path="/" component={ MainPage } />
      </div>

      <Footer />
    </div>
  </Router>

);

export default App;
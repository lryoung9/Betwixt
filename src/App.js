import React from 'react';
import Header from './Header/Header.js';
import Account from './Account/Account.js';
import About from './About/About.js';
import Maps from './Map/Map.js';
import Footer from './Footer/Footer.js'
import './App.css';

const App = () => (
      <div className="Container">
        <div className="navbar">
          <Header />
          <Account />
        </div>
        <div className="row justify-content-around">
          <About />
          <Maps />
        </div>
        <Footer />
      </div>
);

export default App;

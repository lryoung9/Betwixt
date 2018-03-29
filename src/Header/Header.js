import React from 'react';
import logo from './logo.svg';
import './Header.css';

const Header = () => (
    <wrapper>
        <span className="navbar-brand">
            <img src={logo} className="App-logo" height="100" alt="logo" />
        </span>
    </wrapper>
);

export default Header;

import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <nav className="navbar fixed-bottom justify-content-center navbar-light">
                    <span class="navbar-text">
                        Product by Lydia Young
                    </span>
                </nav>
            </div>
        );
    }
}

export default Footer;

import React from 'react';
import About from '../About/About.js';
import Maps from '../Map/Map.js';
import './MainPage.css'

const MainPage = () => (
    <div>
        <div className="row">
            <div className="card col-sm-4">
                <About />
            </div>
            <div className="card col-sm-7 text-center align-middle">
                <Maps />
            </div>
        </div>
    </div>
)

export default MainPage;


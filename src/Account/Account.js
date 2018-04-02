import React from 'react';
import './Account.css';

const Account = () => (
    <wrapper className="navbtn">
        {/* Button trigger for sign-up modal*/}
        <button type="button" className="btn btn-sm btn-outline-dark" data-toggle="modal" data-target="signUp">Sign Up</button>
        
        {/* button trigger for lo-in modal */}
        <button type="button" className="btn btn-sm btn-outline-dark" data-toggle="modal" data-target="logIn">Log in</button>
    </wrapper>
);

export default Account;

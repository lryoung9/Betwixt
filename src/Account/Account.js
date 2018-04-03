import React, { Component } from 'react';
import Signup from '../OAuth/SignupModal';
import Login from '../OAuth/LoginModal';
import './Account.css';

class Account extends Component {
    state = {
        modal: false
    };

    openModal = () => {
        this.setState({modal: true});
    };

    closeModal = () => {
        this.setState({modal: false});
    };

    render() {
        return (
            <div className="navbtn">
                {/* Button trigger for sign-up modal*/}
                <button onClick={this.openModal} type="button" className="btn btn-sm btn-outline-dark" data-toggle="modal" data-target="#signUp">Sign Up</button>
                <Signup isVisible={this.state.modal} />

                {/* button trigger for log-in modal */}
                <button onClick={this.openModal} type="button" className="btn btn-sm btn-outline-dark" data-toggle="modal" data-target="#logIn">Log in</button>
                <Login isVisible={this.state.modal} />
            </div>
        );
    }
}

export default Account;

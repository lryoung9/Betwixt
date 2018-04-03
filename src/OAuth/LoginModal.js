import React, { Component } from 'react';
import Account from "../Account/Account";

const Login = () => (
    <div className="modal fade" id="logIn">
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="ModalTitle">Log In</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <form>
                        <div className="form-group">
                            <label for="usernameInput">Username</label>
                            <input type="text" className="form-control" id="usernameInput" placeholder="Enter your username" />
                        </div>
                        <div className="form-group">
                            <label for="passwordInput">Password</label>
                            <input type="password" className="form-control" id="passwordInput" placeholder="Enter your password" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
);

export default Login;
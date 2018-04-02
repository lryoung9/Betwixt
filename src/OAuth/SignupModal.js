import React, { Component } from 'react';

class Signup extends Component {
    state = {
        modal: false
    };

    render() {
        return (
            {/* Sign-up Modal */}
            <div className="modal fade" id="signUp" tabindex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="ModalTitle">Sign-Up</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label for="usernameInput">Username</label>
                                    <input type="text" className="form-control" id="usernameInput" placeholder="Choose a username" />
                                </div>
                                <div className="form-group">
                                    <label for="emailInput">Email</label>
                                    <input type="email" className="form-control" id="emailInput" placeholder="Enter email address" />
                                </div>
                                <div className="form-group">
                                    <label for="addressInput">Address</label>
                                    <input type="text" className="form-control" id="addressInput" placeholder="Enter an address" />
                                </div>
                                <div className="form-group">
                                    <label for="passwordInput">Password</label>
                                    <input type="password" className="form-control" id="passwordInput" placeholder="Create P" />
                                </div>
                                
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Signup;

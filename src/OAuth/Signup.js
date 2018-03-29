import React from 'react';

const Signup = () => (
    <wrapper>
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
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </wrapper>
);

export default Signup;

// user name, email, address, password
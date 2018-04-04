import React, { Component } from 'react';
import './AddressForm.css';

class AddressForm extends Component {
    render() {
        return (
            <form className="mapOverlay">
                <div className="form-group">
                    <input type="text" className="form-control" id="addressInput" autocomplete="on" placeholder="Enter an address" />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        );
    }
}

export default AddressForm;
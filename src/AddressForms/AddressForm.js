import React from 'react';
import './AddressForm.css';

const AddressForm = ({handleOriginAddressChange, handleShowSecondaryAddress}) => (
    <form className="mapOverlay">
        <div className="form-group">
            <input onChange={handleOriginAddressChange} type="text" className="form-control" id="addressInput" autocomplete="on" placeholder="Enter location" />
        </div>
        <button onClick={handleShowSecondaryAddress} class="btn btn-outline-dark">Enter next location</button>
        <button class="btn btn-outline-dark secure">Send securely</button>
    </form>
)

export default AddressForm;
import React from 'react';

const SecondAddressForm = ({handleSecondaryAddressChange, handleFindBetwixt}) => (
    <form className="mapOverlay">
        <div className="form-group">
            <input onChange={handleSecondaryAddressChange} type="text" className="form-control" id="addressInput" autocomplete="on" placeholder="Enter second location" />
        </div>
        <button onClick={handleFindBetwixt} class="btn btn-outline-dark">Find a meeting place</button>
    </form>
)

export default SecondAddressForm;
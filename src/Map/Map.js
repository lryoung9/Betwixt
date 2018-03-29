import React, { Component } from 'react';
import './Map.css';
import AddressForm from '../AddressForm/AddressForm';

class Maps extends Component {
  render() {
    return (
        <div className="card col-sm-7 text-center ">
            <div className="card-body">
              <AddressForm />
            </div>
        </div>
    );
  }
}

export default Maps;

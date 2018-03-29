import React, { Component } from 'react';
import './Map.css';
import AddressForm from '../AddressForm/AddressForm';
import API from "../utils/API";


function initMap() {
  var location = {lat: myLat, lng: myLon};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: location
  });
  var marker = new google.maps.Marker({
    position: location,
    map: map
  });
}

class Maps extends Component {
  state = {
    search: "",
    results: []
  };

  render() {
    return (
        <div className="card col-sm-7 text-center align-middle">
            <div className="card-body">
              <AddressForm />
            </div>
        </div>
    );
  }
}

export default Maps;

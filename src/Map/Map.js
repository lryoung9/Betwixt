import React, { Component } from 'react';
import './Map.css';
import AddressForm from '../AddressForm/AddressForm';
import API from "../utils/API";

var myLat = (response.data.lat);
var myLon = (response.data.lon);

function initMap() {
  var location = {lat: myLat, lng: myLon};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: {lat: 39.7392, lng: 104.9903}
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
      <div className="card-body">
        <AddressForm />
      </div>
    );
  }
}

export default Maps;

import React, { Component } from 'react';
import './Map.css';
import GoogleMapReact from 'google-map-react';
import AddressForm from '../AddressForm/AddressForm';

class SimpleMap extends Component {
  static defaultProps = {
    // Denver's lat/long
    center: {lat: 39.7392, lng: -104.9903},
    zoom: 11
  };
 
  render() {
    return (
      <div className="map">
        <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyD_7tj3w8diAGo3y0b_VLXavRqvFBQUIBs" }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        >
        <AddressForm />
        </GoogleMapReact>
      </div>
    );
  }
}

// let myLat = (39.7392);
// let myLon = (104.9903);

// function initMap() {
//   let location = {lat: myLat, lng: myLon};
//   const map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 12,
//     center: location
//   });
//   let marker = new google.maps.Marker({
//     position: location,
//     map: map
//   });
// }

// class Maps extends Component {
//   state = {
//     search: "",
//     results: []
//   };
  
  

//   render() {
//     return (
//       <div id="map" className="card-body">
//         <AddressForm />
//       </div>
//     );
//   }
// }

export default SimpleMap;
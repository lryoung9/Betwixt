import React, { Component } from 'react';
import './Map.css';
import GoogleMapReact from 'google-map-react';
import AddressForm from '../AddressForms/AddressForm';
import SecondAddressForm from '../AddressForms/SecondAddressForm';
import google_map from 'google-map-react/lib/google_map';

class SimpleMap extends Component {
  state = {
    originAddress: "",
    originLatLng: "",
    secondaryAddress: "",
    secondaryLatLng: "",
    isSecondaryAddressVisible: false,
    // Denver's lat/long
    center: {lat: 39.7392, lng: -104.9903}
  };

  // takes in origin address
  handleOriginAddressChange = ({target: { value}}) => {
    this.setState({originAddress: value})
  };

  // switches rendering of address form to show second address form
  handleShowSecondaryAddress = (event) => {
    event.preventDefault(); 
    this.setState({isSecondaryAddressVisible: true});
  };

  // takes in second address
  handleSecondaryAddressChange = ({target: { value}}) => {
    this.setState({secondaryAddress: value});
  };

  // Finds nearby places
  handlePlacesResults = (results, status) => {
    const map = this.map;
    const infoWindow = this.infoWindow;
    results.map(place => {
      const marker = new window.google.maps.Marker({
        map,
        position: place.geometry.location
      });
      const request = { reference: place.reference };
      const service = new window.google.maps.places.PlacesService(map);
      service.getDetails(request, (details, status) => {
        window.google.maps.event.addListener(marker, 'click', () => {
          infoWindow.setContent(
            `<a href="${place.website}"><strong>${place.name}</strong></a>
            <br>${place.formatted_phone_number}
            <br><a href="${place.url}">${place.formatted_address}</a>
            <br>Hours: ${place.opening_hours.weekday_text}`);
          infoWindow.open(map, marker);
      })
      })
    });
  };

  findNearbyPlaces = () => {
    const service = new window.google.maps.places.PlacesService(this.map);
    service.nearbySearch({
      location: this.state.center,
      radius: 10000,
      keyword: ['store']
    }, this.handlePlacesResults)
  };

  getMidpoint = () => {
    const origin = new window.google.maps.LatLng(this.state.originLatLng.lat, this.state.originLatLng.lng);
    const secondary = new window.google.maps.LatLng(this.state.secondaryLatLng.lat, this.state.secondaryLatLng.lng);
    const midpoint = window.google.maps.geometry.spherical.interpolate(
      origin,
      secondary,
      0.5
    );
    this.setState({ ...this.state, center: {lat: midpoint.lat(), lng: midpoint.lng()}}, this.findNearbyPlaces)
    
  };
  
  getSecondaryLatLng = () => {
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({address: this.state.secondaryAddress}, (results, status) => {
      this.setState({
        ...this.state,
        secondaryLatLng: {
          lat: results[0].geometry.location.lat(),
          lng: results[0].geometry.location.lng()
        }
      }, this.getMidpoint
    );
    });
  };

  getOriginLatLng = () => {
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({address: this.state.originAddress}, (results, status) => {
      this.setState({
        ...this.state,
        originLatLng: {
          lat: results[0].geometry.location.lat(),
          lng: results[0].geometry.location.lng()
        }
      }, this.getSecondaryLatLng
    );
    });
  };

  // finds mid-point between origin address and second address
  handleFindBetwixt = (event) => {
    event.preventDefault();
    this.getOriginLatLng();
  };

  assignInstanceVariables = ({map, maps}) => {
    this.map = map;
    this.infoWindow = new window.google.maps.InfoWindow();
  };
  
  static defaultProps = {
    zoom: 11
  };
 
  render() {
    return (
      <div className="map">
        <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyD_7tj3w8diAGo3y0b_VLXavRqvFBQUIBs",
          libraries: "geometry,places"
        }}
        center={this.state.center}
        defaultZoom={this.props.zoom}
        onGoogleApiLoaded={this.assignInstanceVariables}
        yesIWantToUseGoogleMapApiInternals
        >
        {this.state.isSecondaryAddressVisible ? <SecondAddressForm
            handleSecondaryAddressChange={this.handleSecondaryAddressChange}
            handleFindBetwixt={this.handleFindBetwixt}
          />: (
          <AddressForm
            handleOriginAddressChange={this.handleOriginAddressChange}
            handleShowSecondaryAddress={this.handleShowSecondaryAddress}
          />
        )}
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
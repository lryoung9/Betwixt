import axios from "axios";

const BASEURL = "https://maps.googleapis.com/maps/api/js";
const APIKEY = "?key=AIzaSyAAtIHXTD7i3-5OIaNRtlzoJXHPRdr5tR8&callback=initMap";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  return: {
    axios.get(BASEURL + APIKEY)
  }
};

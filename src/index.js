const mapboxgl = require("mapbox-gl");
const addMarker = require("./marker");

mapboxgl.accessToken = "pk.eyJ1IjoiY2Vkd2FyZHM5NSIsImEiOiJjazlzd3luZWwwMjl1M2xwY2V3a2MzYm1qIn0.1Kyn7v84PUAmbQl6MkCYMg"; // your API key

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});
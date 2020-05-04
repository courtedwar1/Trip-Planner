const mapboxgl = require("mapbox-gl");

const iconURL = {
  activity: "http://i.imgur.com/WbMOfMl.png",
  hotel: "http://i.imgur.com/D9574Cu.png",
  restaurant: "http://i.imgur.com/cqR6pUI.png",
  unspecified: "https://simpleicon.com/wp-content/uploads/map-marker-8.png"
}

function addMarker(typeofLocation = "unspecified", arrOfCoord) {
  const markerDomEl = document.createElement("div");
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";
  markerDomEl.style.backgroundImage = `url(${iconURL[typeofLocation]})`;

  new mapboxgl.Marker(markerDomEl).setLngLat(arrOfCoord).addTo(map);
}

module.exports = addMarker;
const marker = document.querySelector("img");
const input = document.querySelector(".search-input");
const ipAddress = document.querySelector(".ip-address");
const currLocation = document.querySelector(".location");
const isp = document.querySelector(".isp");
const timezone = document.querySelector(".timezone");
const btn = document.querySelector(".search-btn");
const inputValue = input.value.trim();

setTimeout(() => {
  console.log(inputValue);
}, 2000);

function ipDdata(data) {
  ipAddress.textContent = data.query;
  isp.textContent = data.isp;
  timezone.textContent = data.zip;
  currLocation.textContent = `${data.country}, ${data.countryCode}`;
}

btn.addEventListener("click", () => {
  fetch(`http://ip-api.com/json/${input.value}`)
    .then((response) => response.json())
    .then((data) => {
      ipDdata(data);
      TODO: setupMap([data.lon, data.lat]);
    });
});

// document.addEventListener("DOMContentLoaded", () => {
// When searched

// By default
fetch(`http://ip-api.com/json/${input.value}`)
  .then((response) => response.json())
  .then((data) => {
    ipDdata(data);
    TODO: setupMap([data.lon, data.lat]);
  });

// Map Setup
mapboxgl.accessToken =
  "pk.eyJ1IjoiYW5zYTk5IiwiYSI6ImNsMTNwdTFwZDBibDIzY3AzMWJ3Y3VheHQifQ.nTGTQM-JTsGcnuqpcpuTZQ";
function setupMap(center) {
  const map = new mapboxgl.Map({
    container: "map", // container ID
    style: "mapbox://styles/mapbox/streets-v11", // style URL
    center: center, // starting position [lng, lat]
    zoom: 9, // starting zoom
  });
  map.addControl(new mapboxgl.NavigationControl());
  map.addControl(
    new MapboxDirections({
      accessToken: mapboxgl.accessToken,
    }),
    "top-left"
  );
}

setTimeout(() => {
  marker.style.display = "none";
}, 5000);
// });

/*


 fetch(`http://ip-api.com/json/${inputValue}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(input);
      console.log(inputValue);
      ipDdata(data);
    });
*/

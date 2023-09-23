// Create a Leaflet map centered around Indonesia
let myMap = L.map("map", {
    center: [-2.5489, 118.0149], // Set the initial map center to Indonesia
    zoom: 5, // Set the initial zoom level
});

// Define the GeoJSON data URL
var geoData = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";
var tectonicData = "https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json"; // Fixed the URL variable name

// Function to determine marker color by depth
function mapColor(depth) {
    return depth > 90 ? '#0000FF' :
           depth > 70 ? '#00D3FF' :
           depth > 50 ? '#00FFB4' :
           depth > 30 ? '#40FF88' :
           depth > 10 ? '#74FF66' :
                        '#C2FF33';
}

// Function to map magnitude to marker size
function mapRadius(mag) {
    var minMarkerSize = 1;
    return mag > 0 ? Math.max(minMarkerSize, mag * 6) : minMarkerSize;
}

// Function to define the style of earthquake markers
function mapStyle(feature) {
    const depth = feature.geometry.coordinates[2];
    const magnitude = feature.properties.mag;

    return {
        opacity: 1,
        fillOpacity: 1,
        fillColor: mapColor(depth), // Changed mapColor to chooseColor
        color: "#000000",
        radius: mapRadius(magnitude),
        stroke: true,
        weight: 0.5
    };
}

// Create a layer for tectonic plates
var tectonicPlates = L.layerGroup();

// Perform a GET request to the tectonicPlatesUrl
d3.json(tectonicData).then(function (plates) {
    // Console log the data retrieved
    console.log(plates);
    L.geoJSON(plates, {
        color: "yellow",
        weight: 2
    }).addTo(tectonicPlates);
});

// Create tile layers
var StreetMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Perform a GET request to retrieve earthquake data
d3.json(geoData).then(function (data) {
    // Console log the data retrieved
    console.log(data);

    // Create GeoJSON layer with custom styling and popups
    var earthquakes = L.geoJSON(data, {
        pointToLayer: function (_feature, latlng) {
            return L.circleMarker(latlng);
        },
        style: mapStyle,
        onEachFeature: function (feature, layer) {
            // Create popups with earthquake information
            layer.bindPopup("<br>Location: " + feature.properties.place +
                "<br>Magnitude: " + feature.properties.mag +
                "<br>Depth: " + feature.geometry.coordinates[2]);
        }
    });

    // Create a baseMaps object
    var baseMaps = {
        "Street Map": StreetMap,
        "Topographic Map": tectonicPlates
    };

    // Create an overlay object to hold our overlay
    var overlayMaps = {
        "Tectonic Plates": tectonicPlates,
        "Earthquakes": earthquakes,
    };

    // Create a layer control
    L.control.layers(baseMaps, overlayMaps, {
        collapsed: false
    }).addTo(myMap);

    // Add a legend for earthquake depth
    var legend = L.control({ position: "bottomright" });
    legend.onAdd = function () {
        var div = L.DomUtil.create("div", "info legend");
        var depth = [-10, 10, 30, 50, 70, 90];

        // Create a legend title
        div.innerHTML += "<h3 style='text-align: center'>Depth</h3>";

        // Loop through depth ranges and generate colored squares and labels
        for (var i = 0; i < depth.length; i++) {
            var label = depth[i] + (depth[i + 1] ? '&ndash;' + depth[i + 1] + '<br>' : '+');
            var colorSquare = '<span style="background-color:' + mapColor(depth[i] + 1) + '">&nbsp;&nbsp;&nbsp;&nbsp;</span>';
            div.innerHTML += colorSquare + label + '<br>';
        }

        return div;
    };
    legend.addTo(myMap);
});
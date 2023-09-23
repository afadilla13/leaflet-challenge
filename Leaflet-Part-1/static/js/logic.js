// Create a Leaflet map centered around Indonesia
let myMap = L.map("map", {
    center: [-2.5489, 118.0149], // Set the initial map center to Indonesia
    zoom: 5, // Set the initial zoom level
});

// Add an OpenStreetMap tile layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Define the GeoJSON data URL
var geoData = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Retrieve earthquake data from the provided URL
d3.json(geoData).then(function (data) {
    // Console log the data retrieved
    console.log(data);

    // Function to map depth to color
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
            fillColor: mapColor(depth), // Set marker color based on depth
            color: "#000000",
            radius: mapRadius(magnitude), // Set marker size based on magnitude
            stroke: true,
            weight: 0.5
        };
    }

    // Create GeoJSON layer with custom styling and popups
    L.geoJson(data, {
        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng);
        },
        style: mapStyle,
        onEachFeature: function (feature, layer) {
            // Create popups with earthquake information
            layer.bindPopup("<br>Location: " + feature.properties.place +
                            "<br>Magnitude: " + feature.properties.mag +
                            "<br>Depth: " + feature.geometry.coordinates[2]);
        }
    }).addTo(myMap);

    // Add a legend for earthquake depth
    var legend = L.control({ position: "bottomright" });
    legend.onAdd = function () {
        var div = L.DomUtil.create("div", "info legend"),
            depth = [-10, 10, 30, 50, 70, 90];

        // Create a legend title
        div.innerHTML += "<h3 style='text-align: center'>Depth</h3>";

        // Loop through depth ranges and generate colored squares and labels
        for (var i = 0; i < depth.length; i++) {
            var label = depth[i] + (depth[i + 1] ? '&ndash;' + depth[i + 1] : '+');
            var colorSquare = '<span style="background-color:' + mapColor(depth[i] + 1) + '">&nbsp;&nbsp;&nbsp;&nbsp;</span>';
            div.innerHTML += colorSquare + label + '<br>';
        }

        return div;
    };
    legend.addTo(myMap);
});
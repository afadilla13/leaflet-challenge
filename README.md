# USGS Earthquake Data Visualization

The United States Geological Survey (USGS) is responsible for providing scientific data about natural hazards, the health of ecosystems, and environmental impacts. They collect a vast amount of earthquake data worldwide daily but lack a meaningful way to visualize it. In this project, we aim to develop a visualization tool for USGS earthquake data to educate the public and government organizations on critical Earth-related issues.

## Table of Contents
- [Before You Begin](#before-you-begin)
- [Part 1: Create the Earthquake Visualization](#part-1-create-the-earthquake-visualization)
- [Part 2: Gather and Plot More Data (Optional)](#part-2-gather-and-plot-more-data-optional)

### Before You Begin <a name="before-you-begin"></a>
1. Create a new repository for this project called `leaflet-challenge`. **Do not add this Challenge to an existing repository.**
2. Clone the new repository to your computer.
3. Inside your local git repository, create a directory for the Leaflet challenge with the following folders: `Leaflet-Part-1` and `Leaflet-Part-2`.
4. This Challenge requires both HTML and JavaScript, so be sure to add all the necessary files. These will be the main files to run for analysis.
5. Push the changes to your GitHub repository.

### Part 1: Create the Earthquake Visualization <a name="part-1-create-the-earthquake-visualization"></a>
Your first task is to visualize an earthquake dataset. Follow these steps:

1. **Get Your Dataset**: Obtain earthquake data from the USGS in GeoJSON format. To do this:
   - Visit the [USGS GeoJSON Feed](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) page.
   - Choose a dataset to visualize, such as "All Earthquakes from the Past 7 Days."

2. **Import and Visualize Data**: Use the URL of the selected JSON dataset to pull in the data for the visualization. Perform the following:
   - Utilize the Leaflet library to create a map that plots all the earthquakes based on their latitude and longitude coordinates.
   - Customize data markers to reflect the earthquake's magnitude by size and depth by color. Larger earthquakes should have bigger markers, and deeper ones should appear darker.
   - Add popups to provide additional information about each earthquake when a marker is clicked.

3. **Create a Legend**: Develop a legend to provide context for the map data. The legend should explain how earthquake depth correlates with marker color.

Your final visualization should resemble the example map provided.
![Part 1](https://github.com/afadilla13/leaflet-challenge/assets/128363337/183aaff8-367e-44bf-b64a-d210f14e5134)

### Part 2: Gather and Plot More Data (Optional)

In this optional part of the project, you can take your visualization to the next level by plotting a second dataset to illustrate the relationship between tectonic plates and seismic activity. To achieve this, follow these steps:

1. **Gather Tectonic Plate Data**: You can find the necessary data on tectonic plates at [fraxen/tectonicplates](https://github.com/fraxen/tectonicplates).

2. **Import and Visualize Tectonic Plate Data**: Use the URL of the tectonic plate GeoJSON dataset to pull in the data for visualization. Perform the following:

   - Utilize the Leaflet library to create a map that plots both earthquake data and tectonic plate data.
   - Customize the appearance of tectonic plate boundaries on the map for clarity.

3. **Combine Earthquake and Tectonic Plate Data**: Create a map that combines earthquake data and tectonic plate data, illustrating their spatial relationship.

4. **Add Additional Information**: Consider adding popups or other elements to provide context for the map data and enhance user understanding.

5. **Challenge Yourself**: This part is optional, intended to challenge yourself and further boost your skills in data visualization and mapping.

The following image is an example screenshot of what you could produce:
![Part 2](https://github.com/afadilla13/leaflet-challenge/assets/128363337/57937264-5d16-4be8-9899-cd561a9312e9)

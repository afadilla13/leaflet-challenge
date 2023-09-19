USGS Earthquake Data Visualization
The United States Geological Survey (USGS) is responsible for providing scientific data about natural hazards, the health of ecosystems, and environmental impacts. They collect a vast amount of earthquake data worldwide daily but lack a meaningful way to visualize it. In this project, we aim to develop a visualization tool for USGS earthquake data to educate the public and government organizations on critical Earth-related issues.

Table of Contents
Before You Begin
Files
Part 1: Create the Earthquake Visualization
Before You Begin <a name="before-you-begin"></a>
Create a new repository for this project called leaflet-challenge. Do not add this Challenge to an existing repository.
Clone the new repository to your computer.
Inside your local git repository, create a directory for the Leaflet challenge with the following folders: Leaflet-Part-1 and Leaflet-Part-2.
This Challenge requires both HTML and JavaScript, so be sure to add all the necessary files. These will be the main files to run for analysis.
Push the changes to your GitHub repository.
Files <a name="files"></a>
Download the necessary files to help you get started from Module 15 Challenge files.

Part 1: Create the Earthquake Visualization <a name="part-1-create-the-earthquake-visualization"></a>
Your first task is to visualize an earthquake dataset. Follow these steps:

Get Your Dataset: Obtain earthquake data from the USGS in GeoJSON format. To do this:

Visit the USGS GeoJSON Feed page.
Choose a dataset to visualize, such as "All Earthquakes from the Past 7 Days."
Import and Visualize Data: Use the URL of the selected JSON dataset to pull in the data for the visualization. Perform the following:

Utilize the Leaflet library to create a map that plots all the earthquakes based on their latitude and longitude coordinates.
Customize data markers to reflect the earthquake's magnitude by size and depth by color. Larger earthquakes should have bigger markers, and deeper ones should appear darker.
Add popups to provide additional information about each earthquake when a marker is clicked.
Create a Legend: Develop a legend to provide context for the map data. The legend should explain how earthquake depth correlates with marker color.

Your final visualization should resemble the example map provided.

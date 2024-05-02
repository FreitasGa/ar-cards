# AR Cards

This project is an AR (Augmented Reality) application that uses A-Frame and AR.js to create an interactive experience with 3D models.

## Team
- Bruno Oliveira
- Gabriel Freitas

## Project Structure

The project consists of an HTML file `index.html`, a JavaScript file `main.js`, and a set of 3D models stored in the `assets`directory.

## How It Works

The `main.js` file contains the logic for loading 3D models and registering event listeners for marker detection.

The `load` function in `main.js` dynamically creates A-Frame entities for each 3D model in the `assets` directory. Each model is associated with a unique marker, and the model is displayed when its corresponding marker is detected by the AR camera.

The `register` function in `main.js` sets up event listeners for each marker. When a marker is detected ("markerFound" event), a message is logged to the console. Similarly, when a marker is no longer detected ("markerLost" event), a message is logged to the console.

## Running the Project

To run the project, open the `index.html` file in a web browser that supports WebAR. Point the camera at the markers to view the 3D models.

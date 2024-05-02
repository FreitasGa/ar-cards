# AR Cards

AR Cards is an Augmented Reality (AR) application that utilizes A-Frame and AR.js to create an interactive experience with 3D models.

## Team

- Bruno Oliveira
- Gabriel Freitas

## Project Structure

The project consists of the following files:

- `index.html`: This HTML file is the main entry point for the application.
- `main.js`: This JavaScript file contains the logic for loading 3D models and handling marker detection.
- `assets` directory: This directory stores the 3D models used in the application.

## How It Works

The `main.js` file contains two main functions:

The `load` function: This function dynamically creates A-Frame entities for each 3D model in the assets directory. Each model is associated with a unique marker, and the model is displayed when its corresponding marker is detected by the AR camera.

The `register` function: This function sets up event listeners for each marker. When a marker is detected ("markerFound" event), a message is logged to the console. Similarly, when a marker is no longer detected ("markerLost" event), a message is logged to the console.

### Additional Information

In addition to marker detection, the `main.js` file also handles user interactions with the 3D models, such as animations or transformations.

## Running the Project

To run the project, follow these steps:

- Clone the repository to your local machine.
- Open the `index.html` file in a web browser that supports WebAR.
- Use the device's camera to view the markers and interact with the 3D models.

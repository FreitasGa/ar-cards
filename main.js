let length = 5;

function load() {
  let sceneEl = document.getElementById("scene");
  let assetsEl = document.getElementById("assets");

  for (let i = 0; i < length; i++) {
    let marker = "marker-" + i;

    let assetEl = document.createElement("a-asset-item");
    assetEl.setAttribute("id", marker);
    assetEl.setAttribute("src", "https://raw.githubusercontent.com/FreitasGa/ar-cards/main/public/model-" + i + "/model.gltf");
    assetsEl.appendChild(assetEl);

    let markerEl = document.createElement("a-marker");
    markerEl.setAttribute("id", marker);
    markerEl.setAttribute("value", i);
    markerEl.setAttribute("type", "barcode");
    markerEl.setAttribute("raycaster", "objects: .clickable;");
    markerEl.setAttribute("cursor", "fuse: false; rayOrigin: mouse;");
    markerEl.setAttribute("smooth", true);
    markerEl.setAttribute("emitevents", true);
    markerEl.setAttribute("registerevents", true);
    sceneEl.appendChild(markerEl);
    
    let modelEl = document.createElement("a-entity");
    modelEl.setAttribute("gltf-model", "#" + marker);
    modelEl.setAttribute("scale", "0.03 0.03 0.03");
    modelEl.setAttribute("position", "0 0 0");
    modelEl.setAttribute("rotation", "-90 0 0");
    modelEl.setAttribute("class", "clickable");
    modelEl.setAttribute("gesture-handler", "minScale: 0.25; maxScale: 10;");
    markerEl.appendChild(modelEl);
  }
}

function register() {
  console.info("Registering events...");

  let marker = this.el;

  marker.addEventListener("markerFound", () => {
    console.info("Marker found: ", marker.id);
  });

  marker.addEventListener("markerLost", () => {
    console.info("Marker lost: ", marker.id);
  });
}

AFRAME.registerComponent("markers", {
  init: load,
});

AFRAME.registerComponent("registerevents", {
  init: register,
});

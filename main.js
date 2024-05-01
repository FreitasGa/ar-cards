let length = 10;

function load() {
  console.info("Loading markers...");

  let sceneEl = document.getElementById("scene");

  for (let i = 0; i < length; i++) {
    let marker = "marker-" + i;

    let markerEl = document.createElement("a-marker");
    markerEl.setAttribute("id", marker);
    markerEl.setAttribute("value", i);
    markerEl.setAttribute("type", "barcode");
    markerEl.setAttribute("emitevents");
    markerEl.setAttribute("register-events");
    
    let boxEl = document.createElement("a-box");
    boxEl.setAttribute("position", "0 0.5 0");
    boxEl.setAttribute("scale", "2.0 2.0 2.0");
    boxEl.setAttribute("color", "red");
    
    markerEl.appendChild(boxEl);
    sceneEl.appendChild(markerEl);
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

AFRAME.registerComponent("register-events", {
  init: register,
});

const info = document.getElementById("info");
const keyHistory = document.getElementById("key-history");

addToInfo("Screen Width", screen.width);
addToInfo("Screen Height", screen.height);
addToInfo("Window Width", window.width);
addToInfo("Window Height", window.height);

function addToInfo(label, value) {
    const entry = document.createElement("li");
    entry.innerHTML = `${label}: ${value}`;
    info.appendChild(entry);
}

window.onkeydown = (event) => {
    let key = event.key;
    if (key == " ") { key = "Space" }
    
    const entry = document.createElement("li");
    entry.innerHTML = key;
    keyHistory.insertBefore(entry, keyHistory.firstChild);
}

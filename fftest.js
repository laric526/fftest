const keyHistory = document.getElementById("key-history");

window.onkeydown = (event) => {
    let key = event.key;
    if (key == " ") { key = "space" }
    
    const entry = document.createElement("li");
    entry.innerHTML = key;
    keyHistory.insertBefore(entry, keyHistory.firstChild);
}
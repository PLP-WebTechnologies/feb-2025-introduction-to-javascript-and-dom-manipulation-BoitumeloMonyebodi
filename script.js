// Change text content
document.getElementById("changeTextBtn").addEventListener("click", () => {
    const title = document.getElementById("main-title");
    const desc = document.getElementById("description");

    title.textContent = "You've Clicked the Button!";
    desc.textContent = "The content has changed dynamically.";

    //Modify CSS styles via JavaScript
    title.style.color = "blue";
    desc.style.fontStyle = "italic";
});

// Add or remove an element
document.getElementById("toggleElementBtn").addEventListener("click", () => {
    const container = document.getElementById("boxContainer");
    const existingBox = document.getElementById("dyanamicBox");

    if (existingBox) {
        container.removeChild(existingBox);
    } else {
        const newBox = document.createElement("div");
        newBox.id = "dyanamicBox";
        newBox.style.border = "2px solid black";
        newBox.textContent = "This is a dynamically added box!";
        newBox.style.padding = "10px";
        newBox.style.marginTop = "10px";
        container.appendChild(newBox);
    }
});
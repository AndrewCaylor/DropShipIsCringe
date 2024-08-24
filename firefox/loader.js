// get image link

let image = document.getElementById("main-image-container");
// get the image element from the image container
const images = image.querySelectorAll("img");


let imageLink="none";
for (let image of images) {
  if (image.src.endsWith(".jpg")) {
    imagelink = image.src;
    break;
  }
}

const title = document.getElementById("titleSection");

// create another div and overlay it on the item
let overlay = document.createElement("iframe");
overlay.src = browser.runtime.getURL("button.html") + "?url=" + encodeURIComponent(imagelink);
overlay.style.position = "absolute";
overlay.style.top = "-20px";
overlay.style.right = "-20px";
overlay.style.height = "3em";
overlay.style.width = "3em";
overlay.style.border = "none";

// top left of the parent div


title.appendChild(overlay);
title.style.position = "relative";

function getLink() {
  const image = getImage();

  if (!image) {
    console.log("DropShipIsCringe - Can't find a jpg!");
    return;
  }

  return image.src;
}

function getImage() {
    const box = document.getElementById("main-image-container");

    if (!box) {
      console.log("DropShipIsCringe - No image found!");
      return;
    }
  
    const items = box.querySelectorAll("li");  
    for (let item of items) {
      if (item.checkVisibility() && item.classList.contains("item")) {
        const images = item.querySelectorAll("img");
        
        for (let image of images) {
          if (image.src.endsWith(".jpg")) {
            return image;
          }
        }
      }
    }
}

function createOverlay() {
    console.log("DropShipIsCringe - Creating overlay...");
    // Create iframe for the button
    const overlay = document.createElement("iframe");
    overlay.style.position = "absolute";
    overlay.style.top = "0em";
    overlay.style.right = "0em";
    overlay.style.height = "3em";
    overlay.style.width = "3em";
    overlay.style.border = "none";
    overlay.allow = "clipboard-write";

    const imageLink = getLink();
    overlay.src = chrome.runtime.getURL("button.html") + "?url=" + encodeURIComponent(imageLink);

    // Append the iframe to the title section
    const price = document.getElementById("corePriceDisplay_desktop_feature_div");
    price.style.position = "relative";
    price.appendChild(overlay);

    overlay.addEventListener("mouseover", function(event) {
      const imageLink = getLink();
      overlay.src = chrome.runtime.getURL("button.html") + "?url=" + encodeURIComponent(imageLink);
    });

    return overlay;
}

createOverlay();


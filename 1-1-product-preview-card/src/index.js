import mobileImg from "./assets/image-product-mobile.jpg";
import desktopImg from "./assets/image-product-desktop.jpg";

const parfumImg = document.getElementById("parfum");
window.addEventListener("resize", () => {
  if (window.matchMedia("(max-width: 724px)").matches) {
    parfumImg.src = mobileImg;
  } else {
    parfumImg.src = desktopImg;
  }
});

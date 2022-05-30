// DOM
const menuIcon = document.querySelector("#menu-icon");
const menu = document.querySelector("#menu");
const dauicon = document.querySelector("#dau-icon");
const daux = document.querySelector("#dau-x");
const images = [
  "./images/lambanner-thiet-ke-banner-html5.jpg",
  "./images/anh6.png",
  "./images/anh11.png",
  "./images/anh12.png"
];
let i = 0;
const anh = document.querySelector("#anh");
function slide() {
  if (i < images.length - 1) {
    i++;
    anh.src = images[i];
  } else {
    i = 0;
    anh.src = images[i];
  }
}
setInterval(function () {
  slide();
}, 2000);
// Event
let isOpen = true;
menuIcon.addEventListener("click", function () {
  menu.classList.toggle("hidden");
  dauicon.classList.toggle("hidden");
  daux.classList.toggle("hidden");
});

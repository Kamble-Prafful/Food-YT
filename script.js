let menuBar = document.querySelector("#menu-bar");
let navBar = document.querySelector(".navbar");

menuBar.addEventListener("click", function () {
  menuBar.classList.toggle("fa-times");
  navBar.classList.toggle("active");
});

window.onscroll = () => {
  menuBar.classList.remove("fa-times");
  navBar.classList.remove("active");
};

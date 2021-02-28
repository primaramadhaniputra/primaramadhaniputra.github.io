// js for navbars

const navbar = document.querySelector(".navbar");
window.addEventListener("load", function () {
  setTimeout(() => {
    navbar.style.opacity = 1;
  }, 300);
});

const allLink = document.querySelectorAll(".nav-link");
const allLinks = [...allLink];

allLinks.map((link, index) => {
  link.addEventListener("click", function () {
    for (let i = 0; i < allLinks.length; i++) {
      if (allLinks[i].classList.contains("active")) {
        allLinks[i].classList.remove("active");
      }
    }
    link.classList.add("active");
  });
});

// end js for navbar

// javascript for hero section

const img = document.querySelector(".rounded-circle");
const p1 = document.querySelector(".fs-3");
const p2 = document.querySelector(".fs-5");
window.addEventListener("load", function () {
  setTimeout(() => {
    img.style.transform = "translateY(0)";
    img.style.opacity = "1";
    p1.style.transform = "translateX(0)";
    p1.style.opacity = "1";
    p2.style.transform = "translateX(0)";
    p2.style.opacity = "1";
  }, 300);
});
// end js for hero section

// js for about

const first = document.querySelector(".first-about");
const second = document.querySelector(".second-about");
// console.log(window.pageYOffset);

window.addEventListener("scroll", function () {
  if (window.pageYOffset >= 250) {
    first.style.opacity = "1";
    first.style.transform = "translateX(0)";
    second.style.opacity = "1";
    second.style.transform = "translateX(0)";
  }
});
// end js for about

// js for My Projects

const images = document.querySelectorAll(".card");
const allImage = [...images];
allImage.map((image) => {
  window.addEventListener("scroll", function () {
    if (window.pageYOffset >= 800) {
      image.style.opacity = "1";
      image.style.transform = "translateX(0)";
    }
  });
});

// end js for My Projects

// javascript for modal
let modal = document.querySelector(".img-modal");
const allImgModal = document.querySelectorAll(".img-for-modal");
const imgModal = [...allImgModal];
imgModal.map((e) => {
  e.addEventListener("click", function () {
    modal.src = e.src;
  });
});

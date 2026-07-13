// for the nav bar
const btt = document.querySelector(".nav-btn");
btt.addEventListener("click", shownav);

function shownav() {
  document.querySelector(".nav-links").classList.toggle("shownav");
}
//nav bar ends here
const close_btn = document.querySelector(".close");
close_btn.addEventListener("click", function () {
  document.querySelector(".nav-links").classList.remove("shownav");
});

//setting the background image of the landing page

//
//////// common illness section posible solution text ///////////////
let p_solution = document.querySelectorAll(".text-solution");
let Dlinks = ["#"];
function hideText() {
  p_solution.forEach(function (item) {
    item.innerHTML = ` <span class="text-link"><a href="${Dlinks}">read possible solution here</a></span>`;
  });
}
window.addEventListener("load", function () {
  if (window.screen.width < 321 + "px") {
    hideText();
  }
});
// const main = document.querySelector(".screen");
// console.log(main);

// main.innerHTML = window.innerWidth;

// ////////// common illness section posible solution text //////////////
//
// // ===============ABOUT US ============//
// const info_article = document.querySelector(".info-article");
// const buttons = document.querySelectorAll(".tab-btn");
// const content = document.querySelectorAll(".content");
// const image_single = document.querySelectorAll(".image-single");
// //

// info_article.addEventListener("click", function (e) {
//   const id = e.target.dataset.id;
//   const imgId = id + "Img";
//   console.log(imgId);

//   if (id) {
//     buttons.forEach(function (btn) {
//       btn.classList.remove("active");
//       e.target.classList.add("active");
//     });
//     content.forEach(function (content) {
//       content.classList.remove("active");
//     });
//     image_single.forEach(function (single_img) {
//       single_img.classList.remove("active");
//       if (imgId === single_img.dataset.img) {
//         single_img.classList.add("active");
//       }
//     });
//     // adding the text
//     const elements = document.getElementById(id);
//     elements.classList.add("active");
//     //=========this line is not needed if you use IF statement when running a for Each method on the images ======================
//     // const mage = document.getElementById(imgId);
//     // mage.classList.add("active");
//   }
// });
// //

//
//
// // ===============APPOINTMENT BOOKING FORM================
// const appointment_Form = document.querySelector(".appointment-form");
// console.log(appointment_form);

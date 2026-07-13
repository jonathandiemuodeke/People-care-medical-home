// ===============ABOUT US ============//
const info_article = document.querySelector(".info-article");
const buttons = document.querySelectorAll(".tab-btn");
const content = document.querySelectorAll(".content");
const image_single = document.querySelectorAll(".image-single");
//

info_article.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  const imgId = id + "Img";
  console.log(imgId);

  if (id) {
    buttons.forEach(function (btn) {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });
    content.forEach(function (content) {
      content.classList.remove("active");
    });
    image_single.forEach(function (single_img) {
      single_img.classList.remove("active");
      if (imgId === single_img.dataset.img) {
        single_img.classList.add("active");
      }
    });
    // adding the text
    const elements = document.getElementById(id);
    elements.classList.add("active");
    //=========this line is not needed if you use IF statement when running a for Each method on the images ======================
    // const mage = document.getElementById(imgId);
    // mage.classList.add("active");
  }
});
//

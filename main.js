
// MOBILE HEADER START 
// open and close mobile nav bar
const targetDiv = document.getElementById("mobileSideNav");

const dropDownBtn = document.getElementById("dropdown-button");
const dropDownBtn1 = document.getElementById("dropdown-button1");
dropDownBtn.onclick = function myFunction() {
  if (targetDiv.style.opacity !== "0") {
    targetDiv.style.opacity = "0";
    dropDownBtn1.style.opacity = "0";
    dropDownBtn1.style.display = "none";
  } else {
    targetDiv.style.opacity = "1";
    dropDownBtn1.style.opacity = "1";
    dropDownBtn1.style.display = "block";
  }
};

// UL open and close 

$('li.mobile-buiucani').click(function () {
  $(this).find('ul').toggle();
  $(this).siblings('li').find('ul').hide();
});

$(' li.mobile-ciocana').click(function () {
  $("html, body").animate({
      scrollTop: 0
  }, "fast");
  $(this).find('ul').toggle();
  $(this).siblings('li').find('ul').hide();
});
$('li.mobile-postaveche').click(function () {
  $("html, body").animate({
      scrollTop: 0
  }, "fast");
  $(this).find('ul').toggle();
  $(this).siblings('li').find('ul').hide();
});
$('li.mobile-botanica').click(function () {
  $("html, body").animate({
      scrollTop: 0
  }, "fast");
  $(this).find('ul').toggle();
  $(this).siblings('li').find('ul').hide();
});
$('li.mobile-cricova').click(function () {
  $("html, body").animate({
      scrollTop: 0
  }, "fast");
  $(this).find('ul').toggle();
  $(this).siblings('li').find('ul').hide();
});
$('li.mobile-sculeanca').click(function () {
  $("html, body").animate({
      scrollTop: 0
  }, "fast");
  $(this).find('ul').toggle();
  $(this).siblings('li').find('ul').hide();
});

// MOBILE HEADER END


// carousels buttons 
const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})
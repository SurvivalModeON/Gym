// open and close mobile nav bar
const targetDiv = document.getElementById("mobileSideNav");
const targetDiv2 = document.getElementById("dropdown-button1");

const btn = document.getElementById("dropdown-button");
btn.onclick = function myFunction() {
  if (targetDiv.style.display !== "none") {
    targetDiv.style.display = "none";
    targetDiv2.style.display = "none";
  } else {
    targetDiv.style.display = "block";
    targetDiv2.style.display = "block";
  }
};


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
// This sets the dark mode class to toggle, imitating a fighter aircraft colour scheme
function darkMode() {
    var element = document.body;
    element.classList.toggle("darkMode");
}

// image carousel
const buttonSelect = document.querySelectorAll("[data-carousel-button]");
// function for each button
buttonSelect.forEach(button => {
  //add event listener to next and prev button
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")
    const currentSlide = slides.querySelector("[data-active]")
    let updateIndex = [...slides.children].indexOf(currentSlide) + offset
    if (updateIndex < 0) updateIndex = slides.children.length - 1
    if (updateIndex >= slides.children.length) updateIndex = 0
    slides.children[updateIndex].dataset.active = true
    delete currentSlide.dataset.active
  })
})
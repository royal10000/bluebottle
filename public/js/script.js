const hero_index = document.querySelectorAll(".index-n");
const hero_track = document.querySelector(".hero-box");
// const slides = document.querySelectorAll(".inner-box");
const left_indicator = document.querySelector(".hero-left");
const right_indicator = document.querySelector(".hero-right");

hero_index.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    hero_track.style.transform = `translateX(-${index * 100}%)`;
  });
});
let slides=hero_track.children.length
let currentIndex = 0;

function updateCarousel() {
  hero_track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

left_indicator.addEventListener("click", () => {
    currentIndex++;
  if (currentIndex >= slides) currentIndex = 0; // loop back
  updateCarousel();
});

right_indicator.addEventListener("click", () => {
  currentIndex--;

  if (currentIndex < 0) currentIndex = slides - 1; // loop to last
  updateCarousel();
});

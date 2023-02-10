const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const leftBtn = document.querySelector(".left-arrow");
const rightBtn = document.querySelector(".right-arrow");
let curSlide = 1;

slider.addEventListener("click", function (e) {
  if (e.target.classList.contains("left-arrow")) {
    prevSlide();
  }
  if (e.target.classList.contains("right-arrow")) {
    nextSlide();
  }
});

const goToSlide = (slideNumber) => {
  slides.forEach((s, i) => {
    if (i == curSlide) {
      s.style.transform = `translateX(${100 * (i - slideNumber)}%) scale(1.2)`;
    } else {
      s.style.transform = `translateX(${100 * (i - slideNumber)}%) `;
    }
  });
};
const nextSlide = () => {
  slides[curSlide].classList.remove("current-slide");
  slides[curSlide].classList.add("prev-slide");
  if (curSlide === slides.length - 1) {
    rightBtn.disabled = true;
  } else {
    curSlide++;
  }
  slides[curSlide].classList.add("current-slide");
  slides[curSlide].classList.remove("next-slide");
  slides[curSlide].classList.remove("prev-slide");
  goToSlide(curSlide);
  console.log(curSlide);
};
const prevSlide = () => {
  slides[curSlide].classList.remove("current-slide");
  slides[curSlide].classList.add("next-slide");
  if (curSlide === 0) {
    leftBtn.disabled = true;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
  slides[curSlide].classList.add("current-slide");
  slides[curSlide].classList.remove("prev-slide");
  slides[curSlide].classList.remove("next-slide");
};
goToSlide(1);
let interval = setInterval(() => {
  nextSlide();
}, 5000);

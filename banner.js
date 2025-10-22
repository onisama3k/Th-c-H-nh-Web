let index = 0;
const slides = document.querySelectorAll('.banner-side');
const dots = document.querySelectorAll('.dot');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
let timer = setInterval(autoSlide, 5000); // Tự động đổi sau 5 giây

function showSlide(i) {
  slides.forEach((slide, idx) => {
    slide.classList.toggle('active', idx === i);
    dots[idx].classList.toggle('active', idx === i);
  });
}

function autoSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

next.addEventListener('click', () => {
  clearInterval(timer);
  index = (index + 1) % slides.length;
  showSlide(index);
  timer = setInterval(autoSlide, 5000);
});

prev.addEventListener('click', () => {
  clearInterval(timer);
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
  timer = setInterval(autoSlide, 5000);
});

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    clearInterval(timer);
    index = i;
    showSlide(index);
    timer = setInterval(autoSlide, 5000);
  });
});

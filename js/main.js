document.addEventListener('DOMContentLoaded', () => {
  const track = document.getElementById('today-main');
  const slides = document.querySelectorAll('.product-card');
  const nextButton = document.getElementById('next');
  const prevButton = document.getElementById('prev');

  let currentIndex = 0;
  const slideWidth = slides[0].offsetWidth + 50; // kartaning width + gap

  nextButton.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
      currentIndex++;
      track.scrollLeft = slideWidth * currentIndex;
    }
  });

  prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      track.scrollLeft = slideWidth * currentIndex;
    }
  });
});






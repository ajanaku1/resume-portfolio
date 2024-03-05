document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  let currentIndex = 0;

  function showImage(index) {
    carousel.style.transform = `translateX(${-index * 100}%)`;
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % carousel.children.length;
    showImage(currentIndex);
  }

  showImage(currentIndex);

  setInterval(nextImage, 3000);
});

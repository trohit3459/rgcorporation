let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

function plusSlides(n) {
  slideIndex += n;
  let slides = document.getElementsByClassName("slide");
  if (slideIndex > slides.length) { slideIndex = 1 }
  if (slideIndex < 1) { slideIndex = slides.length }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

function redirectToPhoto() {
  let slides = document.getElementsByClassName("slide");
  let currentSlide = slides[slideIndex - 1];
  let url = currentSlide.querySelector("img").getAttribute("data-url");
  window.location.href = url;
}

const seeMore = document.querySelector('.see-more');
const slideshowContainer = document.querySelector('.slideshow-container');

slideshowContainer.addEventListener('mouseenter', () => {
  seeMore.style.opacity = 1;
  seeMore.style.transform = 'translate(-50%, -50%) scale(1.1)';
});

slideshowContainer.addEventListener('mouseleave', () => {
  seeMore.style.opacity = 0;
  seeMore.style.transform = 'translate(-50%, -50%) scale(1)';
});


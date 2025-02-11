document.addEventListener('DOMContentLoaded', function() {
  const heartIcons = document.querySelectorAll('.bx-heart');

  heartIcons.forEach(icon => {
      icon.addEventListener('click', function() {
          this.classList.toggle('clicked');
      });
  });
});


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


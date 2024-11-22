// Select the carousel container
const carousel = document.querySelector('.carousel');

// Pause animation on hover
carousel.addEventListener('mouseover', () => {
  carousel.style.animationPlayState = 'paused';
});

// Resume animation on mouse leave
carousel.addEventListener('mouseout', () => {
  carousel.style.animationPlayState = 'running';
});


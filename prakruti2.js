const fadeInElements = document.querySelectorAll('.fade-in');

function checkFadeIn() {
  fadeInElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;
    const animationDelay = element.getAttribute('data-delay');

    if (elementTop < window.innerHeight && elementBottom > 0) {
      setTimeout(() => {
        element.classList.add('active');
      }, animationDelay ? parseInt(animationDelay) * 1000 : 0);
    } else {
      element.classList.remove('active');
    }
  });
}

window.addEventListener('load', checkFadeIn);
window.addEventListener('scroll', checkFadeIn);
window.addEventListener('resize', checkFadeIn);
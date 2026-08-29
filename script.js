document.addEventListener('DOMContentLoaded', () => {
  const yearElement = document.getElementById('year');
  const backToTop = document.getElementById('backToTop');

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Smooth scroll for internal anchors
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.pushState(null, '', link.getAttribute('href'));
      }
    });
  });

  // Back to top visibility and action
  const toggleBackToTop = () => {
    if (!backToTop) return;
    if (window.scrollY > 300) backToTop.classList.add('show');
    else backToTop.classList.remove('show');
  };

  window.addEventListener('scroll', toggleBackToTop);
  toggleBackToTop();

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});

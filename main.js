const navToggle = document.querySelector('[aria-controls="primary-nav"]');
const primaryNav = document.querySelector('#primary-nav');

navToggle.addEventListener('click', () => {
  const navOpned = navToggle.getAttribute('aria-expanded');
  if (navOpned === 'false') {
    navToggle.setAttribute('aria-expanded', 'true');
  } else {
    navToggle.setAttribute('aria-expanded', 'false');
  }
});

const resizeObserver = new ResizeObserver(() => {
  document.body.classList.add('resizing');

  requestAnimationFrame(() => {
    document.body.classList.remove('resizing');
  });
});

resizeObserver.observe(document.body);

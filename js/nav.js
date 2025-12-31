document.addEventListener('DOMContentLoaded', function() {
  const btn = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (!btn || !navLinks) return;

  btn.addEventListener('click', function() {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    navLinks.classList.toggle('open');
  });
});

const nav = document.getElementById('siteNav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });
}

function openMenu() {
  document.getElementById('mobileNav').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  document.getElementById('mobileNav').classList.remove('open');
  document.body.style.overflow = '';
}

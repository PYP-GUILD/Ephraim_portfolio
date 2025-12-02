// Accessible mobile navigation toggle
document.addEventListener('DOMContentLoaded', function () {
  const toggles = document.querySelectorAll('.nav-toggle');
  toggles.forEach(btn => {
    const nav = document.getElementById(btn.getAttribute('aria-controls'));
    btn.addEventListener('click', () => {
      const isOpen = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!isOpen));
      if (nav) nav.dataset.open = String(!isOpen);
    });

    // close on escape when open
    document.addEventListener('keyup', (e) => {
      if (e.key === 'Escape') {
        btn.setAttribute('aria-expanded', 'false');
        if (nav) nav.dataset.open = 'false';
      }
    });
  });
});

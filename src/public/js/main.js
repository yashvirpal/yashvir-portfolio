/* ── Custom Cursor ──────────────────────────────────────────────── */
const cur  = document.getElementById('cur');
const ring = document.getElementById('ring');
const spot = document.getElementById('spotlight');

if (cur && ring) {
  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    cur.style.left = mx - 6 + 'px';
    cur.style.top  = my - 6 + 'px';
    if (spot) {
      spot.style.setProperty('--mx', mx + 'px');
      spot.style.setProperty('--my', my + 'px');
    }
  });

  (function animRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx - 20 + 'px';
    ring.style.top  = ry - 20 + 'px';
    requestAnimationFrame(animRing);
  })();

  /* Enlarge cursor on interactive elements */
  const interactives = document.querySelectorAll(
    'a, button, .exp-item, .project-card, .skill-card, .btn'
  );

  interactives.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cur.style.transform  = 'scale(2)';
      ring.style.transform = 'scale(1.5)';
      ring.style.opacity   = '0.2';
    });
    el.addEventListener('mouseleave', () => {
      cur.style.transform  = 'scale(1)';
      ring.style.transform = 'scale(1)';
      ring.style.opacity   = '0.4';
    });
  });
}

/* ── Active nav on scroll (home page only) ──────────────────────── */
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('nav .nav-item');

if (sections.length && navLinks.length) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(n => n.classList.remove('active'));
        const match = document.querySelector(
          `nav .nav-item[href="/#${entry.target.id}"]`
        ) || document.querySelector(
          `nav .nav-item[href="#${entry.target.id}"]`
        );
        if (match) match.classList.add('active');
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => observer.observe(s));
}

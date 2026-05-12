/* ============================================================
   Monsa Media — main.js
   - sticky header scroll state
   - mobile nav toggle
   - reveal-on-scroll via IntersectionObserver
   - smooth in-page anchors with header offset
   - footer year stamp
   - prefers-reduced-motion respected
   ============================================================ */

(function () {
  'use strict';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* -------- header scroll state -------- */
  const header = document.getElementById('siteHeader');
  if (header) {
    const setScrolled = () => {
      header.classList.toggle('scrolled', window.scrollY > 12);
    };
    setScrolled();
    window.addEventListener('scroll', setScrolled, { passive: true });
  }

  /* -------- mobile nav toggle -------- */
  const navToggle = document.querySelector('.nav-toggle');
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      const open = document.body.classList.toggle('nav-open');
      navToggle.setAttribute('aria-expanded', String(open));
    });
    // close on any link tap inside the panel
    document.querySelectorAll('.mobile-panel a').forEach((a) => {
      a.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
    // close on resize back to desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth > 980) {
        document.body.classList.remove('nav-open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* -------- reveal-on-scroll -------- */
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    if (reduceMotion || !('IntersectionObserver' in window)) {
      reveals.forEach((el) => el.classList.add('in'));
    } else {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in');
              io.unobserve(entry.target);
            }
          });
        },
        { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
      );
      reveals.forEach((el) => io.observe(el));
    }
  }

  /* -------- year stamp -------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* -------- in-page anchor offset (header height) -------- */
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const offset = (header ? header.offsetHeight : 0) + 8;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: reduceMotion ? 'auto' : 'smooth' });
    });
  });

  /* -------- pause hero Ken Burns when tab is hidden (saves CPU) -------- */
  document.addEventListener('visibilitychange', () => {
    document.querySelectorAll('.hero-slide, .hero-dot::after, .marquee-track').forEach((el) => {
      el.style.animationPlayState = document.hidden ? 'paused' : 'running';
    });
  });

  /* -------- subtle parallax-free hero text shift on mouse (desktop only, off when reduced motion) -------- */
  if (!reduceMotion && window.matchMedia('(pointer: fine)').matches) {
    const heroText = document.querySelector('.hero-text');
    const hero = document.querySelector('.hero');
    if (heroText && hero) {
      let raf = null;
      hero.addEventListener('mousemove', (e) => {
        if (raf) return;
        raf = requestAnimationFrame(() => {
          const rect = hero.getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width - 0.5;
          const y = (e.clientY - rect.top) / rect.height - 0.5;
          heroText.style.transform = `translate(${x * -6}px, ${y * -4}px)`;
          raf = null;
        });
      });
      hero.addEventListener('mouseleave', () => {
        heroText.style.transform = '';
      });
    }
  }
})();

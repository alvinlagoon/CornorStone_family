// Shared navigation — CornerStone Family Church
(function () {
  var pages = [
    { href: 'index.html',    label: 'Home' },
    { href: 'services.html', label: 'Services' },
    { href: 'mission.html',  label: 'Missions' },
    { href: 'contact.html',  label: 'Contact' },
    { href: 'give.html',     label: 'Give' }
  ];

  var current = window.location.pathname.split('/').pop() || 'index.html';

  var items = pages.map(function (p) {
    var active = (current === p.href || (current === '' && p.href === 'index.html')) ? ' class="active"' : '';
    return '<li><a href="' + p.href + '"' + active + '>' + p.label + '</a></li>';
  }).join('');

  // SVG icons inline — no external deps
  var ytIcon  = '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z"/></svg>';
  var fbIcon  = '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.88v2.27h3.32l-.53 3.49h-2.79V24C19.61 23.1 24 18.1 24 12.07z"/></svg>';
  var igIcon  = '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85 0 3.2-.01 3.58-.07 4.85-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07-3.2 0-3.58-.01-4.85-.07-3.26-.15-4.77-1.7-4.92-4.92C2.17 15.58 2.16 15.2 2.16 12c0-3.2.01-3.58.07-4.85C2.38 3.86 3.9 2.31 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.7.07 7.05.01 8.33 0 8.74 0 12c0 3.26.01 3.67.07 4.95.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24c3.26 0 3.67-.01 4.95-.07 4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95 0-3.26-.01-3.67-.07-4.95C23.73 2.71 21.3.27 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32A6.16 6.16 0 0 0 12 5.84zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg>';

  var navHTML =
    '<nav class="site-nav" id="site-nav">' +
      '<div class="nav-inner">' +
        '<button class="nav-toggle" id="nav-toggle" aria-label="Toggle navigation" aria-expanded="false">' +
          '<span></span><span></span><span></span>' +
        '</button>' +
        '<ul class="nav-links" id="nav-list">' + items + '</ul>' +
        '<div class="nav-socials">' +
          '<a href="https://www.youtube.com/@CORNERSTONEFAMILYSILIGURI" target="_blank" rel="noopener" aria-label="YouTube" class="nav-social-link">' + ytIcon + '<span>YouTube</span></a>' +
          '<a href="https://www.facebook.com/profile.php?id=61554645342227" target="_blank" rel="noopener" aria-label="Facebook" class="nav-social-link">' + fbIcon + '<span>Facebook</span></a>' +
          '<a href="https://www.instagram.com/cornerstone_family_siliguri/" target="_blank" rel="noopener" aria-label="Instagram" class="nav-social-link">' + igIcon + '<span>Instagram</span></a>' +
        '</div>' +
      '</div>' +
    '</nav>';

  var header = document.querySelector('.site-header');
  if (header && !document.querySelector('.site-nav')) {
    header.insertAdjacentHTML('afterend', navHTML);
  }

  // Hamburger toggle
  document.addEventListener('click', function (e) {
    var btn  = document.getElementById('nav-toggle');
    var list = document.getElementById('nav-list');
    if (!btn || !list) return;
    if (e.target.closest('#nav-toggle')) {
      var open = list.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
    } else if (list.classList.contains('open') && !e.target.closest('#site-nav')) {
      list.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });

  // Scroll reveal
  function revealOnScroll() {
    document.querySelectorAll('.fade-up:not(.visible)').forEach(function (el) {
      var rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) el.classList.add('visible');
    });
  }

  // Stagger children
  document.querySelectorAll('[data-stagger]').forEach(function (parent) {
    parent.querySelectorAll('.fade-up').forEach(function (child, i) {
      child.style.transitionDelay = (i * 0.09) + 's';
    });
  });

  window.addEventListener('scroll', revealOnScroll, { passive: true });
  revealOnScroll();
})();
// ===== VVault site interactions =====
(function () {
  // Year in footer
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Navbar: solid on scroll
  var nav = document.getElementById('nav');
  var onScroll = function () {
    if (window.scrollY > 12) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu toggle
  var menu = document.getElementById('navMenu');
  if (menu) {
    menu.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      menu.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.querySelectorAll('.nav__links a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('open');
        menu.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Scroll reveal
  var revealTargets = document.querySelectorAll(
    '.step, .feat, .usp, .security__copy, .security__art, .dl-card, .faq details, .section__head'
  );
  revealTargets.forEach(function (el) { el.classList.add('reveal'); });
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    revealTargets.forEach(function (el) { io.observe(el); });
  } else {
    revealTargets.forEach(function (el) { el.classList.add('in'); });
  }

  // QR codes — render with qrcodejs if available, else fall back to an image API
  function buildQR(el) {
    var url = el.getAttribute('data-url');
    if (!url) return;
    try {
      if (window.QRCode) {
        new window.QRCode(el, {
          text: url, width: 150, height: 150,
          colorDark: '#070D0A', colorLight: '#ffffff',
          correctLevel: window.QRCode.CorrectLevel.M
        });
        return;
      }
    } catch (e) { /* fall through */ }
    var img = new Image();
    img.alt = 'QR code to download';
    img.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + encodeURIComponent(url);
    el.appendChild(img);
  }
  document.querySelectorAll('.qr').forEach(buildQR);
})();

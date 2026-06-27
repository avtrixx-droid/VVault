// ===== Google Analytics 4 (gtag.js) =====
// 1. Create a GA4 property at https://analytics.google.com → Admin → Data Streams → Web.
// 2. Copy your Measurement ID (looks like "G-XXXXXXXXXX").
// 3. Replace the value below. That's the only edit needed — every page loads this file.
var GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';

// Don't load analytics until a real ID is set (keeps localhost/dev clean).
if (GA_MEASUREMENT_ID && GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_MEASUREMENT_ID;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { dataLayer.push(arguments); };
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID, { anonymize_ip: true });
}

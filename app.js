/* Super vs Gemini – subtle motion and guards */

(function() {
  function safeGSAP(fn) {
    try {
      if (window.gsap) fn();
    } catch (e) {}
  }

  safeGSAP(function() {
    gsap.from('.hero h1', { y: 40, opacity: 0, duration: 1, ease: 'power3.out' });
    gsap.from('.hero-sub', { y: 20, opacity: 0, duration: 1, delay: 0.2 });
  });
})();
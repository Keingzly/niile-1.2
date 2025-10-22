document.addEventListener('DOMContentLoaded', function () {
  const loader = document.getElementById('loading-overlay');

  // Hide loader on page load
  window.addEventListener('load', function () {
    if (loader) {
      // Use a fade-out effect
      loader.style.opacity = '0';
      // Hide it after the transition
      setTimeout(() => {
        loader.style.display = 'none';
      }, 300); // Match transition duration
    }
  });

  // Show loader on navigation
  const links = document.querySelectorAll('a[href]');
  links.forEach(link => {
    link.addEventListener('click', function (e) {
      if (loader && this.href.startsWith(window.location.origin) && this.target !== '_blank' && !this.href.includes('#')) {
        loader.style.display = 'flex';
        setTimeout(() => loader.style.opacity = '1', 10); // Slight delay to ensure display is set before opacity transition
      }
    });
  });
});
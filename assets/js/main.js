/* Navbar Scroll */
document.addEventListener('DOMContentLoaded', function () {
  el_autohide = document.querySelector('.autohide');

  navbar_height = document.querySelector('.navbar').offsetHeight;
  document.body.style.paddingTop = navbar_height + 'px';

  if (el_autohide) {
    var last_scroll_top = 0;
    window.addEventListener('scroll', function () {
      let scroll_top = window.scrollY;
      if (scroll_top < last_scroll_top) {
        el_autohide.classList.remove('scrolled-down');
        el_autohide.classList.add('scrolled-up');
      } else {
        el_autohide.classList.remove('scrolled-up');
        el_autohide.classList.add('scrolled-down');
      }
      last_scroll_top = scroll_top;
    });
  }
});
/* Navbar Scroll End */

/* Dark Mode Toggle */

// Check OS Color Scheme Preference
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

if (prefersDarkScheme.matches) {
  document.body.classList.add('dark');
} else {
  document.body.classList.remove('dark');
}

document.getElementById('lightSwitch').addEventListener('click', () => {
  if (document.body.classList.contains('dark')) {
    document.body.classList.remove('dark');
  } else {
    document.body.classList.add('dark');
  }
});
/* Dark Mode Toggle End */

/* Hamburger Animation */
$(document).ready(function () {
  $('.second-button').on('click', function () {
    $('.animated-hamburger').toggleClass('open');
  });
});
/* Hamburger Animation End */

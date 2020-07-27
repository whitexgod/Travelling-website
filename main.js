
const navSlide = function() {

  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
  //toggle nav
  burger.addEventListener('click', function() {
    nav.classList.toggle('nav-active');

    navLinks.forEach((link, index) => {
      if (link.style.animation){
        link.style.animation='';
      }
      else{
        link.style.animation = `change 0.3s ease forwards ${index / 7 + 1}s`;
      }
    });
    burger.classList.toggle('toggle');
  });
};

navSlide();


window.sr = ScrollReveal();

sr.reveal('.animate-left', {
  origin : 'left',
  duration : 1000,
  distance: '25rem',
  delay:300
})

sr.reveal('.animate-right', {
  origin : 'right',
  duration : 1000,
  distance: '25rem',
  delay:300
})

sr.reveal('.animate-top', {
  origin : 'top',
  duration : 1000,
  distance: '25rem',
  delay:450
})

sr.reveal('.animate-bottom', {
  origin : 'bottom',
  duration : 1000,
  distance: '25rem',
  delay:300
})

$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});


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

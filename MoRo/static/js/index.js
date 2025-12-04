window.HELP_IMPROVE_VIDEOJS = false;

$(document).ready(function() {
  // Navbar burger toggle for mobile
  $(".navbar-burger").click(function() {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });

  // Carousel options
  var options = {
    slidesToScroll: 1,
    slidesToShow: 3,
    loop: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 3000,
  };

  // Initialize all carousels
  var carousels = bulmaCarousel.attach('.carousel', options);

  // Example event listener
  for (var i = 0; i < carousels.length; i++) {
    carousels[i].on('before:show', state => {
      console.log(state);
    });
  }

  // Access a specific bulmaCarousel instance if present
  var element = document.querySelector('#my-element');
  if (element && element.bulmaCarousel) {
    element.bulmaCarousel.on('before-show', function(state) {
      console.log(state);
    });
  }

  // Initialize Bulma sliders (for any non-interpolation sliders you may have)
  bulmaSlider.attach();
});

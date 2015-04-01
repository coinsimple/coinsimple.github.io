$(function() {

  // Mobile Menu
  $('.head button').click(function() {
    $('.head nav').slideToggle();
  });

  // Buttons
  var spinnerOpts = {
    lines: 13,
    length: 4,
    width: 2,
    radius: 6,
    corners: 1,
    rotate: 0,
    direction: 1,
    color: '#fff',
    speed: 1,
    trail: 60,
    shadow: false,
    hwaccel: true,
    className: 'spinner',
    zIndex: 2e9,
    top: '50%',
    left: '50%',
    hwaccel: true
  };

  $('button:not(".primary-menu")').click(function(e) {
    e.preventDefault();

    // Spinner
    $(this).addClass('active').find('.spinner').remove();
    var target = $(this).find('.spin')[0],
        spinner = new Spinner(spinnerOpts).spin(target);

    // Ripple
    var x = e.pageX,
        y = e.pageY,
        clickY = y - $(this).offset().top,
        clickX = x - $(this).offset().left,
        box = this,
        setX = parseInt(clickX),
        setY = parseInt(clickY);

    $(this).find('svg').remove();
    $(this).append('<svg><circle cx="'+ setX +'" cy="'+ setY +'" r="'+ 0 +'"></circle></svg>');

    var c = $(box).find('circle');
    c.animate(
      {
        'r': $(box).outerWidth() * 1.5
      },
      {
        duration: 500,
          step: function(val) {
            c.attr('r', val);
          }
      }
    );

  });

  // External Links
  // $('a[target="_blank"]').css({
  //   paddingRight: 17,
  //   background: 'url(../img/external-link.svg) right center no-repeat',
  //   marginRight: 2
  // });

  // Trigger Animations
  // $('.headline p').scrollTrigger({
  //   offset: 160,
  //   target: '.svg-solutions'
  // });
  // $('.features .safe').scrollTrigger();
  // $('.features .invoice').scrollTrigger();
  // $('.features .wallet').scrollTrigger();
  // $('.features .analytics').scrollTrigger();
  // $('.secondary-features-wrap').scrollTrigger({
  //   offset: 30,
  //   target: '.secondary-features-wrap > div'
  // });

  // Scroll to In-page Anchors
  // $(function() {
  //   $('a[href*=#]:not([href=#])').click(function() {
  //     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
  //       var target = $(this.hash);
  //       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
  //       if (target.length) {
  //         $('html,body').animate({
  //           scrollTop: target.offset().top
  //         }, 1000);
  //         return false;
  //       }
  //     }
  //   });
  // });

  // Back to Top Links
  // $('.back-to-top').click(function(e) {
  //   e.preventDefault();
  //   $('html, body').animate({
  //     scrollTop: 0
  //   }, 1000);
  // });

});

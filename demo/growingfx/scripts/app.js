/*!
 * Growingfx Scripts
 * Author: bedeute
 * Email: bedeute@gmail.com
 */

(function($) {
  'use strict';

  $(function() {

  });

  $('#navbar-lite').affix({
      offset: {
        top:450
      }
  });

  var cok = 120;

  $('body').scrollspy({
    target: '#nav'

  });

  /* smooth scrolling for nav sections */
  $('#nav .navbar-nav li>a').click(function(){
    var link = $(this).attr('href');
    var posi = $(link).offset().top-140;
    $('body,html').animate({scrollTop:posi},700);
  })

})(jQuery);


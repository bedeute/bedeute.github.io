/*!
 * Growingfx Scripts
 * Author: bedeute
 * Email: bedeute@gmail.com
 */

(function($) {
  'use strict';

  $(function() {

  });

  $('#navbar-light').affix({
      offset: {
        top:450
      }
  });

  $('body').scrollspy({
    target: '#nav',
  });

  $("#nav ul li a[href^='#']").on('click', function(e) {

   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').animate({
       scrollTop: $(hash).offset().top-120
     }, 300, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });

  });

})(jQuery);


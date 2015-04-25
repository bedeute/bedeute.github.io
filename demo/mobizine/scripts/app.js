/*!
 * Mobizine Scripts
 * Author: bedeute
 * Email: bedeute@gmail.com
 */

(function($) {
  'use strict';

  $(function() {
    $('.navbar-toggle').click(function (e) {
      e.preventDefault();
      $('.mini-toc').toggleClass('hide show');
      $('header.header').toggleClass('navbar-fixed-top');
    });
  });

})(jQuery);

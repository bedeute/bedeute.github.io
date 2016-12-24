/*!
 * Mobizine Scripts
 * Author: bedeute
 * Email: bedeute@gmail.com
 */

(function($) {
  'use strict';

  // $(function() {
  //   $('.navbar-toggle').click(function (e) {
  //     e.preventDefault();
  //     $('.mini-toc').toggleClass('hide show');
  //     $('header.header').toggleClass('navbar-fixed-top');
  //   });
  // });

  // $(function() {
  //   $('.navbar-toggle').click(function (e) {
  //     e.preventDefault();
  //     $('.slidebar').toggleClass('shrink reveal');
  //   });
  // });

  $(function() {

    if ($('.slidebar').hasClass('shrink')) {
      $('body').css('overflow-x','hidden');
    };

    $('.navbar-toggle').click(function (e) {
      e.preventDefault();
      e.stopPropagation();
      toggleSlidebar();
    });
  });

  $(document).click(function(event) {
    if(!$(event.target).closest('.slidebar').length) {
        if($('.slidebar').hasClass('reveal')) {
            $('.slidebar').removeClass('reveal');
            $('.slidebar').addClass('shrink');
            $('body').removeClass('slidebar-revealed');
        }
    }
})



function toggleSlidebar() {
  var slidebar = $('.slidebar');
  if (slidebar.hasClass('shrink')) {
    $('body').addClass('slidebar-revealed');
    slidebar.removeClass('shrink');
    slidebar.addClass('reveal');
  } else
  if (slidebar.hasClass('reveal')) {
    $('body').removeClass('slidebar-revealed');
    slidebar.removeClass('reveal');
    slidebar.addClass('shrink');
  }
}


})(jQuery);

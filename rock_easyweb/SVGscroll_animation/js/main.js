$(function() {
    var notedPad = $('.notepads');

    $(window).scroll(function() {
            if ($this).scrollTop() > 300) {
            notedPad.addClass('animate');
        } else {
            notedPad.removeClass('animate');
        }
    }





});
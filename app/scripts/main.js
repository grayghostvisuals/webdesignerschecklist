function scrollLink(event) {

    'use strict';

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 300);

    event.preventDefault();
}

// Anchor Scroll
$('.scroll-arrow').on('click', 'a', scrollLink);
$('.scroll-arrow').on('touchstart', 'a', scrollLink);

// Persistent Checkboxes
$('form').garlic();
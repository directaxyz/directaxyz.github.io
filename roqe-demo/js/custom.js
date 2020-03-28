
$(window).on('scroll', function () {
    if ($(window).scrollTop() >= 250) {
        $('nav').removeClass('navbar-hidden')
    } else {
        $('nav').addClass('navbar-hidden');
    }
});
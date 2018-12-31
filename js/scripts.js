$('.navbar-brand').click(function() {
    $('html, body').stop().animate({
        scrollTop: 0
    }, 800);

    $("#navbarSupportedContent").removeClass("show");
});

$("header a[href^='#']").click(function(e) {
    if (this.hasAttribute("external"))
        return;

    e.preventDefault();
    var heading = $(this).attr('href');

    $('html, body').stop().animate({
        scrollTop: $(heading).offset().top - 50 + 'px'
    }, Math.abs(window.pageYOffset - $(heading).offset().top) / 1.5);

    $("#navbarSupportedContent").removeClass("show");
});

$(".external-link").click(function () {
    window.open($(this).attr('href'));
});


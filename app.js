$('.name').click(function (event) {
    event.preventDefault();
    $('body').animate({ scrollTop: 0 }, 'slow');
});

$('.js-more-button').click(function (event) {
    event.preventDefault();
    $('#more').toggleClass('hidden');
    $('.js-more-button').addClass('hidden');
    $('.js-scroll-top').removeClass('hidden');

    $('body,html').animate({ scrollTop: $(document).height() }, 'slow');
})

$('.js-scroll-top').on('click', function (event) {
    event.preventDefault();
    $('body, html').animate({ scrollTop: 0 }, 'slow');
    $('#more').addClass('hidden');
    $('.js-scroll-top').addClass('hidden');
    //Adding setTimeout so that the more button does not show before scroll up
    setTimeout(function () {
        $('.js-more-button').removeClass('hidden');
    }, 1000);
});

var lastScrollTop = 0;
$(window).scroll(function (event) {
    var st = $(this).scrollTop();
    if (st > lastScrollTop) {
        $('.js-header').addClass('showOnScroll');
    }
    lastScrollTop = st;
});

function onPageLoad() {
        $('.name').animate({ left: '30px' }, "fast");
        $('.name').animate({ left: '0px' }, "fast");
        $('.name').animate({ left: '20px' }, "fast");
        $('.name').animate({ left: '0px' }, "fast");
        $('.name').animate({ left: '10px' }, "fast");
        $('.name').animate({ left: '0px' }, "fast");
}

$(onPageLoad);
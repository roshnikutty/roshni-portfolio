$('.name').click(function () {
    event.preventDefault();
    $('body').animate({ scrollTop: 0 }, 'slow');
});


$('.js-more-button').click(function() {
    event.preventDefault();
    $('#more').toggleClass('hidden');
    $('.js-more-button').addClass('hidden');
    $('.js-scroll-top').removeClass('hidden');
    $('body').animate({ scrollTop: $(document).height() }, 'slow');
})

$('.js-scroll-top').on('click', function() {
    event.preventDefault();
    $('body').animate({ scrollTop: 0 }, 'slow');
    $('#more').addClass('hidden');
    $('.js-scroll-top').addClass('hidden');
    //Adding setTimeout so that the more button does not show before scroll up
    setTimeout(function(){
        $('.js-more-button').removeClass('hidden');
     }, 1000);
});

// pagination
$(".pagination li").on("click", function () {
    if ($(".pagination li").hasClass("active")) {
        $(".pagination li").removeClass("active");
        $(this).addClass("active");
    } else {
        $(this).addClass("active");
    }
})

// nav

$('.nav .main-menu > li').on('click', function () {
    $('.sub-menu').not($(this).find('.sub-menu').toggle()).hide();

    if ($('.nav .main-menu > li').hasClass('active')) {
        $('.nav .main-menu > li').removeClass('active');
        $(this).addClass('active');
    } else {
        $(this).addClass('active');
    };

});

$('.nav .sub-menu li').on('click', function () {
    if ($('.nav .sub-menu li').hasClass('active')) {
        $('.nav .sub-menu li').removeClass('active');
        $(this).addClass('active');
    } else {
        $(this).addClass('active');
    }
});


// modal
$('.modal .btn-close').on('click', function () {
    $('.modal').hide();
});

// profile
$('.info-name').on('click', function () {
    $('.profile-box').toggle();
});
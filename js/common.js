$(document).ready(function() {
    $('.main-slider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 568,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.multiple-items').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 568,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });



    $('.main-slider').find('.slick-active').last().addClass('slick-current');
    $(".main-slider").on('afterChange', function() {
        $('.main-slider').find('.slick-active').last().addClass('slick-current');
    });

    $('.multiple-items').find('.slick-active').last().addClass('slick-current');
    $(".multiple-items").on('afterChange', function() {
        $('.multiple-items').find('.slick-active').last().addClass('slick-current');
    });


});

window.onload = function() {
    jQuery("#user-city").text(ymaps.geolocation.city);
}
$(document).ready(function () {

    const hamburger = $('.hamburger-btn');
    const navigation = $('.landing-page nav');
    const landing_page_overlay = $('.landing-page__overlay');

    showNavigation = () => {
        $(navigation).addClass('expanded');
        $(landing_page_overlay).css({
            'opacity': '1',
            'z-index': '2'
        });
    }
    hideNavigation = () => {
        $(navigation).removeClass('expanded');
        $(landing_page_overlay).css({
            'opacity': '0',
            'z-index': '0'
        });
    }

    $(hamburger).on('click', showNavigation);
    $(landing_page_overlay).on('click', hideNavigation);


    const email_input = $('#sendEmail-input');

    check_input_empty = (e) => {
        if ($(email_input).val() == '' || $(email_input).val().length == 0) {
            alert('Input is Empty!')
            e.preventDefault();
        }
    }
    $('form').on('submit', check_input_empty);

    let heartIcon_container = document.querySelectorAll('.image-container span');

    toggle_like_icon = (e) => {
        let mySpan = e.target;
        let mySpan_status = $(mySpan).hasClass('liked');

        if (mySpan_status == false) {
            $(mySpan).addClass('liked');
            $(mySpan).find('img').attr('src', 'image/heart-fill-icon.svg');
        } else {
            $(mySpan).removeClass('liked')
            $(mySpan).find('img').attr('src', 'image/heart-outline-icon.svg')

        }
    }
    $(heartIcon_container).on('click', toggle_like_icon);


    let arrowTop = $('.backToTop-btn');

    arrowTop.on('click', function () {
        window.scrollTo(0, 0);
        // after scrollTo, there will be a "scroll" event, so the arrow will hide automatically
    });

    window.addEventListener('scroll', function () {
        if (pageYOffset >= 400) {
            $(arrowTop).css('opacity', '1');
        } else {
            $(arrowTop).css('opacity', '0');
        }
    });


    let destinations = document.querySelectorAll('.destination');
    let dest_index = 0;
    setInterval(() => {
        $(destinations).eq(dest_index - 1).css('border-color', 'transparent');
        $(destinations).eq(dest_index).css('border-color', '#e76f51');

        if (dest_index == destinations.length - 1) {
            dest_index = -1;
        }
        dest_index++;

    }, 1400);


    $('.landing-page-btn').click(() => {
        window.scrollTo(0, 1000);
    })



    $('.destination').mouseenter(function () {
        $(this).find('.image-container > img').css({ 'transform': 'scale(1.04)', 'cursor': 'pointer' })

    })
    $('.destination').mouseleave(function () {
        $(this).find('.image-container > img').css('transform', 'scale(1)')

    })




});


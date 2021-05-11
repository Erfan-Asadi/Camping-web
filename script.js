$(document).ready(function () {
    // variables
    const hamburger = $('.hamburger-btn'); 
    const navigation = $('.landing-page nav');
    
    const landing_page_overlay = $('.landing-page__overlay');
   
    const email_input = $('#sendEmail-input'); 

    const arrowTop = $('.backToTop-btn');

    // functions 
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

    check_input_empty = (e) => { 
        if ($(email_input).val() == '' || $(email_input).val().length == 0) {
            alert('Input is Empty!')
            e.preventDefault();
        }
    }
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

    function check_email(input) {
        // input should 'input type=email' that  passed to argument

        let email_value = $(input).val();
        const email_pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        email_validation_result = email_pattern.test(email_value);

        if (email_validation_result == false) { // prevent add alert_tag again
            $(input).next('.alert_form_message').remove();
            $(input).after(alert_message('Email is not valid format'));  
            $('.sendEmail-btn').attr('disabled','true')  
        }
        else if (email_validation_result == true) {
            $(input).next('.alert_form_message').remove();
            $('.sendEmail-btn').removeAttr('disabled')  
        }
    }
    // show message bottom of input to alert user, when user 
    function alert_message(alertText) {

        let alert_tag = $(`<span class="alert_form_message">${alertText}</span>`);

        $(alert_tag).css({
            'position': 'absolute',
            'left': '0',
            'bottom': '-26px',
            'font-size': '14px',
            'color': '#dc3545',
            'font-family':'Roboto'
        })
        return alert_tag;
    }

    // enable email checkers on those elements that hav this className
    $(document.body).on('keyup', '.checkable-email', (e) => check_email(e.target));

    // event listeners
    window.addEventListener('scroll', function () { 
        if (pageYOffset >= 400) {
            $(arrowTop).css('opacity', '1');
        } else {
            $(arrowTop).css('opacity', '0');
        }
    });

    $(hamburger).on('click', showNavigation);
    $(landing_page_overlay).on('click', hideNavigation);

    $(document.body).on('click', '.image-container span', toggle_like_icon);

    $('form').on('submit', check_input_empty);

    arrowTop.on('click', function () {
        window.scrollTo(0, 0);
        // after scrollTo, there will be a "scroll" event, so the arrow will hide automatically
    });

    $('.landing-page-btn').on('click', () => window.scrollTo(0, 1000));

    $('.destination').mouseenter(function () {
        $(this).find('.image-container > img').css({ 'transform': 'scale(1.04)', 'cursor': 'pointer' })

    })
    $('.destination').mouseleave(function () {
        $(this).find('.image-container > img').css('transform', 'scale(1)')

    })

});


$(document).ready(function () {

    const hamburger = $('.hamburger-btn');
    const navigation = $('.landing-page nav');
    const landing_page_overlay = $('.landing-page__overlay');

    showNavigation = () => {
        $(navigation).addClass('expanded');
        $(landing_page_overlay).css({ 'opacity': '1' });
    }
    hideNavigation = () => {
        $(navigation).removeClass('expanded');
        $(landing_page_overlay).css({ 'opacity': '0' });
    }

    $(hamburger).on('click', showNavigation);
    $(landing_page_overlay).on('click', hideNavigation);


    const email_input = $('#sendEmail-input');

    check_input_empty = (e) => {
        if ($(email_input).val() == '' || $(email_input).val().length == 0) {
            alert('input is empty')
            e.preventDefault();
        }
    }
    $('form').on('submit', check_input_empty);

});


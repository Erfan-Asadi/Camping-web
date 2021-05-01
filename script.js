$(document).ready(function () {
    
    const hamburger = $('.hamburger-btn');
    const navigation = $('.landing-page nav');
    const landing_page_overlay = $('.landing-page__overlay');
    
    showNavigation =()=>{
        $(navigation).addClass('expanded');
        $(landing_page_overlay).css({'opacity':'1'});
    }
    hideNavigation =()=>{
        $(navigation).removeClass('expanded');
        $(landing_page_overlay).css({'opacity':'0'});
    }
    
    $(hamburger).on('click',showNavigation);
    $(landing_page_overlay).on('click',hideNavigation);
});

  
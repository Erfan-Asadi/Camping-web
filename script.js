$(document).ready(function () {
    // variables
    const hamburger = $('.hamburger-btn');
    const navigation = $('.landing-page nav');
    const landing_page_overlay = $('.landing-page__overlay');

    const heartIcon_container = document.querySelectorAll('.image-container span');
    const email_input = $('#sendEmail-input');

    const destinations = document.querySelectorAll('.destination');
    let dest_index = 0;

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
    window.addEventListener('scroll', function () {
        if (pageYOffset >= 400) {
            $(arrowTop).css('opacity', '1');
        } else {
            $(arrowTop).css('opacity', '0');
        }
    });


    let destination_list = ['Tehran', 'Shiraz', 'Isfahan'];
    let destination_img_srcs = ['image/destination-1.png', 'image/destination-2.png', 'image/destination-3.png']
    const likeIcon_src = "image/heart-outline-icon.svg";

    function make_h3(destinationList = ['default value']) {
        let formated_destinationList = destinationList.map((dest) => {
            return `<h3> ${dest} </h3>`;
        })
        return formated_destinationList;
    }


    function make_imageContainer() {
        let imageContainer_template = []
        
        for (let i = 0; i < destination_list.length; ++i) {
            imageContainer_template.push(`
                <div class="image-container">
                    <img src="${destination_img_srcs[i]}" alt="destination" ">
                    <span>
                        <img src="${likeIcon_src}" alt="like-icon" class="like-icon">
                    </span>
                </div> `);           
        }
        return imageContainer_template;
    }


    const destination_price = ['36kr']
    function make_destinationPrice() {
        let prices_list = []
        for (let i = 0; i < destination_list.length; ++i) {
            prices_list.push(`
            <span class="destination-price">${destination_price}/night</span>    
            `);           
        }
        return prices_list ;
    }
    
    function make_destination_detail() {
        let dest_paragraphs = []
        for (let i = 0; i < destination_list.length; ++i) {
            dest_paragraphs.push(`
            <p> Book unique camping experiences on over 300,000 campsites. </p>   
            `);           
        }
        return dest_paragraphs ;
    }
    function make_destination_button() {
        return `<button class="readMore-btn">Read More</button>` ;
    }
    destinations[0].insertAdjacentHTML('beforeend',make_destination_button())


    setInterval(() => {
        $(destinations).eq(dest_index - 1).css('border-color', 'transparent');
        $(destinations).eq(dest_index).css('border-color', '#e76f51');

        if (dest_index == destinations.length - 1) {
            dest_index = -1;
        }
        dest_index++;

    }, 1400);

    // event listeners
    $(hamburger).on('click', showNavigation);
    $(landing_page_overlay).on('click', hideNavigation);

    $(document.body).on('click',heartIcon_container, toggle_like_icon);

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


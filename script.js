$(document).ready(function () {
    // variables
    const hamburger = $('.hamburger-btn');
    const navigation = $('.landing-page nav');
    const landing_page_overlay = $('.landing-page__overlay');

    const heartIcon_container = document.querySelectorAll('.image-container span');
    const email_input = $('#sendEmail-input');

    const destinations = document.querySelectorAll('.destination');


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

    
    make_h3 = (title) => {
        return `<h3> ${title} </h3>`;
    }


    make_imageContainer = (imagePath) => {
        return (`
        <div class="image-container">
        <img src="${imagePath}" alt="destination" ">
        <span>
        <img src="image/heart-outline-icon.svg" alt="like-icon" class="like-icon">
        </span>
        </div> `);
    }

    make_destinationPrice = (price) => {
        return ` <span class="destination-price">${price}kr/night</span> `;
    }

    make_destination_detail = (detail) => {
        return ` <p> ${detail}</p> `;
    }
    make_destination_button = (value) => {
        return `<button class="readMore-btn">${value}</button>`;
    }

    let destinations_information = [
        {
            imagePath: 'image/destination-1.png',
            title: 'Red Lifeguard Stand',
            price: 45,
            detail: 'Book unique camping experiences on over 350,000 campsites.',
            button: 'ReadMore'
        },
        {
            imagePath: 'image/destination-4.png',
            title: 'Trickle Creek Ranch',
            price: 42,
            detail: 'Book unique camping experiences on over 350,000 campsites.',
            button: 'ReadMore'
        },
        {
            imagePath: 'image/destination-5.png',
            title: 'Red Lifeguard Stand',
            price: 45,
            detail: 'Book unique camping experiences on over 350,000 campsites.',
            button: 'ReadMore'
        },
        {
            imagePath: 'image/destination-3.png',
            title: 'Trickle Creek Ranch',
            price: 120,
            detail: 'Book unique camping experiences on over 350,000 campsites.',
            button: 'ReadMore'
        },
        {
            imagePath: 'image/destination-7.png',
            title: 'Red Lifeguard Stand',
            price: 83,
            detail: 'Book unique camping experiences on over 350,000 campsites.',
            button: 'ReadMore'
        },
        {
            imagePath: 'image/destination-2.png',
            title: 'Trickle Creek Ranch',
            price: 42,
            detail: 'Book unique camping experiences on over 500,000 campsites.',
            button: 'ReadMore'
        },
        {
            imagePath: 'image/destination-1.png',
            title: 'The Tree House',
            price: 12,
            detail: 'Book unique camping experiences on over 301,000 campsites.',
            button: 'ReadMore'
        },
        {
            imagePath: 'image/destination-6.png',
            title: 'Kindred Spirits Cabin',
            price: 73,
            detail: 'Book unique camping experiences on over 300,000 campsites.',
            button: 'ReadMore'
        },
        {
            imagePath: 'image/destination-5.png',
            title: 'The Tree House',
            price: 39,
            detail: 'Book unique camping experiences on over 100,000 campsites.',
            button: 'ReadMore'
        },
        {
            imagePath: 'image/destination-2.png',
            title: 'Kindred Spirits Cabin',
            price: 52,
            detail: 'Book unique camping experiences on over 234,000 campsites.',
            button: 'ReadMore'
        },
        {
            imagePath: 'image/destination-7.png',
            title: 'Kindred Spirits Cabin',
            price: 50,
            detail: 'Book unique camping experiences on over 234,000 campsites.',
            button: 'ReadMore'
        },
        {
            imagePath: 'image/destination-6.png',
            title: 'Kindred Spirits Cabin',
            price: 52,
            detail: 'Book unique camping experiences on over 234,000 campsites.',
            button: 'ReadMore'
        },
    ]

    add_destination_items = () => {
        for (let i = 0; i < destinations_information.length; ++i) {

            let destination = `
            <section class="destination">
            ${make_imageContainer(destinations_information[i].imagePath)}
            ${make_destinationPrice(destinations_information[i].price)}
            ${make_h3(destinations_information[i].title)}
            ${make_destination_detail(destinations_information[i].detail)}
            ${make_destination_button(destinations_information[i].button)}
            </section>        
            `;

            $('.destinations-container').append(destination)
        }
    }
    add_destination_items();

    let dest_index = 0;
    setInterval(() => {

        $('.destination').eq(dest_index - 1).css('border-color', 'transparent');
        $('.destination').eq(dest_index).css('border-color', '#e76f51');

        if (dest_index == $('.destination').length - 1) {
            dest_index = -1;
        }
        dest_index++;

    }, 1400);


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

    $(document.body).on('click', heartIcon_container, toggle_like_icon);

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


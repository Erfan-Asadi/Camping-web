$(document).ready(function () {
    // variables
    const hamburger = $('.hamburger-btn'); // همبرگر منوی نارنجی رنگی که تو سایزهای کوچیکتر بالا سمت راست صفحه میاد
    const navigation = $('.landing-page nav'); // لیست لینکهای سمت چپ هدر صفحه
    
    const landing_page_overlay = $('.landing-page__overlay');
     // زمانی که منوی همبرگری تو حالت موبایل باز میشه این همون کاور سیاه شفافی هستش که 
    //  میاد روی صفحه و با کلیک روی این منو بسته میشه
   
    const email_input = $('#sendEmail-input'); 

    const arrowTop = $('.backToTop-btn');

    // functions 
    showNavigation = () => { // وقتی روی همبرگر میزنیم این تابع باعث نمایش منو میشه( درحالت موبایل)
        $(navigation).addClass('expanded');
        $(landing_page_overlay).css({
            'opacity': '1',
            'z-index': '2'
        });
    }
    hideNavigation = () => {  // وقتی روی همبرگر میزنیم این تابع باعث بسته شدن منو میشه( درحالت موبایل)
        $(navigation).removeClass('expanded');
        $(landing_page_overlay).css({
            'opacity': '0',
            'z-index': '0'
        });
    }

    check_input_empty = (e) => { // این تابع چک میکنه که هنگام ارسال ایمیل ورودی خالی نباشه
        if ($(email_input).val() == '' || $(email_input).val().length == 0) {
            alert('Input is Empty!')
            e.preventDefault();
        }
    }
    toggle_like_icon = (e) => { // روی آیتم های مکان با کلیک روی قلب این تابع باعث عوض شدن رنگ قلب میشه
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

    
    make_h3 = (title) => { // عنوان های هر آیتم مکان رو اینجا ایجاد میکنیم
        return `<h3> ${title} </h3>`;
    }


    make_imageContainer = (imagePath) => { // عکس مکان و قلبی که روشه رو اینجا ایجاد میکنیم که آرگومان ورودی آدرس عکس هستش
        return (`
        <div class="image-container">
        <img src="${imagePath}" alt="destination" ">
        <span>
        <img src="image/heart-outline-icon.svg" alt="like-icon" class="like-icon">
        </span>
        </div> `);


        
    }

    make_destinationPrice = (price) => { // اون باکس سفید رنگ قیمت روی مکان ها اینجا ایجاد میشه که آرگومانی که میفرستیم قیمتشه
        return ` <span class="destination-price">${price}kr/night</span> `;
    }

    make_destination_detail = (detail) => { // توضیحات چندخطی مکان ها اینجا ایجاد میشن
        return ` <p> ${detail}</p> `;
    }
    make_destination_button = (value) => {
        return `<button class="readMore-btn">${value}</button>`;
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


    
    // این یک آرایه هستش که دوازده تا آبجکت توی خودش داره
    // هر آبجکت اطلاعاتی مثل 
    // imagePath : آدرس هر عکس مکان برای نمایش اون 
    // title : عنوان مکان
    // price: قیمت هر شب اسکان تو اون مکان
    // detail: توضیحاتی که زیر عنوان مکان میاد
    // button: نوشته ی دکمه ای که پایین هر آیتم مکان اومده 
    let destinations_information = [
        {
            imagePath: 'image/destination-1.png',
            title: 'Red Lifeguard Stand',
            price: 145,
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
            price: 22,
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

    // آرایه ای از آبجکت ها که بالاتر گفتیم رو اینجا به این تابع میدم هر بخش اطلاعات آبجکت رو داخل تابع سازنده ی 
    // خودش بریزه و کدهای اچ تی ام ال رو ایجاد کنه
    // در آخر پس از پایان حلقه تمام اونهارو به صفحه اضافه کردم
    add_destination_items = (destination_array) => {
        $('.destinations-container').html('');
        for (let i = 0; i < destination_array.length; ++i) {

            let destination = `
            <section class="destination">
            ${make_imageContainer(destination_array[i].imagePath)}
            ${make_destinationPrice(destination_array[i].price)}
            ${make_h3(destination_array[i].title)}
            ${make_destination_detail(destination_array[i].detail)}
            ${make_destination_button(destination_array[i].button)}
            </section>        
            `;

            $('.destinations-container').append(destination); // این نگهدارنده آیتم ایجاد شده رو هربار به فرزندان خودش اضافه میکنه
        }
    }
    add_destination_items(destinations_information);

    // اون بوردر نارنجی رنگی که هر ثانیه دور یک آیتم مکان روشن میشه رو با این اینتروال ایجاد کردم
    let dest_index = 0;
    setInterval(() => {

        $('.destination').eq(dest_index - 1).css('border-color', 'transparent'); // بوردر از آیتم قبلی گرفته میشه
        $('.destination').eq(dest_index).css('border-color', '#e76f51'); // و به آیتم فعلی اضافه میشه

        if (dest_index == $('.destination').length - 1) { // هروقت به آخرین آیتم رسیدیم شمارنده دوباره از اول آغاز به کار میکنه
            dest_index = -1;
        }
        dest_index++;

    }, 1400);

    show_cheap_destinations = (item)=> { // این تابع باعث میشه فقط مکان هایی که قیمت کمتر از 50 دارند نمایش داده بشن
        $(item).siblings().removeClass('active')
        $(item).addClass('active')
        let cheap_list = destinations_information.filter((dest) => {
           return  dest.price < 50;
        })   
           
        return cheap_list;
    }
    show_normal_destinations = (item)=> { // مکان هایی که قیمت بین 50 تا 100 رو دارند فقط نمایش داده میشن
        $(item).siblings().removeClass('active')
        
        $(item).addClass('active')
        let normal_list = destinations_information.filter((dest) => {
           return  (50<= dest.price) && (dest.price < 100) ;
        })   
           
        return normal_list;
    }
    show_expensive_destinations = (item)=> { // مکان های گرونتری که قیمت بالای صد دارند توی صفحه نشون داده میشن
         $(item).siblings().removeClass('active')
         $(item).addClass('active')   
        let expensive_list = destinations_information.filter((dest) => {
           return  100<= dest.price  ;
        })   
           
        return expensive_list;
    }
    show_all_destinations = (item)=> { // مانند حالت اولیه تمام مکانهارو نشون میده روی مرورگر
         $(item).siblings().removeClass('active')
         $(item).addClass('active')    
           
        return destinations_information;
    }
    
    
    
    // اینها هندلر های ما هستن یعنی برای اینکه تعیین کنیم هنگام کلیک یا اسکرول شدن عنصری، 
    // چه اتفاقی بیوفته با این ایونت لیستنر ها اونارو مشخص میکنیم
    // event listeners

    // events that run after click on one of filter buttons
    $('button.cheap').on('click',(e)=>  add_destination_items( show_cheap_destinations(e.target) ));
    $('button.normal').on('click',(e)=>  add_destination_items( show_normal_destinations(e.target) ));
    $('button.expensive').on('click',(e)=>  add_destination_items( show_expensive_destinations(e.target) ));
    $('button.all').on('click',(e)=>  add_destination_items( show_all_destinations(e.target) ));



    window.addEventListener('scroll', function () { 
        // باعث نمایش داده شدن آیکون بازگشت به بالا میشه، زمانی که اندازه ی 400 واحد
        // صفحه اسکرول شد اون آیکون نمایش داده میشه و با کلیک روش بر میگردیم به بالای صفحه
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

    $('.destination').mouseenter(function () { // هنگامی که موس روی عکس مکان بیاد اندازه ی عکس کمی زوم میشه
        $(this).find('.image-container > img').css({ 'transform': 'scale(1.04)', 'cursor': 'pointer' })

    })
    $('.destination').mouseleave(function () { // هنگامی که موس از روی عکس بره عکس مکان به حالت اولیه برمیگرده
        $(this).find('.image-container > img').css('transform', 'scale(1)')

    })

});


const hamburger = document.querySelector('.hamburger-btn');
const navigation = document.querySelector('.landing-page nav');
const landing_page = document.querySelector('.landing-page');
const landing_page_overlay = document.querySelector('.landing-page__overlay');

showNavigation =()=>{
    navigation.classList.add('expanded');
    landing_page_overlay.style.opacity = '1';
}
hideNavigation =()=>{
    navigation.classList.remove('expanded');
    landing_page_overlay.style.opacity = '0';
}

hamburger.addEventListener('click',showNavigation)
landing_page_overlay.addEventListener('click',hideNavigation)

  
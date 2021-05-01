const hamburger = document.querySelector('.hamburger-btn');
const navigation = document.querySelector('.landing-page nav');
const landing_page = document.querySelector('.landing-page');
const landing_page_clickable = document.querySelector('.landing-page[data-clickable="true"]');

showNavigation =()=>{
    navigation.classList.add('expanded');
    landing_page.setAttribute('data-clickable','true');
}
hideNavigation =()=>{
    alert('hi')
    navigation.classList.remove('expanded');
    landing_page.setAttribute('data-clickable','false');
}

hamburger.addEventListener('click',showNavigation)
landing_page_clickable.addEventListener('click',hideNavigation)

  
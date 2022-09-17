// const navBtn = document.querySelector('.nav-button');
// const mobileNav = document.querySelector('.mobile-nav');

// console.log(navBtn);
// console.log( mobileNav);


const navBtn = document.querySelector('.nav-button');
const mobileNav = document.querySelector('.mobile-nav');

navBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('mobile-nav-active');
    navBtn.classList.toggle('nav-button-close');
    
})
console.log( navBtn);
console.log( mobileNav);
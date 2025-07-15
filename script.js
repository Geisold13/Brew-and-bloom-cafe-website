

const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');

hamburger.addEventListener('click', () => {

    const currentDisplay = window.getComputedStyle(mobileNav).display;

    console.log("Clicked Hamburger");

    if (currentDisplay === 'none') {
        mobileNav.style.display = 'block';
    } else {
        mobileNav.style.display = 'none';
    }


});

window.addEventListener('resize', () => {

    if (window.innerWidth > 1024) {
        console.log("Hiding nav");
        mobileNav.style.display = 'none';

    }
});

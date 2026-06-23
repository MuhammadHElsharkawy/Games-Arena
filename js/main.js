const mobileNav = document.querySelector('#mobile-nav');
let ismobileNavOpen = false;

function checkIsMobileNavOpen() {
    ismobileNavOpen = !mobileNav.classList.contains('hidden');
}
function toggleMobileNav(currentState) {
    if (currentState) {
        closeMobileNav()
    } else {
        openMobileNav()
    }
}
function openMobileNav() {
    mobileNav.classList.remove('hidden');
}
function closeMobileNav() {
    mobileNav.classList.add('hidden');
}
function onBtnClick() {
    checkIsMobileNavOpen();
    toggleMobileNav(ismobileNavOpen)
}

const swiper = new Swiper('.swiper', {
    rewind: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    speed: 600,

    breakpoints: {
        768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        1024: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        }
    },

    navigation: {
        nextEl: '#swiper-button-next',
        prevEl: '#swiper-button-prev',
    },

});
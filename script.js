//toggle class active
const navbarNav = document.querySelector('.navbar-nav');

// Onclick hamburger
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};
// sidebar
const hamburger =  document.querySelector('#hamburger-menu');
document.addEventListener('click',function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});

//clear
window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName('form')) {
        form.reset();
    }
}
const navToggle = document.querySelector('#toggle-menu');
const navLink = document.querySelector('.nav-link');

const menu = () => {
    navToggle.classList.toggle('is-active');
    navLink.classList.toggle('active');
};
navToggle.addEventListener('click', menu);  
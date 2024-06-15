Let menu = document.querySelector('#menu-icon'); Let navbar = document.querySelector('.navbar');

menu.onclick = () => {

menu.classList.toggle('bx-x');

navbar.classList.toggle('open')

};

const sr = ScrollReveal ({

distance: '40px', او

duration: 2500,

})
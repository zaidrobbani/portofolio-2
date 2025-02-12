// toggle menu 
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// ketika diklik
menu.onclick = (e) => {
    navbar.classList.toggle('active');
    menu.classList.toggle('bx-x');
    e.preventDefault();
};

// ketika diklik selain navbar dan menu
document.addEventListener("click", function(e){
    if(!menu.contains(e.target) && ! navbar.contains(e.target)){
        navbar.classList.remove('active');
    }
});

// ketika window di scroll menu navbar akan hilang
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// ketik
var typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'UI/UX Designer', 'Video Editor', 'Web Designer', 'Freelancer'],
    typeSpeed: 80,
    backspeed: 80,
    backDelay: 1200,
    loop: true,
});
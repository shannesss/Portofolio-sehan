// hamburger
const hambuger = document.querySelector('#hambuger');
const navmenu = document.querySelector('#nav-menu');

hambuger.addEventListener('click', function(){
    hambuger.classList.toggle('hambuger-active')
    navmenu.classList.toggle('hidden');
});

//nabar fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixednav = header.offsetTop;

    if(window.pageYOffset > fixednav) {
        header.classList.add('navbar-fixed');
    } else{
        header.classList.remove('navbar-fixed');
    }
};


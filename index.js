const menu = document.getElementsByClassName('menu')[0];
let menuLinks = document.getElementsByClassName('menu-links')[0];
const drop = document.getElementsByClassName('fa-chevron-right')[0];
let dropElement=document.getElementsByClassName('dropdown')[0];

menu.addEventListener('click', (e) => {
    let hamburger = document.getElementById('hamburger');
    menuLinks.classList.toggle('active');

    if (hamburger.classList.contains('fa-bars')) {
        hamburger.classList.replace('fa-bars','fa-x')
    } else {
        hamburger.classList.replace('fa-x','fa-bars')
    }
})

function showMenu() {
    // menu_links.classList.toggle('active')
}

drop.addEventListener('click',()=> {
    dropElement.classList.toggle('active');
})

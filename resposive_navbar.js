const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const navigationn= document.querySelector('navigation');




openMenu.addEventListener('click',open);
closeMenu.addEventListener('click',close);

function open(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '4.8rem';
}
function close(){
    mainMenu.style.top  = '-120%';
}

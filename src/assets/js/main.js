const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu-list');
const navigation = document.querySelector('.navigation');

    menuToggle.onclick = () => {
        menu.classList.toggle('open');
        navigation.classList.toggle('open');
    }

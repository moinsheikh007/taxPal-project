const menubar = document.getElementById('menu-bar');
const navbar = document.getElementById('navbar');

menubar.addEventListener('click', function () {
    navbar.classList.toggle('hidden');
});
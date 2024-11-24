document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navbarLinks = document.querySelector('.navbar-links');

    menuToggle.addEventListener('click', () => {
        navbarLinks.classList.toggle('active'); // Toggle the menu visibility
    });
});

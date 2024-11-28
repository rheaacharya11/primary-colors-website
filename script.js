document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navbarLinks = document.querySelector('.navbar-links');

    menuToggle.addEventListener('click', () => {
        navbarLinks.classList.toggle('active'); // Toggle the menu visibility
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const checkboxes = document.querySelectorAll(".filters input[type='checkbox']");
    const cards = document.querySelectorAll(".card");

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", () => {
            const activeFilters = Array.from(checkboxes)
                .filter(input => input.checked)
                .map(input => input.id);

            cards.forEach(card => {
                const cardClasses = card.className.split(" ");
                const isVisible = activeFilters.length === 0 || activeFilters.some(filter => cardClasses.includes(filter));
                card.classList.toggle("hidden", !isVisible);
            });
        });
    });
});

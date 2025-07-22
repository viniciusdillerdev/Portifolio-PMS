document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');
    const dropdowns = document.querySelectorAll('.dropdown > a');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navList.classList.toggle('active');
        });
    }

    if (dropdowns) {
        dropdowns.forEach(dropdownLink => {
            dropdownLink.addEventListener('click', function(e) {
                if (window.innerWidth <= 900) {
                    e.preventDefault();
                    const parentDropdown = this.closest('.dropdown');
                    parentDropdown.classList.toggle('active');
                }
            });
        });
    }
});
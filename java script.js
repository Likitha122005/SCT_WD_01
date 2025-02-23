// Get the navbar
const navbar = document.getElementById('navbar');

// Function to toggle 'scrolled' class when the page is scrolled
function checkScroll() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// Event listener for scroll event
window.addEventListener('scroll', checkScroll);

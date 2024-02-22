// Get the elements
const hamburgerElement = document.querySelector('.hamburger');
const navLinksElement = document.querySelector('.nav-links');

// Add event listener
if (hamburgerElement) {
    hamburgerElement.addEventListener('click', () => {

        // Check if the element exsits
        if (!navLinksElement) {
            return
        }
        navLinksElement.classList.toggle('expanded');
    });
}

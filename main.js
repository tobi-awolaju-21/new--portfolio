function toggleMenu() {
    document.getElementById("slide-out-menu").style.width = "100%";
}

function closeMenu() {
    document.getElementById("slide-out-menu").style.width = "0";
}


// Function to check if an element is in the viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle the scroll event
function handleScroll() {
    const cards = document.querySelectorAll('.card-section');

    cards.forEach((card) => {
        if (isElementInViewport(card)) {
            card.classList.add('active');
        }
    });
}

// Attach the handleScroll function to the scroll event
document.addEventListener('scroll', handleScroll);

// Initial check on page load
document.addEventListener('DOMContentLoaded', handleScroll);

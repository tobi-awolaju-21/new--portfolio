//tab color
// Set the tab color to your desired hexadecimal color code
function setTabColor(color) {
    var metaTag = document.querySelector('meta[name="theme-color"]');

    if (metaTag) {
        // Update existing meta tag
        metaTag.setAttribute('content', color);
    } else {
        // Create a new meta tag if it doesn't exist
        var newMetaTag = document.createElement('meta');
        newMetaTag.name = 'theme-color';
        newMetaTag.content = color;
        document.head.appendChild(newMetaTag);
    }
}





function toggleMenu() {
    document.getElementById("slide-out-menu").style.width = "100%";
    // Example: Set tab color to blue
setTabColor('#4000FF');
}

function closeMenu() {
    document.getElementById("slide-out-menu").style.width = "0";
    // Example: Set tab color to blue
setTabColor('#fff');
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



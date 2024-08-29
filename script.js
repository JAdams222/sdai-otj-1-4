document.addEventListener('DOMContentLoaded', function() {
    
    const galleryImages = document.querySelectorAll('.dev-favorites-gallery img');
    let currentImageIndex = 0;

    
    function showImage(index) {
        galleryImages.forEach((img, i) => {
            img.style.display = i === index ? 'block' : 'none';
        });
    }

    // Initialize the first image display
    showImage(currentImageIndex);

    // Auto-rotate images every 3 seconds
    setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
        showImage(currentImageIndex);
    }, 3000); // Change image every 3 seconds

    // Example: Add interactivity to images
    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            alert(`You clicked on: ${this.alt}`);
        });
    });

    // Example of another dynamic behavior: Welcome alert
    alert('Welcome to Dev Dish! Explore our tech-inspired cuisine.');
});


// Utility function to apply fade-in effect
function fadeInElement(element, delay = 0, duration = 1000) {
    element.style.opacity = 0;
    element.style.transition = `opacity ${duration}ms ease-in-out`;
    
    setTimeout(() => {
        element.style.opacity = 1;
    }, delay);
}

// DOMContentLoaded event ensures the DOM is fully loaded before running scripts
document.addEventListener('DOMContentLoaded', function() {
    // Target elements using their assigned IDs or classes
    const foodTruckIcon = document.getElementById('food-truck-icon');
    const devDishMenu = document.getElementById('dev-dish-menu');
    const devFavorites = document.getElementById('dev-favorites');
    const devFavoriteImages = document.querySelectorAll('.dev-favorite-image');
    const locationSection = document.getElementById('location-section');
    const hoursList = document.getElementById('hours-list');

    // Apply fade-in effects with different delays
    fadeInElement(foodTruckIcon, 0, 1500); // Fade in the food truck icon
    fadeInElement(devDishMenu, 500, 1500); // Fade in the menu section
    fadeInElement(devFavorites, 1000, 1500); // Fade in the Developer's Favorites section
    fadeInElement(locationSection, 1500, 1500); // Fade in the location section

    // Apply fade-in to each image in the Developer's Favorites section with staggered delay
    devFavoriteImages.forEach((img, index) => {
        fadeInElement(img, 2000 + index * 500, 1500); // Staggered delay for each image
    });

    fadeInElement(hoursList, 3000, 1500); // Fade in the hours list
});

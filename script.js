// Ensure the DOM is fully loaded before executing scripts
document.addEventListener('DOMContentLoaded', function() {
    // Image Carousel Functionality
    const galleryImages = document.querySelectorAll('.dev-favorites-gallery img');
    let currentImageIndex = 0;

    // Function to show the current image and hide others
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

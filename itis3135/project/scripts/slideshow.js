let currentSlide = 0;
const slides = document.getElementsByClassName("slide");

function showSlide(index) {
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Ensure the index is within bounds
    currentSlide = (index + slides.length) % slides.length;

    // Show the current slide
    slides[currentSlide].style.display = "block";
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function previousSlide() {
    showSlide(currentSlide - 1);
}

// Automatically advance to the next slide every 5 seconds
setInterval(nextSlide, 10000); // Change interval time as needed

// Show the first slide on page load
showSlide(0);

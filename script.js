document.getElementById("reservationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Your table has been reserved! We look forward to seeing you.");
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for your message!");
});



    

      const images = [
        'url(./assets/bg2.png)',
        'url(./assets/karwa.jpg)',
        'url(./assets/f1.jpg)',
        'url(./assets/f2.jpg)',
        'url(./assets/bg1.jfif)',
        'url(./assets/customer.jfif)'
    ];

    let currentIndex = 0;
    let interval;

    // Ensure the DOM is fully loaded before accessing elements
    document.addEventListener("DOMContentLoaded", () => {
        const header = document.getElementById('header');

        function showSlide(index) {
            console.log(`Showing slide: ${index}`); // Debugging line
            header.style.backgroundImage = images[index];
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % images.length;
            showSlide(currentIndex);
            resetInterval();
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showSlide(currentIndex);
            resetInterval();
        }

        function resetInterval() {
            clearInterval(interval);
            interval = setInterval(nextSlide, 4000); // Change image every 4 seconds
        }

        // Start with the first image and auto-scroll
        showSlide(currentIndex);
        resetInterval();
    });
   
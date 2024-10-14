document.getElementById("reservationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Your table has been reserved! We look forward to seeing you.");
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for your message!");
});

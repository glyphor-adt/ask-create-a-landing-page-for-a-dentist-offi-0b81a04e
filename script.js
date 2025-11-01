// script.js

// Contact form functionality (for demonstration purposes)
document.querySelector('button').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
        alert('Thank you for reaching out! We will get back to you soon.');
    } else {
        alert('Please fill out all fields.');
    }
});
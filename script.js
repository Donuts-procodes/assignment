// script.js

// Toggle content for "Read More" functionality
function toggleContent() {
    const content = event.target.closest('.choose-info').querySelector('.head-text');
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
        event.target.textContent = "Read More";
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
        event.target.textContent = "Read Less";
    }
}

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

// Form submission handling for individual forms
document.querySelectorAll('.form-one, .demo').forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault(); 
        const name = document.getElementById('name') ? document.getElementById('name').value : '';
        const email = document.getElementById('email') ? document.getElementById('email').value : '';
        const phone = document.getElementById('phn-number') ? document.getElementById('phn-number').value : '';
        const location = document.getElementById('location') ? document.getElementById('location').value : '';
        if (name && email && phone && location) {
            alert('Form submitted successfully!');
        } else {
            alert('Please fill in all fields.');
        }
    });
});

document.querySelector('.schedule-btn').addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = 'main-form'; 
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }
});
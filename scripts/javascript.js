// Whiskers' Cafe - javascript.js

// =====================
// Mobile Nav Toggle
// =====================
const hamburger = document.getElementById('hamburger');
const mainNav = document.getElementById('main-nav');

if (hamburger && mainNav) {
    hamburger.addEventListener('click', function () {
        mainNav.classList.toggle('open');
        hamburger.setAttribute('aria-expanded', mainNav.classList.contains('open'));
    });
}

// =====================
// Contact Form Validation
// =====================
const contactForm = document.getElementById('contact-form');
const formFeedback = document.getElementById('form-feedback');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Simple validation
        if (!name || !email || !message) {
            formFeedback.textContent = 'Please fill in all required fields.';
            formFeedback.style.color = '#c8322c';
            return;
        }

        // Basic email format check
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            formFeedback.textContent = 'Please enter a valid email address.';
            formFeedback.style.color = '#c8322c';
            return;
        }

        // Success
        formFeedback.textContent = 'Thank you! Your message has been sent.';
        formFeedback.style.color = '#f59e0b';
        contactForm.reset();
    });
}

// =====================
// Booking Form Validation (bookings page)
// =====================
const bookingForm = document.getElementById('booking-form');
const bookingFeedback = document.getElementById('booking-feedback');

if (bookingForm) {
    bookingForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const bookingName = document.getElementById('booking-name').value.trim();
        const bookingEmail = document.getElementById('booking-email').value.trim();
        const bookingDate = document.getElementById('booking-date').value;
        const bookingTime = document.getElementById('booking-time').value;
        const bookingGuests = document.getElementById('booking-guests').value;

        if (!bookingName || !bookingEmail || !bookingDate || !bookingTime || !bookingGuests) {
            bookingFeedback.textContent = 'Please fill in all required fields.';
            bookingFeedback.style.color = '#c8322c';
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(bookingEmail)) {
            bookingFeedback.textContent = 'Please enter a valid email address.';
            bookingFeedback.style.color = '#c8322c';
            return;
        }

        // Check date is not in the past
        const selectedDate = new Date(bookingDate);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (selectedDate < today) {
            bookingFeedback.textContent = 'Please select a future date.';
            bookingFeedback.style.color = '#c8322c';
            return;
        }

        bookingFeedback.textContent = 'Booking confirmed! We look forward to seeing you.';
        bookingFeedback.style.color = '#f59e0b';
        bookingForm.reset();
    });
}

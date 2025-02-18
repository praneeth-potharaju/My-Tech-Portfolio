// Mobile menu functionality
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const spans = mobileMenuBtn.querySelectorAll('span');
    spans[0].style.transform = navLinks.classList.contains('active') ? 'rotate(45deg) translate(6px, 6px)' : '';
    spans[1].style.opacity = navLinks.classList.contains('active') ? '0' : '1';
    spans[2].style.transform = navLinks.classList.contains('active') ? 'rotate(-45deg) translate(6px, -6px)' : '';
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const navbarHeight = document.querySelector('#navbar').offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = targetPosition - navbarHeight;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });

        // Close mobile menu if open
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            const spans = mobileMenuBtn.querySelectorAll('span');
            spans[0].style.transform = '';
            spans[1].style.opacity = '1';
            spans[2].style.transform = '';
        }
    });
});

// Simple navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('#navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
        return;
    }
    
    if (currentScroll > lastScroll) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
        navbar.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});
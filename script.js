'use strict';

document.addEventListener('DOMContentLoaded', function () {

// Modal window ABOUT section
const aboutSection = document.querySelector('.about');
const modal = aboutSection.querySelector('.modal');
const overlay = aboutSection.querySelector('.overlay');
const btnOpenModal = aboutSection.querySelector('.show-modal');
const btnCloseModal = aboutSection.querySelector('.close-modal');


const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

btnOpenModal.addEventListener('click', function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    console.log("clicked");
})

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (exit) {
    console.log(exit.key);
    if (exit.key === 'Escape') {
        if (!modal.classList.contains('hidden')) {
            modal.classList.add('hidden');
            overlay.classList.add('hidden');
        }
    }
})
// Modal window ABOUT section

    // Switch to icon-menu <720px
    let iconMenu = document.querySelector('#icon-menu');
    let navbar = document.querySelector('.navbar');

    iconMenu.onclick = () => {
        iconMenu.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };

    // Typing animation in hero section
    const typed = new Typed('.multiple--text', {
        strings: ['Frontend Developer', 'Web Designer', 'UI/UX Designer'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });

    // Function to set active status for navbar items
    function setActiveNavItem(targetId) {
        const navbarLinks = document.querySelectorAll('.navbar a');
        navbarLinks.forEach((link) => {
            link.classList.remove('active');
        });

        const targetLink = document.querySelector(`.navbar a[href="#${targetId}"]`);
        if (targetLink) {
            targetLink.classList.add('active');
        }
    }

    
    // Function to handle scroll event
    function handleScroll() {
        const sections = document.querySelectorAll('section');
        sections.forEach((section) => {
            const sectionId = section.getAttribute('id');
            const sectionOffset = section.offsetTop;
            const scrollY = window.scrollY;

            if (scrollY >= sectionOffset && scrollY < sectionOffset + section.clientHeight) {
                setActiveNavItem(sectionId);
            }
        });
    }

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

    

    // Handle initial active item
    setActiveNavItem('home');

    // Alert form validation
        const form = document.querySelector("form");
        const fullNameInput = document.querySelector('input[placeholder="Full Name"]');
        const emailInput = document.querySelector('input[placeholder="Email Address"]');
        const messageTextarea = document.querySelector('textarea[placeholder="Your Message"]');

        form.addEventListener("submit", function (event) {
            event.preventDefault();

            if (!fullNameInput.value.trim()) {
                alert("Please enter your full name.");
                return;
            }

            if (!isValidEmail(emailInput.value)) {
                alert("Please enter a valid email address.");
                return;
            }

            if (!messageTextarea.value.trim()) {
                alert("Please enter your message.");
                return;
            }

            form.submit();
        });

        function isValidEmail(email) {
            const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
            return emailRegex.test(email);
        }
        
});


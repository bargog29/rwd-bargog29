'use strict';
document.addEventListener('DOMContentLoaded', function () {

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
});
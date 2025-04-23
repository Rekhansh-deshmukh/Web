document.addEventListener('DOMContentLoaded', function() {
    // Custom cursor elements
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    // Interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .navigator-item, .skill-card, .knowledge-card');
    
    // Track mouse movement
    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        // Add slight delay to follower for smooth effect
        setTimeout(() => {
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        }, 50);
    });

    // Handle interactive elements
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
            cursorFollower.style.transform = 'scale(1.5)';
            cursorFollower.style.borderColor = 'var(--accent-color)';
        });

        element.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursorFollower.style.transform = 'scale(1)';
            cursorFollower.style.borderColor = 'var(--secondary-color)';
        });
    });

    // Navigation functionality
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    const contentToggles = document.querySelectorAll('.content-toggle');
    const toggleContents = document.querySelectorAll('.toggle-content');
    const careerNavigatorItems = document.querySelectorAll('.navigator-item');

    // Handle navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href');
            
            // Update active states
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // Show target section
            sections.forEach(section => {
                if (section.id === target.substring(1)) {
                    section.classList.add('active');
                } else {
                    section.classList.remove('active');
                }
            });
        });
    });

    // Handle career navigator items
    careerNavigatorItems.forEach(item => {
        item.addEventListener('click', function() {
            const target = this.getAttribute('data-target');
            
            // Update active states
            navLinks.forEach(link => {
                if (link.getAttribute('href') === `#${target}`) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
            
            // Show target section
            sections.forEach(section => {
                if (section.id === target) {
                    section.classList.add('active');
                } else {
                    section.classList.remove('active');
                }
            });
        });
    });

    // Handle content toggles
    contentToggles.forEach((toggle, index) => {
        toggle.addEventListener('click', function() {
            this.classList.toggle('active');
            toggleContents[index].classList.toggle('active');
            
            // Update toggle text
            const span = this.querySelector('span');
            span.textContent = this.classList.contains('active') ? 'Hide Topics' : 'Show Topics';
        });
    });
});
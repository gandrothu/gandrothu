document.addEventListener('DOMContentLoaded', function() {
    // Elements
const tagline = document.querySelector('.tagline');
const burger = document.getElementById('burger');
    const nav = document.querySelector('.navigation-container');
    const navOverlay = document.getElementById('nav-overlay');
    const backToTop = document.getElementById('backToTop');
    const skillLevels = document.querySelectorAll('.skill-level');
    const contactForm = document.getElementById('contactForm');
    
    // Typewriter effect for tagline
    const text = `Gandrothu Kanaka Venkata Satyanarayana.`;
let idx = 0;
    tagline.textContent = '';

function type() {
    if (idx < text.length) {
            tagline.textContent += text.charAt(idx);
        idx++;
        setTimeout(type, 60);
        } else {
            // Add blinking cursor after typing
            tagline.classList.add('cursor-blink');
        }
    }
    
    setTimeout(type, 1000);
    
    // Mobile navigation toggle
    burger.addEventListener('click', function() {
        burger.classList.toggle('active');
        nav.classList.toggle('active');
        navOverlay.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });
    
    // Close mobile navigation when clicking on nav overlay
    navOverlay.addEventListener('click', function() {
        burger.classList.remove('active');
        nav.classList.remove('active');
        navOverlay.classList.remove('active');
        document.body.classList.remove('no-scroll');
    });
    
    // Close mobile navigation when clicking on nav links
    document.querySelectorAll('.navigation-container a').forEach(link => {
        link.addEventListener('click', function() {
            burger.classList.remove('active');
            nav.classList.remove('active');
            navOverlay.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });
    
    // Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
                const headerOffset = 70;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Back to top button visibility
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
        
        // Animate skill bars when in viewport
        animateSkillBarsOnScroll();
    });
    
    // Back to top functionality
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Animate skill bars when they come into view
    function animateSkillBarsOnScroll() {
        skillLevels.forEach(skillLevel => {
            const skillBar = skillLevel.parentElement.parentElement;
            const skillBarPosition = skillBar.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (skillBarPosition < screenPosition) {
                const width = skillLevel.getAttribute('style').match(/width:\s*(\d+)%/)[1];
                skillLevel.style.width = width + '%';
            }
        });
    }
    
    // Initialize particles.js for background animation
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#a66eff'
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#000000'
                    }
                },
                opacity: {
                    value: 0.3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#7127ba',
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 1,
                    direction: 'none',
                    random: true,
                    straight: false,
                    out_mode: 'out',
                    bounce: false
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'grab'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 0.5
                        }
                    },
                    push: {
                        particles_nb: 3
                    }
                }
            },
            retina_detect: true
        });
    }
    
    // Contact form functionality
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Form validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (!name || !email || !message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Here you would typically send the form data to your backend
            // For now, we'll just show a success message
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }
    
    // Reveal animations for sections
    const revealElements = document.querySelectorAll('.main-section');
    
    function revealSection() {
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight * 0.85) {
                element.classList.add('revealed');
            }
        });
    }
    
    window.addEventListener('scroll', revealSection);
    
    // Call once to check for elements in view on page load
    revealSection();
    setTimeout(animateSkillBarsOnScroll, 1000);
});
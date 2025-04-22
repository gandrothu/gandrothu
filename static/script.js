const tagline = document.querySelector('.tagline');
const text = `Gandrothu Kanaka Venkata Satyanarayana.|`;
const burger = document.getElementById('burger');
const nav = document.getElementsByClassName('navigation-container')[0];
let idx = 0;
tagline.innerText = '';

function type() {
    if (idx < text.length) {
        tagline.innerText += text.charAt(idx);
        idx++;
        setTimeout(type, 60);
    }
}

window.onload = () => {
    setTimeout(type, 500);
};

// Smooth scroll for anchor links (slower and smoother)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - 60;
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;
            const duration = 700;
            let start = null;

            function animation(currentTime) {
                if (start === null) start = currentTime;
                const timeElapsed = currentTime - start;
                const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
                window.scrollTo(0, run);
                if (timeElapsed < duration) requestAnimationFrame(animation);
            }

            function easeInOutQuad(t, b, c, d) {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t + b;
                t--;
                return -c / 2 * (t * (t - 2) - 1) + b;
            }

            requestAnimationFrame(animation);
            if(!(target.getAttribute("id")==="top")){
                nav.classList.toggle('active');
            }   
        }
    });
});

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
});
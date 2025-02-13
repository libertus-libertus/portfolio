// fade-in animate
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");

    const options = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in-active");
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});

// script-custom-cursor
document.addEventListener("DOMContentLoaded", () => {
    const cursor = document.querySelector(".cursor");

    document.addEventListener("mousemove", (e) => {
        requestAnimationFrame(() => {
            cursor.style.left = `${e.pageX}px`;
            cursor.style.top = `${e.pageY}px`;
        });
    });

    document.querySelectorAll("a, button").forEach((el) => {
        el.addEventListener("mouseenter", () => {
            cursor.style.transform = "translate(-50%, -50%) scale(1.5)";
        });
        el.addEventListener("mouseleave", () => {
            cursor.style.transform = "translate(-50%, -50%) scale(1)";
        });
    });
});

// script untuk section
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {
        let currentSection = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");

            if (link.getAttribute("href").substring(1) === currentSection) {
                link.classList.add("active");
            }
        });
    });
});

// script-slider-icon
document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".tools-track");
    const clone = track.innerHTML;
    track.innerHTML += clone; // Gandakan ikon agar slider terus berjalan tanpa jeda

    // Hover effect untuk mengganti ikon
    const icons = document.querySelectorAll(".icon");

    icons.forEach((icon) => {
        const defaultSrc = icon.src;
        const colorSrc = icon.getAttribute("data-color");

        icon.addEventListener("mouseover", function () {
            icon.src = colorSrc;
        });

        icon.addEventListener("mouseout", function () {
            icon.src = defaultSrc;
        });
    });
});

// Animasi bola-bola galaxy yang lebih smooth
const canvas = document.getElementById("galaxyCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];
for (let i = 0; i < 150; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 0.5,
        dx: (Math.random() - 0.5) * 0.2,
        dy: (Math.random() - 0.5) * 0.2,
        opacity: Math.random() * 0.5 + 0.2
    });
}

function animateStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 200, 255, ${star.opacity})`;
        ctx.fill();
        ctx.closePath();

        star.x += star.dx;
        star.y += star.dy;

        if (star.x < 0 || star.x > canvas.width) star.dx *= -1;
        if (star.y < 0 || star.y > canvas.height) star.dy *= -1;
    });
    requestAnimationFrame(animateStars);
}

animateStars();

window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
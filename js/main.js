// main.js

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Check if the link is on the same page
            if (window.location.pathname === this.pathname || '/' + this.pathname === window.location.pathname) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const target = document.querySelector(targetId);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Intersection Observer for fade-in animations
    const featureCards = document.querySelectorAll('.feature-card');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    featureCards.forEach(card => {
        observer.observe(card);
    });

    // ==============================
    // 🔗 Backend Connection Test
    // ==============================

    const backendURL = "https://niile-fullstack-backend-production.up.railway.app";

    async function testBackendConnection() {
        try {
            const response = await fetch(`${backendURL}/api/data`);
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            const data = await response.json();
            console.log("✅ Backend connected successfully:", data);
            const message = document.createElement("div");
            message.textContent = "Backend Connected ✅";
            message.style.color = "green";
            message.style.fontWeight = "bold";
            message.style.position = "fixed";
            message.style.bottom = "10px";
            message.style.right = "10px";
            message.style.background = "#e6ffe6";
            message.style.padding = "8px 12px";
            message.style.borderRadius = "8px";
            document.body.appendChild(message);
        } catch (error) {
            console.error("❌ Failed to connect to backend:", error);
            const message = document.createElement("div");
            message.textContent = "Backend Connection Failed ❌";
            message.style.color = "red";
            message.style.fontWeight = "bold";
            message.style.position = "fixed";
            message.style.bottom = "10px";
            message.style.right = "10px";
            message.style.background = "#ffe6e6";
            message.style.padding = "8px 12px";
            message.style.borderRadius = "8px";
            document.body.appendChild(message);
        }
    }

    // Run connection test on page load
    testBackendConnection();
});

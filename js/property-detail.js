// Property detail page JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize charts
    initializeCharts();
    
    // Image gallery functionality
    const images = document.querySelectorAll('img[src*="pexels"]');
    images.forEach(img => {
        img.addEventListener('click', function() {
            openImageModal(this.src, this.alt);
        });
    });

    // Contact form handler
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const button = this.querySelector('button[type="submit"]');
            const originalText = button.textContent;
            button.textContent = 'Sending...';
            button.disabled = true;
            
            setTimeout(() => {
                alert('Thank you for your inquiry! We\'ll get back to you within 24 hours.');
                this.reset();
                button.textContent = originalText;
                button.disabled = false;
            }, 2000);
        });
    }
});

function initializeCharts() {
    // Rating Chart (Doughnut)
    const ratingCtx = document.getElementById('ratingChart');
    if (ratingCtx) {
        new Chart(ratingCtx, {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [72, 28],
                    backgroundColor: ['#ef4444', '#f3f4f6'],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                }
            }
        });
    }

    // Price Individuality Chart (Doughnut)
    const individualityCtx = document.getElementById('individualityChart');
    if (individualityCtx) {
        new Chart(individualityCtx, {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [85, 15],
                    backgroundColor: ['#3b82f6', '#f3f4f6'],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                }
            }
        });
    }

    // Monthly Score Chart (Doughnut)
    const scoreCtx = document.getElementById('scoreChart');
    if (scoreCtx) {
        new Chart(scoreCtx, {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [92, 8],
                    backgroundColor: ['#059669', '#f3f4f6'],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                }
            }
        });
    }

    // Price Trends Chart
    const priceCtx = document.getElementById('priceChart');
    if (priceCtx) {
        new Chart(priceCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Price (Rs)',
                    data: [480000, 485000, 490000, 495000, 498000, 500000],
                    borderColor: '#059669',
                    backgroundColor: 'rgba(5, 150, 105, 0.1)',
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        grid: { display: false }
                    },
                    x: {
                        grid: { display: false }
                    }
                }
            }
        });
    }

    // Market Activity Chart
    const activityCtx = document.getElementById('activityChart');
    if (activityCtx) {
        new Chart(activityCtx, {
            type: 'bar',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Views',
                    data: [120, 150, 180, 200, 240, 280],
                    backgroundColor: '#f97316',
                    borderRadius: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: { display: false }
                    },
                    x: {
                        grid: { display: false }
                    }
                }
            }
        });
    }

    // Interest Level Chart
    const interestCtx = document.getElementById('interestChart');
    if (interestCtx) {
        new Chart(interestCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Interest Score',
                    data: [65, 70, 75, 80, 85, 90],
                    borderColor: '#8b5cf6',
                    backgroundColor: 'rgba(139, 92, 246, 0.1)',
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        min: 60,
                        max: 100,
                        grid: { display: false }
                    },
                    x: {
                        grid: { display: false }
                    }
                }
            }
        });
    }
}

function openImageModal(src, alt) {
    // Create modal
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4';
    modal.innerHTML = `
        <div class="relative max-w-4xl max-h-full">
            <img src="${src}" alt="${alt}" class="max-w-full max-h-full rounded-lg">
            <button class="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75 transition-colors">
                ✕
            </button>
        </div>
    `;
    
    // Close modal functionality
    modal.addEventListener('click', function(e) {
        if (e.target === modal || e.target.textContent === '✕') {
            document.body.removeChild(modal);
        }
    });
    
    document.body.appendChild(modal);
}
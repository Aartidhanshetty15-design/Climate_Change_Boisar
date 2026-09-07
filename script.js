// Climate Change Website with Analytics

console.log("Climate Change Impact Analysis Dashboard Loaded");

// Navigation animation
document.querySelectorAll("nav a").forEach(function(link) {
    link.addEventListener("click", function() {
        console.log("Opening section: " + link.textContent);
    });
});

// Initialize all charts when page loads
window.addEventListener('load', function() {
    initializeTemperatureChart();
    initializeRainfallChart();
    initializeWaterChart();
    initializeAirQualityChart();
    initializeComparisonChart();
    initializeSeasonalChart();
});

// Temperature Chart - Line Chart
function initializeTemperatureChart() {
    const ctx = document.getElementById('temperatureChart');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Average Temperature (°C)',
                data: [25, 27, 30, 32, 34, 36, 38, 37, 35, 32, 28, 26],
                borderColor: '#ef4444',
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointRadius: 5,
                pointBackgroundColor: '#ef4444',
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointHoverRadius: 7
            }, {
                label: 'Historical Average (°C)',
                data: [24, 25, 28, 30, 31, 33, 34, 34, 33, 30, 27, 25],
                borderColor: '#3b82f6',
                backgroundColor: 'rgba(59, 130, 246, 0.05)',
                borderWidth: 2,
                borderDash: [5, 5],
                fill: false,
                tension: 0.4,
                pointRadius: 3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        boxWidth: 15,
                        padding: 15,
                        font: { size: 12 }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    min: 20,
                    max: 40,
                    title: { display: true, text: 'Temperature (°C)' }
                }
            }
        }
    });
}

// Rainfall Chart - Bar Chart
function initializeRainfallChart() {
    const ctx = document.getElementById('rainfallChart');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Rainfall (mm)',
                data: [12, 18, 35, 42, 65, 120, 180, 165, 140, 85, 35, 18],
                backgroundColor: [
                    '#3b82f6', '#3b82f6', '#60a5fa', '#60a5fa', '#93c5fd',
                    '#0369a1', '#0369a1', '#0369a1', '#0369a1', '#60a5fa',
                    '#60a5fa', '#3b82f6'
                ],
                borderColor: '#1e40af',
                borderWidth: 1,
                borderRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: true,
                    labels: { font: { size: 12 } }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: { display: true, text: 'Rainfall (mm)' }
                }
            }
        }
    });
}

// Water Availability - Gauge/Doughnut Chart
function initializeWaterChart() {
    const ctx = document.getElementById('waterChart');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Available', 'Stressed', 'Critical'],
            datasets: [{
                data: [62, 28, 10],
                backgroundColor: [
                    '#10b981',
                    '#f59e0b',
                    '#ef4444'
                ],
                borderColor: '#fff',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom',
                    labels: { font: { size: 12 }, padding: 15 }
                }
            }
        }
    });
}

// Air Quality Distribution - Pie Chart
function initializeAirQualityChart() {
    const ctx = document.getElementById('airQualityChart');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Good', 'Moderate', 'Poor', 'Very Poor'],
            datasets: [{
                data: [15, 35, 35, 15],
                backgroundColor: [
                    '#10b981',
                    '#eab308',
                    '#f97316',
                    '#ef4444'
                ],
                borderColor: '#fff',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom',
                    labels: { font: { size: 12 }, padding: 15 }
                }
            }
        }
    });
}

// Year-over-Year Comparison - Bar Chart
function initializeComparisonChart() {
    const ctx = document.getElementById('comparisonChart');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: '2024 Temperature',
                data: [25, 27, 30, 32, 34, 36, 38, 37, 35, 32, 28, 26],
                backgroundColor: '#ef4444',
                borderRadius: 5
            }, {
                label: '2023 Temperature',
                data: [24, 26, 28, 31, 33, 35, 36, 36, 34, 31, 27, 25],
                backgroundColor: '#3b82f6',
                borderRadius: 5
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: { font: { size: 12 }, padding: 15 }
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    min: 20,
                    max: 40
                }
            }
        }
    });
}

// Seasonal Climate Patterns - Radar Chart
function initializeSeasonalChart() {
    const ctx = document.getElementById('seasonalChart');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Temperature', 'Rainfall', 'Humidity', 'Wind Speed', 'Air Quality'],
            datasets: [{
                label: 'Summer',
                data: [95, 40, 55, 35, 45],
                borderColor: '#ef4444',
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                borderWidth: 2,
                pointBackgroundColor: '#ef4444'
            }, {
                label: 'Monsoon',
                data: [65, 95, 90, 70, 35],
                borderColor: '#3b82f6',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                borderWidth: 2,
                pointBackgroundColor: '#3b82f6'
            }, {
                label: 'Winter',
                data: [35, 25, 40, 55, 60],
                borderColor: '#10b981',
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                borderWidth: 2,
                pointBackgroundColor: '#10b981'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom',
                    labels: { font: { size: 12 }, padding: 15 }
                }
            },
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
}

// Smooth scroll behavior for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll reveal animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.metric-card, .analysis-card, .card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

console.log("Dashboard initialized successfully");
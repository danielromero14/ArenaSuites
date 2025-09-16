// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Smooth scroll for navigation links
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

    // Header scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;
        const header = document.querySelector('.header');
        
        if (currentScroll <= 0) {
            header.style.boxShadow = 'none';
        } else {
            header.style.boxShadow = 'var(--shadow-md)';
        }
        
        lastScroll = currentScroll;
    });

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });

    // Form validation
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple validation
            const inputs = this.querySelectorAll('input[required], textarea[required]');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    input.style.borderColor = '#ef4444';
                    isValid = false;
                } else {
                    input.style.borderColor = '';
                }
            });
            
            if (isValid) {
                // Show success message
                alert('¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.');
                this.reset();
            }
        });
    }

    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            if (email) {
                alert('¡Gracias por suscribirte! Recibirás nuestras ofertas especiales.');
                this.reset();
            }
        });
    }

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe room cards
    document.querySelectorAll('.room-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });

    // Observe amenity cards
    document.querySelectorAll('.amenity-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });

    // Gallery Carousel Logic
    const track = document.querySelector('.gallery-carousel-track');
    const items = Array.from(track.children);
    const nextButton = document.querySelector('.carousel-nav-next');
    const prevButton = document.querySelector('.carousel-nav-prev');

    let currentIndex = 0;
    const itemsPerView = 4;
    const totalItems = items.length;

    nextButton.addEventListener('click', () => {
        if (currentIndex < totalItems - itemsPerView) {
            currentIndex++;
            updateCarousel();
        }
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    function updateCarousel() {
        const itemWidth = items[0].getBoundingClientRect().width;
        const gap = 16; // 1rem gap
        const moveAmount = (itemWidth + gap) * currentIndex;
        track.style.transform = `translateX(-${moveAmount}px)`;
    }

    // Recalculate on resize
    window.addEventListener('resize', updateCarousel);
});

// Google Maps initialization
function initMap() {
    // Coordinates for Carrera 30 No. 63-57 Bogotá, Colombia
    const arenaSuitesLocation = { lat: 4.652594284550544, lng: -74.07891573349986 };

    // Map options
    const mapOptions = {
        zoom: 15,
        center: arenaSuitesLocation,
        styles: [
            {
                "featureType": "all",
                "elementType": "geometry.fill",
                "stylers": [{"weight": "2.00"}]
            },
            {
                "featureType": "all",
                "elementType": "geometry.stroke",
                "stylers": [{"color": "#9c9c9c"}]
            },
            {
                "featureType": "all",
                "elementType": "labels.text",
                "stylers": [{"visibility": "on"}]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [{"color": "#f2f2f2"}]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [{"visibility": "off"}]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {"saturation": -100},
                    {"lightness": 45}
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [{"visibility": "simplified"}]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {"color": "#c5a572"}, // Using new accent color for water
                    {"visibility": "on"}
                ]
            }
        ]
    };

    // Create map
    const map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Custom marker for Arena Suites
    const marker = new google.maps.Marker({
        position: arenaSuitesLocation,
        map: map,
        title: 'Arena Suites',
        animation: google.maps.Animation.DROP,
        icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 10,
            fillColor: "#4a3f35", // Using new primary color
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeWeight: 2
        }
    });

    // Info window for Arena Suites
    const infoWindow = new google.maps.InfoWindow({
        content: `
            <div style="padding: 10px;">
                <h4 style="margin: 0 0 5px 0; color: #4a3f35;">Arena Suites</h4>
                <p style="margin: 0;">Carrera 30 #63-57<br>Bogotá, Colombia</p>
            </div>
        `
    });

    marker.addListener('click', function() {
        infoWindow.open(map, marker);
    });

    // Points of Interest with strategic value
    const pointsOfInterest = [
        {
            position: { lat: 4.649224, lng: -74.077376 },
            title: 'Movistar Arena',
            category: 'entertainment',
            description: 'Centro de eventos y espectáculos.',
            icon: '🏟️',
            color: '#c5a572' // Using new accent color
        },
        {
            position: { lat: 4.645833, lng: -74.0775 },
            title: 'Estadio El Campín',
            category: 'sports',
            description: 'Principal estadio de fútbol de Bogotá.',
            icon: '⚽',
            color: '#4a3f35' // Using new primary color
        }
    ];

    // Add markers for points of interest
    pointsOfInterest.forEach(poi => {
        const poiMarker = new google.maps.Marker({
            position: poi.position,
            map: map,
            title: poi.title,
            icon: {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 8,
                fillColor: poi.color,
                fillOpacity: 0.9,
                strokeColor: "#ffffff",
                strokeWeight: 2
            }
        });

        const poiInfoWindow = new google.maps.InfoWindow({
            content: `
                <div style="padding: 10px; max-width: 200px;">
                    <h4 style="margin: 0 0 5px 0; color: ${poi.color};">${poi.icon} ${poi.title}</h4>
                    <p style="margin: 0; font-size: 13px;">${poi.description}</p>
                </div>
            `
        });

        poiMarker.addListener('click', function() {
            poiInfoWindow.open(map, poiMarker);
        });
    });
}

// Lazy loading for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    
    const imageOptions = {
        threshold: 0,
        rootMargin: '0px 0px 300px 0px'
    };
    
    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '1';
                imageObserver.unobserve(img);
            }
        });
    }, imageOptions);
    
    images.forEach(img => {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.5s ease-in-out';
        imageObserver.observe(img);
    });
});
// Particles.js configuration
particlesJS("particles-js",
  {
    "particles": {
      "number": {
        "value": 10,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#1b1e34"
      },
      "shape": {
        "type": "polygon",
        "stroke": {
          "width": 0,
          "color": "#000"
        },
        "polygon": {
          "nb_sides": 6
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 160,
        "random": false,
        "anim": {
          "enable": true,
          "speed": 10,
          "size_min": 40,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 200,
        "color": "#ffffff",
        "opacity": 1,
        "width": 2
      },
      "move": {
        "enable": true,
        "speed": 8,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "bubble"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 312,
          "size": 56,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }
)

// Carousel functionality
document.addEventListener('DOMContentLoaded', function() {
  const carousel = {
    currentSlide: 0,
    slides: document.querySelectorAll('.outline-avatar'),
    indicators: document.querySelectorAll('.indicator'),
    prevBtn: document.querySelector('.carousel-prev'),
    nextBtn: document.querySelector('.carousel-next'),
    slideContainer: document.querySelector('.carousel-slides'),
    totalSlides: 0,

    init() {
      this.totalSlides = this.slides.length;
      if (this.totalSlides === 0) return;

      // Add event listeners
      if (this.prevBtn) this.prevBtn.addEventListener('click', () => this.prevSlide());
      if (this.nextBtn) this.nextBtn.addEventListener('click', () => this.nextSlide());
      
      this.indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => this.goToSlide(index));
      });

      // Add touch/swipe support for mobile
      this.addTouchSupport();

      // Auto-play functionality (optional)
      this.startAutoPlay();
    },

    goToSlide(slideIndex) {
      // Remove active class from current slide and indicator
      this.slides[this.currentSlide].classList.remove('active');
      this.indicators[this.currentSlide].classList.remove('active');

      // Update current slide
      this.currentSlide = slideIndex;

      // Add active class to new slide and indicator
      this.slides[this.currentSlide].classList.add('active');
      this.indicators[this.currentSlide].classList.add('active');
    },

    nextSlide() {
      const nextIndex = (this.currentSlide + 1) % this.totalSlides;
      this.goToSlide(nextIndex);
    },

    prevSlide() {
      const prevIndex = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
      this.goToSlide(prevIndex);
    },

    addTouchSupport() {
      if (!this.slideContainer) return;

      let startX = 0;
      let isDragging = false;

      this.slideContainer.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isDragging = true;
      });

      this.slideContainer.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        e.preventDefault(); // Prevent scrolling
      });

      this.slideContainer.addEventListener('touchend', (e) => {
        if (!isDragging) return;
        isDragging = false;

        const endX = e.changedTouches[0].clientX;
        const diff = startX - endX;
        const threshold = 50; // Minimum distance for swipe

        if (Math.abs(diff) > threshold) {
          if (diff > 0) {
            this.nextSlide(); // Swipe left - next slide
          } else {
            this.prevSlide(); // Swipe right - previous slide
          }
        }
      });
    },

    startAutoPlay() {
      // Optional: Auto-advance slides every 5 seconds
      setInterval(() => {
        if (this.totalSlides > 1) {
          this.nextSlide();
        }
      }, 5000);
    }
  };

  // Initialize carousel
  carousel.init();
});
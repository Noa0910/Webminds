// Modern JavaScript for enhanced UX and interactions
document.addEventListener('DOMContentLoaded', function() {
  // Initialize all modern features
  initNavigation();
  initScrollEffects();
  initAnimations();
  initFormEnhancements();
  initYearUpdater();
  initLoadingStates();
  initAccessibility();
});

// Modern Navigation with smooth animations
function initNavigation() {
  const navToggles = document.querySelectorAll('[id^="nav-toggle"]');
  const header = document.querySelector('.site-header');
  
  // Mobile navigation toggle
  navToggles.forEach(toggle => {
    toggle.addEventListener('click', function() {
      const parent = this.parentElement;
      const nav = parent.querySelector('.main-nav');
      
      if (nav) {
        nav.classList.toggle('active');
        this.setAttribute('aria-expanded', nav.classList.contains('active'));
        
        // Animate hamburger icon
        const icon = this.querySelector('i');
        if (icon) {
          icon.classList.toggle('fa-bars');
          icon.classList.toggle('fa-times');
        }
      }
    });
  });

  // Header scroll effect
  let lastScrollY = window.scrollY;
  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    lastScrollY = currentScrollY;
  });

  // Close mobile nav when clicking outside
  document.addEventListener('click', (e) => {
    const nav = document.querySelector('.main-nav');
    const toggle = document.querySelector('[id^="nav-toggle"]');
    
    if (nav && nav.classList.contains('active') && 
        !nav.contains(e.target) && 
        !toggle.contains(e.target)) {
      nav.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// Smooth scroll effects and parallax
function initScrollEffects() {
  // Smooth scrolling for anchor links
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

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe elements for animation
  document.querySelectorAll('.card, .service, .case, .team-card').forEach(el => {
    observer.observe(el);
  });
}

// Enhanced animations and micro-interactions
function initAnimations() {
  // Card hover effects
  document.querySelectorAll('.card, .service, .case').forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });

  // Button ripple effect
  document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
      `;
      
      this.style.position = 'relative';
      this.style.overflow = 'hidden';
      this.appendChild(ripple);
      
      setTimeout(() => ripple.remove(), 600);
    });
  });

  // Add ripple animation CSS
  const style = document.createElement('style');
  style.textContent = `
    @keyframes ripple {
      to {
        transform: scale(2);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
}

// Enhanced form handling
function initFormEnhancements() {
  const forms = document.querySelectorAll('form');
  
  forms.forEach(form => {
    const inputs = form.querySelectorAll('input, textarea');
    
    // Add floating label effect
    inputs.forEach(input => {
      input.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
      });
      
      input.addEventListener('blur', function() {
        if (!this.value) {
          this.parentElement.classList.remove('focused');
        }
      });
      
      // Check if input has value on load
      if (input.value) {
        input.parentElement.classList.add('focused');
      }
    });
    
    // Form validation
    form.addEventListener('submit', function(e) {
      if (!validateForm(this)) {
        e.preventDefault();
        showFormError('Por favor, completa todos los campos requeridos.');
      }
    });
  });
}

// Form validation
function validateForm(form) {
  const requiredFields = form.querySelectorAll('[required]');
  let isValid = true;
  
  requiredFields.forEach(field => {
    if (!field.value.trim()) {
      field.classList.add('error');
      isValid = false;
    } else {
      field.classList.remove('error');
    }
  });
  
  return isValid;
}

// Show form error message
function showFormError(message) {
  // Remove existing error messages
  document.querySelectorAll('.form-error').forEach(el => el.remove());
  
  const errorDiv = document.createElement('div');
  errorDiv.className = 'form-error';
  errorDiv.style.cssText = `
    background: #fee2e2;
    color: #dc2626;
    padding: 12px;
    border-radius: 8px;
    margin: 16px 0;
    border-left: 4px solid #dc2626;
    font-size: 14px;
  `;
  errorDiv.textContent = message;
  
  const form = document.querySelector('form');
  if (form) {
    form.insertBefore(errorDiv, form.firstChild);
    
    // Auto-remove after 5 seconds
    setTimeout(() => errorDiv.remove(), 5000);
  }
}

// Update year in footers
function initYearUpdater() {
  const currentYear = new Date().getFullYear();
  const yearElements = document.querySelectorAll('[id^="year"]');
  
  yearElements.forEach(el => {
    el.textContent = currentYear;
  });
}

// Loading states and performance
function initLoadingStates() {
  // Add loading class to body initially
  document.body.classList.add('loading');
  
  // Remove loading class when page is fully loaded
  window.addEventListener('load', () => {
    document.body.classList.remove('loading');
    
    // Add fade-in animation to main content
    const mainContent = document.querySelector('main, .hero');
    if (mainContent) {
      mainContent.classList.add('fade-in');
    }
  });
}

// Accessibility enhancements
function initAccessibility() {
  // Skip to main content link
  const skipLink = document.createElement('a');
  skipLink.href = '#main-content';
  skipLink.textContent = 'Saltar al contenido principal';
  skipLink.className = 'skip-link';
  skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 6px;
    background: #000;
    color: #fff;
    padding: 8px;
    text-decoration: none;
    z-index: 1000;
    transition: top 0.3s;
  `;
  
  skipLink.addEventListener('focus', function() {
    this.style.top = '6px';
  });
  
  skipLink.addEventListener('blur', function() {
    this.style.top = '-40px';
  });
  
  document.body.insertBefore(skipLink, document.body.firstChild);
  
  // Add main content ID
  const mainContent = document.querySelector('main, .hero');
  if (mainContent) {
    mainContent.id = 'main-content';
  }
  
  // Keyboard navigation for cards
  document.querySelectorAll('.card, .service, .case').forEach(card => {
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    
    card.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
      }
    });
  });
}

// Enhanced contact form handler
function handleFormSubmit(e) {
  e.preventDefault();
  
  const form = e.target;
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  
  // Show loading state
  submitBtn.textContent = 'Enviando...';
  submitBtn.disabled = true;
  submitBtn.classList.add('loading');
  
  // Simulate form submission
  setTimeout(() => {
    // Show success message
    showSuccessMessage('¡Mensaje enviado correctamente! Te responderemos pronto.');
    
    // Reset form
    form.reset();
    
    // Reset button
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
    submitBtn.classList.remove('loading');
  }, 2000);
}

// Show success message
function showSuccessMessage(message) {
  const successDiv = document.createElement('div');
  successDiv.className = 'form-success';
  successDiv.style.cssText = `
    background: #d1fae5;
    color: #065f46;
    padding: 16px;
    border-radius: 8px;
    margin: 16px 0;
    border-left: 4px solid #10b981;
    font-size: 14px;
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1000;
    max-width: 300px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  `;
  successDiv.textContent = message;
  
  document.body.appendChild(successDiv);
  
  // Auto-remove after 5 seconds
  setTimeout(() => successDiv.remove(), 5000);
}

// Utility function for smooth animations
function animateElement(element, animationClass, duration = 600) {
  element.classList.add(animationClass);
  setTimeout(() => {
    element.classList.remove(animationClass);
  }, duration);
}

// Image loading optimization
function initImageLoading() {
  // Lazy loading for images
  const images = document.querySelectorAll('img[loading="lazy"]');
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.style.opacity = '1';
          observer.unobserve(img);
        }
      });
    });

    images.forEach(img => {
      imageObserver.observe(img);
    });
  } else {
    // Fallback for browsers without IntersectionObserver
    images.forEach(img => {
      img.style.opacity = '1';
    });
  }

  // Handle image load errors
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
      this.style.background = 'var(--gray-100)';
      this.style.border = '2px dashed var(--gray-300)';
      this.style.display = 'flex';
      this.style.alignItems = 'center';
      this.style.justifyContent = 'center';
      this.style.minHeight = '200px';
    });

    img.addEventListener('load', function() {
      this.style.opacity = '1';
      this.classList.add('loaded');
    });
  });
}

// Preload critical images
function preloadCriticalImages() {
  const criticalImages = [
    'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80'
  ];

  criticalImages.forEach(src => {
    const img = new Image();
    img.src = src;
  });
}

// Update the main initialization
document.addEventListener('DOMContentLoaded', function() {
  // Initialize all modern features
  initNavigation();
  initScrollEffects();
  initAnimations();
  initFormEnhancements();
  initYearUpdater();
  initLoadingStates();
  initAccessibility();
  initImageLoading();
  preloadCriticalImages();
});

// Export functions for global access
window.handleFormSubmit = handleFormSubmit;

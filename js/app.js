class ScrollRevealManager {
  constructor(selector = '.reveal', options = { threshold: 0.1 }) {
    this.targets = document.querySelectorAll(selector);
    this.observer = new IntersectionObserver(this.handleIntersect.bind(this), options);
  }

  handleIntersect(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        this.observer.unobserve(entry.target);
      }
    });
  }

  init() {
    this.targets.forEach(el => this.observer.observe(el));
  }
}

class MobileMenu {
  constructor() {
    this.hamburger = document.getElementById('hamburger');
    this.navLinks = document.querySelector('.nav-links');
    this.isOpen = false;
    this.init();
  }

  openMenu() {
    this.navLinks.style.display = 'flex';
    this.navLinks.style.flexDirection = 'column';
    this.navLinks.style.position = 'absolute';
    this.navLinks.style.top = '64px';
    this.navLinks.style.left = '0';
    this.navLinks.style.right = '0';
    this.navLinks.style.background = 'rgba(10,14,26,0.97)';
    this.navLinks.style.padding = '1rem 5%';
    this.navLinks.style.borderBottom = '1px solid rgba(59,130,246,0.15)';
    this.isOpen = true;
  }

  closeMenu() {
    this.navLinks.style.display = 'none';
    this.isOpen = false;
  }

  toggleMenu() {
    if (this.isOpen) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  }

  init() {
    if (!this.hamburger || !this.navLinks) return;

    this.hamburger.addEventListener('click', () => this.toggleMenu());
    this.hamburger.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        this.toggleMenu();
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        this.navLinks.style.display = 'flex';
        this.navLinks.style.position = '';
      } else if (!this.isOpen) {
        this.navLinks.style.display = 'none';
      }
    });
  }
}

class ActiveSectionHighlighter {
  constructor() {
    this.sections = document.querySelectorAll('section[id]');
    this.links = document.querySelectorAll('.nav-links a');
    this.init();
  }

  handleScroll() {
    let current = '';
    this.sections.forEach(section => {
      if (window.scrollY >= section.offsetTop - 80) {
        current = section.id;
      }
    });

    this.links.forEach(link => {
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  init() {
    if (!this.sections.length || !this.links.length) return;
    window.addEventListener('scroll', this.handleScroll.bind(this));
    this.handleScroll();
  }
}

class ContactFormHandler {
  constructor(submitBtnId = 'submitBtn') {
    this.submitBtn = document.getElementById(submitBtnId);
    this.init();
  }

  handleSubmit(event) {
    event.preventDefault();
    if (!this.submitBtn) return;

    this.submitBtn.textContent = '✓ Message Sent!';
    this.submitBtn.style.background = 'linear-gradient(135deg,#22c55e,#16a34a)';
    this.submitBtn.disabled = true;

    setTimeout(() => {
      this.submitBtn.textContent = 'Send Message →';
      this.submitBtn.style.background = '';
      this.submitBtn.disabled = false;
    }, 3000);
  }

  init() {
    if (!this.submitBtn) return;

    const form = this.submitBtn.closest('.contact-form');
    if (form) {
      form.addEventListener('submit', this.handleSubmit.bind(this));
    }

    this.submitBtn.addEventListener('click', this.handleSubmit.bind(this));
  }
}

class PortfolioApp {
  constructor() {
    this.scrollReveal = new ScrollRevealManager();
    this.mobileMenu = new MobileMenu();
    this.highlighter = new ActiveSectionHighlighter();
    this.contactForm = new ContactFormHandler();
  }

  init() {
    this.scrollReveal.init();
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const app = new PortfolioApp();
  app.init();
});

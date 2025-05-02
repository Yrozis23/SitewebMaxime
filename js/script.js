// ========== MENU BURGER ==========
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Smooth scroll + close menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    navLinks.classList.remove('active');
  });
});

// ========== FORM SUBMISSION ==========
emailjs.init('gjf0mTj4P9urdW7Cz');
const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Vérification reCAPTCHA
  const recaptchaResponse = grecaptcha.getResponse();
  if (!recaptchaResponse) {
    showFormMessage('Merci de valider le reCAPTCHA avant d’envoyer votre message.', 'error');
    return;
  }

  // Récupération des services cochés
  const checkedServices = [...document.querySelectorAll('input[name="services[]"]:checked')]
    .map(el => el.value)
    .join(', ');

  // Préparer les données à envoyer
  const formData = {
    user_name: document.getElementById('user_name').value,
    user_email: document.getElementById('user_email').value,
    user_phone: document.getElementById('user_phone').value,
    message: document.getElementById('message').value,
    services: checkedServices
  };

  document.getElementById('form-loader').style.display = 'flex';

  emailjs.send('service_2k763zp', 'template_x7s9l7p', formData)
    .then(() => {
      showFormMessage('Message envoyé ! Merci 😊', 'success');
      form.reset();
      grecaptcha.reset();
    }, (error) => {
      showFormMessage('Erreur lors de l’envoi du message. Veuillez réessayer.', 'error');
      console.error(error);
    })
    .finally(() => {
      document.getElementById('form-loader').style.display = 'none';
    });

});

function showFormMessage(text, type) {
  const toast = document.getElementById('toast');
  toast.textContent = text;
  toast.className = 'toast show ' + type;

  setTimeout(() => {
    toast.className = 'toast';
  }, 5000);
}

// ========== DARK MODE TOGGLE ==========
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const themeToggleMobile = document.getElementById('theme-toggle-mobile');
const themeIconMobile = document.getElementById('theme-icon-mobile');

function applyTheme(isDark) {
  document.body.classList.toggle('dark-mode', isDark);
  const icon = isDark ? '☀️' : '🌙';
  themeIcon.textContent = icon;
  themeIconMobile.textContent = icon;
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme) applyTheme(savedTheme === 'dark');

themeToggle?.addEventListener('click', () => {
  applyTheme(!document.body.classList.contains('dark-mode'));
});
themeToggleMobile?.addEventListener('click', (e) => {
  e.preventDefault();
  applyTheme(!document.body.classList.contains('dark-mode'));
});

// ========== SCROLL TO TOP ==========
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', () => {
  scrollToTopBtn.classList.toggle('show', window.scrollY > 300);
});

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ========== SCROLL REVEAL ==========
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  reveals.forEach((img) => {
    const elementTop = img.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      img.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ========== LIGHTBOX FUNCTIONALITY ==========
const images = document.querySelectorAll('.gallery img');
const lightbox = document.createElement('div');
lightbox.classList.add('lightbox');
document.body.appendChild(lightbox);

const closeBtn = document.createElement('div');
closeBtn.classList.add('lightbox-close');
closeBtn.innerHTML = '&times;';
lightbox.appendChild(closeBtn);

const lightboxImg = document.createElement('img');
lightbox.appendChild(lightboxImg);

images.forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightbox.classList.add('active');
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.classList.remove('active');
});

lightbox.addEventListener('click', (e) => {
  if (e.target !== lightboxImg && e.target !== closeBtn) {
    lightbox.classList.remove('active');
  }
});

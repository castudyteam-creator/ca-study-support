// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) target.scrollIntoView({behavior:'smooth'});
  });
});

// Dropdown toggle for mobile
document.querySelectorAll('.dropdown > a').forEach(el => {
  el.addEventListener('click', e => {
    if(window.innerWidth <= 768){
      e.preventDefault();
      el.parentElement.classList.toggle('active');
    }
  });
});

// Hamburger menu toggle
document.querySelector('.hamburger').addEventListener('click', () => {
  document.querySelector('.nav-list').classList.toggle('active');
});

// Staggered fade-in for cards
const allCards = document.querySelectorAll('.card');
const fadeOnScroll = () => {
  allCards.forEach((card, index) => {
    const rect = card.getBoundingClientRect();
    if(rect.top < window.innerHeight - 50){
      setTimeout(() => { card.classList.add('visible'); }, index * 150);
    }
  });
};
window.addEventListener('scroll', fadeOnScroll);
window.addEventListener('load', fadeOnScroll);

// Card hover effect (scale + shadow)
allCards.forEach(card => {
  card.addEventListener('mouseenter', () => card.style.transform = 'scale(1.03)');
  card.addEventListener('mouseleave', () => card.style.transform = '');
});

// Contact form submission via Formspree
const form = document.getElementById('contact-form');
const feedback = document.getElementById('form-feedback');

form.addEventListener('submit', async function(e){
  e.preventDefault();
  const formData = new FormData(form);
  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: { 'Accept': 'application/json' }
    });
    if(response.ok){
      feedback.textContent = "Message sent! We'll get back to you soon.";
      feedback.style.color = "green";
      form.reset();
    } else {
      feedback.textContent = "Oops! Something went wrong. Please try again.";
      feedback.style.color = "red";
    }
  } catch (error) {
    feedback.textContent = "Network error. Please try again later.";
    feedback.style.color = "red";
  }
});


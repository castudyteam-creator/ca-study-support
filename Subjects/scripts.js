// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) target.scrollIntoView({behavior:'smooth'});
  });
});

// Mobile dropdown toggle
const dropdowns = document.querySelectorAll('.dropdown > a');
dropdowns.forEach(el => {
  el.addEventListener('click', e => {
    if(window.innerWidth <= 768){
      e.preventDefault();
      el.parentElement.classList.toggle('active');
    }
  });
});

// Close mobile dropdown when clicking outside
document.addEventListener('click', (e) => {
  if(!e.target.closest('.dropdown') && !e.target.closest('.dropdown-content')){
    document.querySelectorAll('.dropdown.active').forEach(drop => drop.classList.remove('active'));
  }
});

// Staggered fade-in for cards with debounce
const allCards = document.querySelectorAll('.card');
const fadeOnScroll = () => {
  allCards.forEach((card, index) => {
    const rect = card.getBoundingClientRect();
    if(rect.top < window.innerHeight - 50){
      setTimeout(()=>{ card.classList.add('visible'); }, index * 150);
    }
  });
};
let scrollTimeout;
window.addEventListener('scroll', () => {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(fadeOnScroll, 100);
});
window.addEventListener('load', fadeOnScroll);

// Contact form submission
const form = document.getElementById('contact-form');
const feedback = document.getElementById('form-feedback');

form.addEventListener('submit', async function(e){
  e.preventDefault();
  const formData = new FormData(form);
  feedback.textContent = "Sending...";
  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: { 'Accept': 'application/json' }
    });
    if(response.ok){
      feedback.textContent = "Message sent! We'll get back to you soon.";
      form.reset();
    } else {
      feedback.textContent = "Oops! Something went wrong. Please try again.";
    }
  } catch {
    feedback.textContent = "Network error. Please try again later.";
  }
});

// Hamburger toggle
document.querySelector('.hamburger').addEventListener('click', () => {
  document.querySelector('.nav-list').classList.toggle('active');
});

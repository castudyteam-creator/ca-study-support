// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
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

// Staggered fade-in for cards
const allCards = document.querySelectorAll('.card');
const fadeOnScroll = () => {
  allCards.forEach((card, index) => {
    const rect = card.getBoundingClientRect();
    if(rect.top < window.innerHeight - 50){
      setTimeout(()=>{ card.classList.add('visible'); }, index * 150);
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
      alert("Message sent! We'll get back to you soon.");
      form.reset();
    } else {
      alert("Oops! Something went wrong. Please try again.");
    }
  } catch (error) {
    alert("Network error. Please try again later.");
  }
});

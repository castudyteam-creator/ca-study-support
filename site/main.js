// ===== Smooth scroll for internal links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ===== Dropdown toggle for mobile =====
document.querySelectorAll('.dropdown > a').forEach(el => {
  el.addEventListener('click', e => {
    if(window.innerWidth <= 768){
      e.preventDefault();
      el.parentElement.classList.toggle('active');
    }
  });
});

// ===== Fade-in for cards and subject buttons =====
const fadeElements = document.querySelectorAll('.card, .subject-button, .button-bordered');
const fadeOnScroll = () => {
  fadeElements.forEach((el, index) => {
    const rect = el.getBoundingClientRect();
    if(rect.top < window.innerHeight - 50){
      setTimeout(()=>{ el.classList.add('visible'); }, index * 150);
    }
  });
};
window.addEventListener('scroll', fadeOnScroll);
window.addEventListener('load', fadeOnScroll);

// ===== Card hover effect (scale + shadow) =====
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mouseenter', () => card.style.transform = 'scale(1.03)');
  card.addEventListener('mouseleave', () => card.style.transform = '');
});

// ===== Contact form submission via Formspree =====
const form = document.getElementById('contact-form');
if(form) {
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
}

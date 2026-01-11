// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Dropdown toggle for mobile
document.querySelectorAll('.dropdown > a').forEach(el => {
  el.addEventListener('click', e => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      el.parentElement.classList.toggle('active');
    }
  });
});

// Fade-in animation
const fadeElements = document.querySelectorAll('.card, .subject-button');
const fadeOnScroll = () => {
  fadeElements.forEach((el, i) => {
    if (el.getBoundingClientRect().top < window.innerHeight - 50) {
      setTimeout(() => el.classList.add('visible'), i * 120);
    }
  });
};
window.addEventListener('scroll', fadeOnScroll);
window.addEventListener('load', fadeOnScroll);

// Contact form
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const res = await fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    });
    alert(res.ok ? "Message sent!" : "Something went wrong.");
    if (res.ok) form.reset();
  });
}

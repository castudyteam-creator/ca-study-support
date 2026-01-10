// Fade-in for subject buttons
const allButtons = document.querySelectorAll('.subject-button');
const fadeButtons = () => {
  allButtons.forEach((btn, index) => {
    const rect = btn.getBoundingClientRect();
    if(rect.top < window.innerHeight - 50){
      setTimeout(()=>{ btn.classList.add('visible'); }, index * 100);
    }
  });
};
window.addEventListener('scroll', fadeButtons);
window.addEventListener('load', fadeButtons);

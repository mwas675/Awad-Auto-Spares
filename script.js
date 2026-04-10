/* ============================================
   AWARD AUTO SPARE SHOP — script.js
   ============================================ */

/* Smooth scroll for all anchor links */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

/* Contact form submit handler */
function handleSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById('submit-btn');
  btn.textContent = 'Enquiry Sent!';
  btn.style.background = '#27ae60';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = 'Send Enquiry';
    btn.style.background = '';
    btn.disabled = false;
    e.target.reset();
  }, 3000);
}

/* Fade-in on scroll for cards */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.product-card, .why-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

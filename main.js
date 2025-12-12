// main.js — Dark mode toggle, contact demo, and small helpers
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtns = document.querySelectorAll('#toggleDark');
  const body = document.body;
  const navbar = document.querySelector('.navbar');
  const cards = document.querySelectorAll('.card, .project-card');
  const sections = document.querySelectorAll('.section-title');
  const footer = document.querySelector('.footer');
  const cta = document.querySelector('.cta-section');

  // Apply saved theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    applyDark(true);
  } else {
    applyDark(false);
  }

  // attach to all toggle buttons (in case multiple copies exist across pages)
  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const isDark = body.classList.toggle('dark-mode');
      navbar && navbar.classList.toggle('dark-mode');
      cards.forEach(c => c.classList.toggle('dark-mode'));
      sections.forEach(s => s.classList.toggle('dark-mode'));
      footer && footer.classList.toggle('dark-mode');
      cta && cta.classList.toggle('dark-mode');
      toggleBtns.forEach(b => b.textContent = isDark ? 'Light Mode' : 'Dark Mode');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  });

  function applyDark(enable){
    if(enable){
      body.classList.add('dark-mode');
      navbar && navbar.classList.add('dark-mode');
      cards.forEach(c => c.classList.add('dark-mode'));
      sections.forEach(s => s.classList.add('dark-mode'));
      footer && footer.classList.add('dark-mode');
      cta && cta.classList.add('dark-mode');
      toggleBtns.forEach(b => b.textContent = 'Light Mode');
    } else {
      body.classList.remove('dark-mode');
      navbar && navbar.classList.remove('dark-mode');
      cards.forEach(c => c.classList.remove('dark-mode'));
      sections.forEach(s => s.classList.remove('dark-mode'));
      footer && footer.classList.remove('dark-mode');
      cta && cta.classList.remove('dark-mode');
      toggleBtns.forEach(b => b.textContent = 'Dark Mode');
    }
  }

  // Contact form demo (no backend) — shows an alert and clears the form
  const contactForm = document.getElementById('contactForm');
  const sendBtn = document.getElementById('sendBtn');
  const contactAlert = document.getElementById('contactAlert');

  if (sendBtn && contactForm) {
    sendBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const name = document.getElementById('name')?.value?.trim();
      const email = document.getElementById('email')?.value?.trim();
      const message = document.getElementById('message')?.value?.trim();

      if (!name || !email || !message) {
        showAlert('Please fill in all fields before sending.', 'danger');
        return;
      }

      // demo success
      showAlert('Message sent (demo). I will respond via email if this were live.', 'success');
      contactForm.reset();
    });
  }

  function showAlert(text, type='info') {
    if (!contactAlert) return;
    contactAlert.className = `alert alert-${type} mt-3`;
    contactAlert.textContent = text;
    // auto-hide
    setTimeout(() => {
      contactAlert.classList.add('d-none');
    }, 4000);
    contactAlert.classList.remove('d-none');
  }
});

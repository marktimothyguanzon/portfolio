// Select the dark mode toggle button
const toggleBtn = document.getElementById('darkModeBtn');

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Toggle dark mode for header, footer, hero
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelector('footer').classList.toggle('dark-mode');
    document.querySelector('.hero').classList.toggle('dark-mode');

    // Save preference
    if(document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// Load preference on page load
window.addEventListener('load', () => {
    if(localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        document.querySelector('header').classList.add('dark-mode');
        document.querySelector('footer').classList.add('dark-mode');
        document.querySelector('.hero').classList.add('dark-mode');
    }
});


// FIle for Mobile Menu interaction
const menuBtn = document.querySelector('.toggle-btn');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener('click', () => {
  overlay.classList.add('show');
});

closeBtn.addEventListener('click', () => {
  overlay.classList.remove('show');
});

overlay.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    overlay.classList.remove('show');
  });
});
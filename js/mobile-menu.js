// FIle for Mobile Menu interaction
const menuBtn = document.querySelector('.hmb-menu');
const myModal = document.querySelector('.overlay');
const closeButton = document.querySelector('.toolbar-2');

menuBtn.addEventListener('click', () => {
  myModal.classList.add('show');
});

closeButton.addEventListener('click', () => {
  myModal.classList.remove('show');
});

myModal.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    myModal.classList.remove('show');
  });
});
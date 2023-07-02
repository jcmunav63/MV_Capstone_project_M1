// This is the Main JavaScript file
const array = [{
  name: 'Raquel Bernal',
  position: 'Rector - University of Los Andes',
  description: 'Management of educational innovation.',
  image: '"./images/raquel-bernal.webp"',
  id: '0',
},

{
  name: 'Ignacio Sánchez Díaz',
  position: 'Rector - Pontifical Catholic University of Chile',
  description: 'Acquisition of knowledge, skills, and competencies throughout a person\'s life.',
  image: '"./images/ignacio-sanchez.webp"',
  id: '1',
},

{
  name: 'David Garza',
  position: 'Rector - Instituto Tecnológico de Monterrey',
  description: 'Management of educational innovation.',
  image: '"./images/david-garza.webp"',
  id: '2',
},

{
  name: 'Kim Wilcox',
  position: 'Chancellor - University of California',
  description: 'Application of technological tools to improve the quality of education and the teaching-learning process.',
  image: '"./images/kim-wilcox.png"',
  id: '3',
},

{
  name: 'Marina Gorbis',
  position: 'Executive Director - Institute for the Future of Education',
  description: 'Application of technological tools to improve the quality of education and the teaching-learning process.',
  image: '"./images/marina-gorbis.webp"',
  id: '4',
},

{
  name: 'Michael Crow',
  position: 'President - Arizona State University',
  description: 'Application of technological tools to improve the quality of education and the teaching-learning process.',
  image: '"./images/michael-crow.webp"',
  id: '5',
},

{
  name: 'Patrice Potvin',
  position: 'Director - Science & Technology ERT - Université du Québec',
  description: 'Research in current and emerging trends in the field of education.',
  image: '"./images/patrice-potvin.webp"',
  id: '6',
},

{
  name: 'Anant Agarwal',
  position: 'CEO - EDx & Professor of EE&CS at MIT',
  description: 'Research in current and emerging trends in the field of education.',
  image: '"./images/anant-agarwal.webp"',
  id: '7',
},
];

// Create the SPEAKERS section
const grid1 = document.querySelector('#grid');
grid1.classList.add('grid1');

function loadGrid() {
  for (let i = 0; i < array.length; i += 1) {
    const row = document.createElement('div');
    row.classList.add('rows');
    row.innerHTML += `
    <div class="div1-sp">
      <img class="photo-sp" alt="speaker" src=${array[i].image}>
    </div>
    <div class="div2-sp">
      <p class="name-sp">${array[i].name}</p>
      <p class="position-sp">${array[i].position}</p>
      <p class="descr-sp">${array[i].description}</p>
    </div>
    `;
    grid1.appendChild(row);
    if (i > 1) {
      row.classList.add('hide');
    }
  }
}

// REVIEW - SHOW - HIDE SPEAKERS
window.addEventListener('load', () => {
  loadGrid();
});

const seeMore = document.querySelector('.see-more');
const seeLess = document.querySelector('.see-less');
seeMore.addEventListener('click', () => {
  const rows = document.querySelectorAll('.hide').forEach((row) => {
    row.classList.add('show-rows');
  });
  rows.push('');
  seeLess.classList.add('show-rows');
  seeMore.classList.add('hide');
});

seeLess.addEventListener('click', () => {
  const rows = document.querySelectorAll('.hide').forEach((row) => {
    row.classList.remove('show-rows');
  });
  rows.push('');
  seeLess.classList.remove('show-rows');
  seeMore.classList.remove('hide');
});
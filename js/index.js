// This is the Main JavaScript file
const array = [{
  name: 'Raquel Bernal',
  position: 'Rector - University of Los Andes',
  description: 'Management of educational innovation.',
  image: '"./images/raquel-bernal-b.png"',
  id: '0',
},

{
  name: 'Ignacio Sánchez Díaz',
  position: 'Rector - Pontifical Catholic University of Chile',
  description: 'Acquisition of knowledge, skills, and competencies throughout a person\'s life.',
  image: '"./images/ignacio-sanchez-b.png"',
  id: '1',
},

{
  name: 'David Garza',
  position: 'Rector - Instituto Tecnológico de Monterrey',
  description: 'Management of educational innovation.',
  image: '"./images/david-garza-b.png"',
  id: '2',
},

{
  name: 'Kim Wilcox',
  position: 'Chancellor - University of California',
  description: 'Application of technological tools to improve the quality of education and the teaching-learning process.',
  image: '"./images/kim-wilcox-b.png"',
  id: '3',
},

{
  name: 'Marina Gorbis',
  position: 'Executive Director - Institute for the Future of Education',
  description: 'Application of technological tools to improve the quality of education and the teaching-learning process.',
  image: '"./images/marina-gorbis-b.png"',
  id: '4',
},

{
  name: 'Michael Crow',
  position: 'President - Arizona State University',
  description: 'Application of technological tools to improve the quality of education and the teaching-learning process.',
  image: '"./images/michael-crow-b.png"',
  id: '5',
},

{
  name: 'Patrice Potvin',
  position: 'Director - Science & Technology ERT - Université du Québec',
  description: 'Research in current and emerging trends in the field of education.',
  image: '"./images/patrice-potvin-b.png"',
  id: '6',
},

{
  name: 'Anant Agarwal',
  position: 'CEO - EDx & Professor of EE&CS at MIT',
  description: 'Research in current and emerging trends in the field of education.',
  image: '"./images/anant-agarwal-b.png"',
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
      <p class="position-sp"><em>${array[i].position}</em></p>
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
  seeLess.classList.add('show-rows');
  seeMore.classList.add('hide');
  rows.push('');
});

seeLess.addEventListener('click', () => {
  const rows = document.querySelectorAll('.hide').forEach((row) => {
    row.classList.remove('show-rows');
  });
  seeLess.classList.remove('show-rows');
  seeMore.classList.remove('hide');
  rows.push('');
});
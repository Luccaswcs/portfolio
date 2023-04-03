const skills = document.querySelectorAll('.skill-box');
const descricao = document.querySelector('.texto-descricao');
const sobreSkill = [
  '<p>HTML</p> <br> <p>É uma linguagem de marcação utilizada na construção de páginas na Web.</p> <br>',
  '<p>CSS</p> <br> <p>É um mecanismo para adicionar estilo a um documento web.</p> <br>',
  '<p>JavaScript</p> <br> <p>É uma linguagem de programação. Juntamente com HTML e CSS, é uma das três principais tecnologias da web.</p> <br>',
  '<p>Git</p> <br> <p>É um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software.</p> <br>',
  '<p>Github</p> <br> <p>É uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. </p> <br>'
];

skills.forEach((elemento, index) => {
  elemento.addEventListener('mouseover', (evento) => {
    descricao.innerHTML = `<p>${sobreSkill[index]} </p>`;
  });
  elemento.addEventListener('mouseout', () => {
    descricao.innerHTML = '/* Passe o mouse por cima de alguma habilidade para ler a descrição */';
  });
});





  


// Slide automático na galeria
const imgs = document.querySelectorAll('nav.galeria img');
let index = 0;
setInterval(() => {
  imgs.forEach(i => i.style.display = 'none');
  imgs[index].style.display = 'block';
  index = (index + 1) % imgs.length;
}, 4000);

// Mostrar todas as imagens ao carregar
imgs.forEach(i => i.style.display = 'none');
if (imgs.length) imgs[0].style.display = 'block';

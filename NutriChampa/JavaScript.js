// Mostrar secciones al hacer scroll
const secciones = document.querySelectorAll('section');

function mostrarSecciones() {
  secciones.forEach(sec => {
    const distancia = sec.getBoundingClientRect().top;
    if (distancia < window.innerHeight - 100) {
      sec.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', mostrarSecciones);
mostrarSecciones();

// Cambiar color del header al hacer scroll
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Desplazamiento suave al hacer clic en los enlaces
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// === MENÚ HAMBURGUESA ===
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

// Abrir/cerrar menú al presionar el botón
menuBtn.addEventListener('click', (e) => {
  e.stopPropagation(); // evita que se cierre al instante
  menu.classList.toggle('show');
});

// Cerrar menú al hacer clic en cualquier parte fuera de él
document.addEventListener('click', (e) => {
  if (!menu.contains(e.target) && !menuBtn.contains(e.target)) {
    menu.classList.remove('show');
  }
});

// Cerrar menú automáticamente al hacer clic en un enlace del menú
document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('show');
  });
});
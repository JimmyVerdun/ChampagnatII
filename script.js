function mostrarInicio() {
    document.getElementById("slider").classList.remove("hidden");
    document.getElementById("contenido-principal").innerHTML = "";
    document.getElementById("contenido-principal").style.display = "none";
}
function toggleMenu() {
    document.getElementById('overlay').classList.toggle('active');
}

function toggleSubmenu(li) {
    event.stopPropagation();
    li.classList.toggle('active');
}

function mostrarSeccion(id) {
    const contenedor = document.getElementById('contenido-principal');
    const plantilla = document.getElementById(id);

    if (!plantilla) {
        contenedor.innerHTML = '<h2 style="text-align:center;color:#999;margin:100px 0;">Sección en construcción...</h2>';
    } else {
        const seccion = plantilla.cloneNode(true);
        seccion.style.display = 'block';
        contenedor.style.display = 'block';
        contenedor.innerHTML = '';
        contenedor.appendChild(seccion);
        seccion.classList.add('active');
    }

    document.getElementById('slider').classList.add('hidden');
    toggleMenu();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Slider automático
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
function showSlides() {
    slides.forEach(s => s.classList.remove('active'));
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add('active');
}
setInterval(showSlides, 4000);
showSlides();
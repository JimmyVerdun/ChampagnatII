// Menú hamburguesa
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// === CARRITO (tu código original) ===
const carrito = [];
const listaCarrito = document.getElementById("lista-carrito");
const totalEl = document.getElementById("total");

document.querySelectorAll(".agregar-carrito").forEach(boton => {
    boton.addEventListener("click", e => {
        e.preventDefault();
        const nombre = boton.dataset.nombre;
        const precio = parseFloat(boton.dataset.precio);
        carrito.push({ nombre, precio });
        actualizarCarrito();
    });
});

document.getElementById("vaciar").addEventListener("click", () => {
    carrito.length = 0;
    actualizarCarrito();
});

document.getElementById("finalizar").addEventListener("click", () => {
    if (carrito.length === 0) {
        alert("Tu carrito está vacío.");
        return;
    }

    const mensaje = carrito.map(p => `• ${p.nombre} - Bs ${p.precio}`).join("%0A");
    const total = carrito.reduce((sum, p) => sum + p.precio, 0);
    const texto = `Hola 👋 quiero realizar el siguiente pedido:%0A${mensaje}%0A%0ATotal: Bs ${total}`;
    const telefono = "59173153425";
    const url = `https://wa.me/${telefono}?text=${texto}`;
    window.open(url, "_blank");
});

function actualizarCarrito() {
    listaCarrito.innerHTML = "";
    let total = 0;
    carrito.forEach(p => {
        const li = document.createElement("li");
        li.textContent = `${p.nombre} - Bs ${p.precio}`;
        listaCarrito.appendChild(li);
        total += p.precio;
    });
    totalEl.textContent = total.toFixed(2);
}
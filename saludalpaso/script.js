// Datos del menú
const productos = [
  {nombre:"Avena con Frutas",precio:15,categoria:"Desayuno",img:"https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&w=800",desc:"Avena natural con frutas frescas, miel y chía. Alta en fibra y energía."},
  {nombre:"Smoothie Verde Detox",precio:12,categoria:"Desayuno",img:"smoothieverdedetox.jpg",desc:"Piña, espinaca y jengibre. Limpia tu organismo naturalmente."},
  {nombre:"Tostadas Integrales",precio:14,categoria:"Desayuno",img:"tostada saludables.png",desc:"Con aguacate, tomate cherry y semillas saludables."},

  {nombre:"Ensalada Mediterránea",precio:25,categoria:"Almuerzo",img:"ensaladamediterranea.jpg",desc:"Garbanzos, pepino, queso feta, aceitunas y aceite de oliva."},
  {nombre:"Pollo Grill con Quinoa",precio:25,categoria:"Almuerzo",img:"grill de quinoa.jpg",desc:"Alto en proteína, bajo en grasa. Ideal para deportistas."},
  {nombre:"Bowl Vegetariano",precio:30,categoria:"Almuerzo",img:"bowl vegetariano.webp",desc:"Arroz integral, tofu, zanahoria y calabacín asado."},

  {nombre:"Salmón al Horno",precio:30,categoria:"Cena",img:"salmon al horno.webp",desc:"Con brócoli, limón y aceite de oliva. Rico en omega 3."},
  {nombre:"Wrap de Pollo Light",precio:25,categoria:"Cena",img:"wrap de pollo.webp",desc:"Pan integral, pollo, lechuga, zanahoria y yogurt natural."},
  {nombre:"Sopa de Lentejas",precio:20,categoria:"Cena",img:"sopa de lentejas.jpg",desc:"Alta en proteína vegetal e ideal para la digestión."}
];

// Elementos del DOM
const contenedor = document.getElementById("productos-container");
const listaCarrito = document.getElementById("lista-carrito");
const totalElemento = document.getElementById("total");
const contadorPedidos = document.getElementById("contador");
const mensajeConfirmacion = document.getElementById("mensaje-confirmacion");

let carrito = [];
let contador = 0;

// Mostrar productos
function mostrarCategoria(categoria, boton) {
  const botones = document.querySelectorAll(".filtro button");
  botones.forEach(b => b.classList.remove("activo"));
  boton.classList.add("activo");

  contenedor.innerHTML = "";
  const filtrados = categoria === "Todo"
    ? productos
    : productos.filter(p => p.categoria === categoria);

  filtrados.forEach((p, i) => {
    const card = document.createElement("div");
    card.classList.add("producto");
    setTimeout(() => card.classList.add("fade-in"), i * 100);

    card.innerHTML = `
      <img src="${p.img}" alt="${p.nombre}">
      <div class="info">
        <h4>${p.nombre}</h4>
        <p class="desc">${p.desc}</p>
        <p class="precio">${p.precio} Bs</p>
        <button onclick="agregarCarrito('${p.nombre}', ${p.precio})">Agregar</button>
      </div>
    `;
    contenedor.appendChild(card);
  });
  
}

// Agregar producto al carrito
function agregarCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  actualizarCarrito();
}

// carrito
function actualizarCarrito() {
  listaCarrito.innerHTML = "";
  let total = 0;
  carrito.forEach((item, i) => {
    total += item.precio;
    const li = document.createElement("li");
    li.textContent = `${item.nombre} - ${item.precio} Bs`;
    listaCarrito.appendChild(li);
  });
  totalElemento.textContent = total;
}

// Confirmar pedido
document.getElementById("confirmar").addEventListener("click", () => {
  if (carrito.length === 0) {
    alert("Tu carrito está vacío 🛒");
    return;
  }

  // Calcular total
  let total = carrito.reduce((acc, producto) => acc + producto.precio, 0);

  // Crear mensaje con los productos del carrito
let mensaje = "¡Hola! Quiero confirmar mi pedido de *Salud al Paso 🌿*:%0A%0A";
carrito.forEach((producto, index) => {
  mensaje += `${index + 1}. ${producto.nombre} - ${producto.precio} Bs%0A`;
});

mensaje += `%0A*Total:* ${total} Bs 💵%0A`;
mensaje += `%0A*Método de pago:* (Seleccione una opción)%0A- 📱 Pago por QR%0A- 💰 Efectivo%0A%0A`;
mensaje += `¿Podrían confirmarme si está todo correcto?`;


  // Incrementar contador y limpiar carrito
  contador++;
  contadorPedidos.textContent = contador;
  carrito = [];
  actualizarCarrito();

  // Mostrar mensaje de confirmación antes de abrir WhatsApp
  mensajeConfirmacion.style.display = "block";
  setTimeout(() => {
    mensajeConfirmacion.style.display = "none";
    window.open(`https://wa.me/59162080259?text=${mensaje}`, "_blank");
  }, 2000);
});

// Registro de usuario
const formRegistro = document.getElementById("form-registro");
formRegistro.addEventListener("submit", e => {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;
  const dieta = document.getElementById("requerimientos").value;

  document.getElementById("perfil-nombre").textContent = nombre;
  document.getElementById("perfil-correo").textContent = correo;
  document.getElementById("perfil-requerimientos").textContent = dieta;

  formRegistro.style.display = "none";
  document.getElementById("perfil-usuario").style.display = "block";
});

// Mostrar todo al cargar
mostrarCategoria("Todo", document.querySelector(".filtro button"));
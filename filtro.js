// Tenemos un li de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]

const listaProductos = document.getElementById("lista-de-productos")
const input = document.getElementById("filtro-input");
const botonDeFiltro = document.getElementById("filtro-boton");

function displayProductos(productos) {
productos.forEach(producto => {
 const divProducto = document.createElement("div")
 divProducto.classList.add("nombre")

 const tipoProducto = document.createElement("p")
 tipoProducto.classList.add("titulo")
 tipoProducto.textContent = producto.nombre

 const colorProducto = document.createElement("p")
  colorProducto.classList.add("color")

 const imagenProducto = document.createElement("img");
 imagenProducto.setAttribute('src', producto.img);
  
  // nombreProducto.appendChild(nombreProducto)
  divProducto.appendChild(colorProducto)
  divProducto.appendChild(tipoProducto);
  divProducto.appendChild(imagenProducto);

  listaProductos.appendChild(divProducto);
});
}

displayProductos(productos);

botonDeFiltro.addEventListener("click",() => {
  const texto = input.value.trim().toLowerCase();
  console.log(texto);
  const productosFiltrados = filtrarProductos(productos, texto);

  displayProductos(productosFiltrados);
}) 

botonDeFiltro.onclick = function() {
  while (listaProductos.firstChild) {
    listaProductos.removeChild(listaProductos.firstChild);
  }
}

const filtrarProductos = (productos, texto) => {
  return productos.filter(item => {
    return item.tipo.toLowerCase().includes(texto) || item.color.toLowerCase().includes(texto);
    
}
)};
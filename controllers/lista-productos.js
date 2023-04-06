import { productoServices } from "../services/servicios.js"


const getProducts = (name, price, imageUrl, id) => {
  const card = document.createElement("div");

  const contenido = `
  <div class="boxsw ${id}">
  <ul class="listasw">
      <li>
          <img src="${imageUrl}" alt="imagen1" class="imgsw">
          <h5 class="textosw ${id}">${name}</h5>
          <h5 class="preciosw">$${price}</h5>
          <h5 class="textosw idno">${id}</h5>
          <button class="titulosw botonb entrars delete ${id}" name="${id}">Borrar</button>
          <a href="#edicion" class="blue"><button class="titulosw botonb entrars delete ${id}" id=${id}>Editar</button></a>
      </li>
  </ul>
  </div>
    `;
  card.innerHTML = contenido;
  card.dataset.id = id;
  return card;
};

const productos = document.querySelector(".linesw");
 
productos.addEventListener("click", async (evento) => {
  
    let id=evento.target.name;
    let nodo=evento.target.nodeName;
    if (id !="" && id!=undefined && nodo=="BUTTON") {
      let producto=(evento.target.closest(".boxsw"));
      productoServices
        .deleteProducto(id)
        .then((res) => {
          producto.remove();
        })
        .catch((err) => console.log(err));
    }
  });

const render = async () => {
  try {
    const listaProductos = await productoServices.listaProductos();

    listaProductos.forEach((producto) => {
      productos.appendChild(
        getProducts(
          producto.name,
          producto.price,
          producto.imageUrl,
          producto.id
        )
      );
    });
  } catch (err) {
    console.log(err);
  }
};

render();

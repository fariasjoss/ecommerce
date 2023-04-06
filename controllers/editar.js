import { productoServices } from "../services/servicios.js"
  

const productose = document.querySelector(".linesw");

productose.addEventListener("click", async (evento) => {
    let ide=evento.target.id;
    let nodo=evento.target.nodeName;
    if (ide !="" && ide!=undefined && nodo=="BUTTON"){
       location.href="editar.html";
    }
  });
        


import { productoServices } from "../services/servicios.js"
 
let buscador = document.querySelector(".buscador");
let search= document.querySelector(".lupa")
var productosb=[];
var idb=[];
var productos;
var productoe;
var encontrado;
var numerop;
var nombrep;
var preciop;
var textofinal;

const render = async () => {
    try {
      const listaProductos = await productoServices.listaProductos();
      listaProductos.forEach((producto) => {
           
        productosb.push(producto.name);
        idb.push(producto.id);
           
          });
    } catch (err) {
      console.log(err);
    }
  };
  
  render();


  const buscar = () => {
    window.event.preventDefault();
    
   buscador.style.display="inline-block";
      
    var valor=buscador.value;
    var newv;
    newv=valor.toUpperCase();
    
    console.log(newv);
    
            
      //productosb.toUpperCase();
      console.log(productosb);
      console.log(idb);
      for(var i=0;i<productosb.length;i++) {
        if(newv==productosb[i]){
            var indice=productosb.indexOf(newv);
            numerop=idb[indice];
            console.log(numerop);
            var filtro =productosb.filter((e)=> e==newv);
            console.log(filtro);
            productoServices
            .listarUnProduto(numerop)
    .then((resposta) => {
       nombrep=(resposta.name);
       preciop=(resposta.price);
       textofinal=nombrep +" de precio: "+preciop;
       swal({
        title: 'Producto Encontrado',
        text: textofinal,
        type: 'success',
        showCancelButton: false,
        confirmButtonColor: '#DD6B55',
        confirmButtonText: 'OK',
        cancelButtonText: 'No.'
      })
       
       
    })
    .catch((err) => {
      console.log(err);
    });
        }
         
         
      } 
      
}
search.addEventListener("click",buscar);

const productosl = document.querySelector(".linesw");




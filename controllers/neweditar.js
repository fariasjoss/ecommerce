import { productoServices } from "../services/servicios.js"

const productose = document.querySelector(".linesw");
var ide;

productose.addEventListener("click", async (evento) => {
    ide = evento.target.id;
    let nodo=evento.target.nodeName;
    if (ide !="" && ide!=undefined && nodo=="BUTTON"){
       productoServices
       .listarUnProduto(ide)
    .then((resposta) => {
       let nombreP = document.querySelector('.nombrep');
       let urlP = document.querySelector('.url');
       let precioP = document.querySelector('.preciop');
       nombreP.value = resposta.name; 
       urlP.value=resposta.imageUrl;
       precioP.value=resposta.price; 
       let dibujo=document.querySelector(".crazy");
       dibujo.setAttribute("src",urlP.value);

    })
    .catch((err) => {
      console.log(err);
    });
    }
});


const inputDiv = document.querySelector(".input-div");
const input = document.querySelector(".file");
const output = document.querySelector("output");

let imagesArray = [];

input.addEventListener("change", () => {
    let dibujo=document.querySelector(".crazy");
    dibujo.remove();
    const files = input.files;
    imagesArray.push(files[0]);
    displayImages();
});

inputDiv.addEventListener("drop",(e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    imagesArray.push(files[0]);
    displayImages();
  });
  
  function displayImages() {
    
    let images = ""
    let ind=0;
    imagesArray.forEach((image, index) => {
      const url= URL.createObjectURL(image);
      images += `<div class="image">
                  <img src="${url}" alt="image">
                  <span class="help" id="${ind}">&times;</span>
                </div>`
                document.querySelector(".url").value=`${url}`;
                ind++;
    });
    
    output.innerHTML = images;
  };
  const spann=document.querySelector(".aux");

  spann.addEventListener("click",(evento) => {
    
    let borrando=(evento.target.className);
    let indice=evento.target.id;
    
    if(borrando=="help"){
      
    imagesArray.splice(indice, 1)
    document.querySelector(".url").value="";
    displayImages()
    }
  });

  function validarAgregar(){
    window.event.preventDefault();
   
    let aprobado=true;
    if (document.querySelector('.url').value=="") {
        aprobado=false;
        swal("Campo URL es obligatorio")  
        document.querySelector('.url').focus();   
    }else if (document.querySelector('.nombrep').value=="" || document.querySelector('.nombrep').value.length>=21) {
        aprobado=false;
        swal("Campo nombre es obligatorio y maximo de 20 caracteres")
        document.querySelector('.nombrep').focus();
    }else if (document.querySelector('.categoriap').value=="") {
        aprobado=false;
        swal("Campo categoría es obligatorio")
        document.querySelector('.categoriap').focus();
    }else if (document.querySelector('.preciop').value=="") {
        aprobado=false;
        swal("Campo precio es obligatorio y debe ser numerico")
        document.querySelector('.preciop').focus();
    }else if (document.querySelector('.descripcionp').value=="" || document.querySelector('.descripcionp').value.length>=151) {
        aprobado=false;
        swal("Campo descripción es obligatorio y maximo de 150 caracteres")
        document.querySelector('.descripcionp').focus();
} 

if (aprobado==true){
    
    console.log("Creando producto");
    const nombreP = document.querySelector('.nombrep').value;
    const urlP = document.querySelector('.url').value;
    const precioP = document.querySelector('.preciop').value;

    productoServices
    .alteraProduto(
      ide,
      nombreP,
      urlP,
      precioP
    )
    .then(() => {
      window.location.href = "../todosCRUD.html";
    });
    
}
  }
    document.querySelector('.entrars').addEventListener("click",validarAgregar);



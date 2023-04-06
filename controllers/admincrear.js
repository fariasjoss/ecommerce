import { productoServices } from "../services/servicios.js"
const inputDiv = document.querySelector(".input-div");
const input = document.querySelector(".file");
const output = document.querySelector("output");

let imagesArray = [];

input.addEventListener("change", () => {
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
  var url;
  function displayImages() {
    
    let images = ""
    let ind=0;
    imagesArray.forEach((image, index) => {
      
      url= URL.createObjectURL(image);
      images += `<div class="image">
                  <img src="${url}" alt="image">
                  <span class="help" id="${ind}">&times;</span>
                </div>`
                //document.querySelector(".url").value="./images/"+ image.name;
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
}else if (document.querySelector('.file').value==""){
    aprobado=false;
    swal("Agregar imagen");
}   

if (aprobado==true){
    
    console.log("Creando producto");
    const nombreP = document.querySelector('.nombrep').value;
    const urlP = document.querySelector('.url').value;
    const precioP = document.querySelector('.preciop').value;
    const id=document.querySelector('.descripcionp').value;
    productoServices
    .creaProdutos(nombreP, urlP, precioP,id)
    .then((resposta) => {
      window.location.href = "./todosCRUD.HTML";
    })
    .catch((err) => {
      console.log(err);
    });
}
  }
    document.querySelector('.entrars').addEventListener("click",validarAgregar);

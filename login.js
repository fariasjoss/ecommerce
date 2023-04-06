
function validarLogin(){
    window.event.preventDefault();
    let aprobado=true;
    let pase="123";
    
    
    if (document.querySelector('.correos').value=="") {
        aprobado=false;
        swal("Campo correo es obligatorio")  
        document.querySelector('.correos').focus();
        
    
    }else if (document.querySelector('.claves').value=="") {
        aprobado=false;
        swal("Campo clave es obligatorio")
        document.querySelector('.claves').focus();
        

    } else if (document.querySelector('.correos').value.indexOf('@')==-1 ||
    document.querySelector('.correos').value.indexOf('.')==-1 || document.querySelector('.correos').value.length<=5) {
        aprobado=false;
        swal("e-mail inválido")
        document.querySelector('.correos').focus();
    }
   if(aprobado==true && document.querySelector('.claves').value==pase){
    location.href='todosCRUD.html';
    
   }else{
    if(aprobado==true)
    swal("Clave incorrecta");
   }
}

   
    document.querySelector('.divs').addEventListener('submit',validarLogin);

function mensaje (){

    swal({
        title: 'Estimado Usuario',
        text: 'La clave es 123',
        type: 'info',
        showCancelButton: false,
        confirmButtonColor: '#DD6B55',
        confirmButtonText: 'ok',
      });
     
    }
       mensaje();
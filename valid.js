function validarDatos(){
    window.event.preventDefault();
    let aprobado =true;
     
    if (document.form.nombre.value=="" || document.form.nombre.value.length >= 40 ) {
        aprobado=false;
        swal("Campo nombre es obligatorio debe contener máximo 40 caracteres")  
        document.form.nombre.focus();
        
    
    }else if (document.form.mensaje.value=="" || document.form.mensaje.value.length >= 120 ){
        aprobado=false;
        swal("Campo Mensaje es obligatorio y debe contener máximo 120 caracteres") 
        document.form.mensaje.focus(); 
    } 
    if (aprobado==true){
    document.querySelector('.formcontato__form').submit();
    }
}
    document.querySelector('.formcontato__form').addEventListener('submit',validarDatos);


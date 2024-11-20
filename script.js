function validaFormulario(){
    let nombre=document.getElementById("nombre").Value;
    let email=document.getElementById("email").Value;
    let imagen=document.getElementById("imagen").Value;
    if(nombre==""|| email=="" || imagen==""){
        alert("todos los campos son OBLIGATORIOS");
        return false;
    }
    return true;
}
function mostrarImagen(event){
    let imagen=document.getElementById('ver-imagen');
    imagen.src=URL.createObjectURL(event.target.files[0]);
}
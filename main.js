
const btn = document.getElementById('btn')

function enviar(e){
    e.preventDefault()
    const inputNombre = document.getElementById('firstName').value;
    const inputCorreo = document.getElementById('email').value;
    const inputMensaje = document.getElementById('message').value;

    localStorage.setItem('user', JSON.stringify({

        Nombre: inputNombre,
        
        Correo: inputCorreo,
    
        Mensaje : inputMensaje,
        
    }))
}


btn.addEventListener('click',enviar)


    const user = JSON.parse(localStorage.getItem('user'));
    
    console.log("Datos", user) 






    

     
        
        
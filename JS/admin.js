// FUNCIONES

function validacionFormulario(e){
  e.preventDefault();

  if(loginForm.nombre.value!="" && loginForm.nombre.value==admin){
    if(loginForm.pass.value!="" && loginForm.pass.value==pass){
      Funcionlogin();
    }else{
      error_form.innerHTML=`<p>ERROR!!! Contraseña incorrecta</p>`
    }
  }else{
    error_form.innerHTML=`<p>ERROR!!! Usuario incorrecto</p>`
  }
}



function Funcionlogin(){
  logout.className="ocultar";
  login.className="login"
}


function inicio(){
  logout.className="logout";
  login.className="ocultar";
}

function funcionLogout(){
  login.className="ocultar";
  logout.className="logout";
}



// INICIO PROGRAMA


let loginForm = document.getElementById("loginForm");
let admin = "admin"
let pass="1234"
inicio();
loginForm.addEventListener("submit",validacionFormulario)


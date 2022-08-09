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
  logout.innerHTML="";
  login.innerHTML=`
  <header>
    <h1>ZONA DE ADMINISTRACION</h1>
    <div class="botones">
      <button type="button" name="button" id="inicio">INICIO</button>
      <button type="button" name="button" id="contador">CONTADOR</button>
      <button type="button" name="button" id="salir" onclick="funcionLogout()">SALIR</button>
    </div>
  </header>

  <div class="cuerpo">
    <div class="container">

    </div>
  </div>
  `
}




function funcionLogout(){
  login.innerHTML="";
  logout.innerHTML=`
  <div class="cuerpo">
    <div class="container">
      <div class="container_form">
        <form class="" action="index.html" method="post" id="loginForm">
          <label for="name">Nombre</label>
          <input type="text" name="nombre">
          <label for="pass">Apellido</label>
          <input type="text" name="pass">
          <button type="submit" name="button">INGRESAR</button>
          <div class="error_form" id="error_form">
          </div>
        </form>
        </div>
    </div>
  </div>
  `
}



// INICIO PROGRAMA


let loginForm = document.getElementById("loginForm");
let admin = "admin"
let pass="1234"

loginForm.addEventListener("submit",validacionFormulario)

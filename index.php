<?php
  require 'config/db.php';

  $location="";
  $DateAndTime = date('d-m-Y h:i:s a', time()); 

  if($_GET){

    if($_GET['location']){
      $location = $_GET['location'];
    }

  }

  $listaSQL= $conexion ->prepare("INSERT INTO `visitante` (`location`,`cantidad`, `fecha`) VALUES ( '$location','','$DateAndTime')  ");
  $listaSQL ->execute();

?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta name="description" content="Portoflio of Patricio Gallo">
  <meta name="keywords" content="HTML,CSS,XML,JavaScript">
  <meta name="author" content="Patricio Gallo">
  <link rel="stylesheet" href="Style/style.css">
  <link rel="shortcut icon" href="media/imagenes/icono.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,400;0,500;0,600;0,700;0,800;1,700&display=swap" rel="stylesheet">
  <script src="JS/works.js"></script>
  <title>Patricio Gallo</title>
  <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
</head>

<body>

  <div class="flotante" id="flotante">
  </div>

  <div class="idiomas">
    <button type="button" name="button" id="btn_ingles"> <img src="media/imagenes/reinounido.png" alt=""> </button>
    <button type="button" name="button" id="btn_espanol"> <img src="media/imagenes/espana.png" alt=""> </button>
  </div>

  <div class="cuerpo">

    <div class="menu">
      <div class="menu_contenido">
        <div class="opcionMenu">
          <button type="button" name="button" id="btn_about" class="colorVerde"><img src="media/imagenes/perfil.png"><br>ABOUT</button>
        </div>
        <div class="opcionMenu">
          <button type="button" name="button" id="btn_resume"><img src="media/imagenes/resume.png"><br>RESUME</button>
        </div>
        <div class="opcionMenu">
          <button type="button" name="button" id="btn_works"><img src="media/imagenes/lapiz.png" alt=""><br>WORKS</button>
        </div>
        <div class="opcionMenu">
          <button type="button" name="button" id="btn_contacto"><img src="media/imagenes/contacto.png" alt=""><br>CONTACT</button>
        </div>
      </div>
    </div>

    <div class="cartaPresentacion">
      <div class="cartaFoto">
        <img src="media/imagenes/fotoPerfil.jpeg" alt="">
      </div>
      <div class="cartaTitulo">
        <h1>Patricio Gallo</h1>
        <h2>Engineer | Web Designer</h2>
        <div class="redesSociales">
          <a href="https://www.instagram.com/patoogallo/" target="_blank"> <img src="media/imagenes/instagram.png" alt=""></a>
          <a href="https://www.linkedin.com/in/patoogallo/" target="_blank"> <img src="media/imagenes/linkedin.png" alt=""></a>
          <a href="https://github.com/PatricioGallo" target="_blank"> <img src="media/imagenes/git.png" alt=""></a>
        </div>
      </div>
      <div class="CartaEleccion">
        <a href="media/cv/38743822-PatricioGallo-P.pdf" DOWNLOAD> <button type="button" name="button" style="border-right: 1px solid rgb(205, 205, 205);"> DOWNLOAD CV </button></a>
        <a href="mailto:patogallo95@gmail.com"><button type="button" name="button">MAIL ME</button></a>
      </div>
    </div>

    <div class="informacion">

      <!--               ABOUT ME                        -->
      <div id="about">


        <div class="informacion_contenido">
          <div class="titulo_informacion">
            <h1>About</h1>
            <h2>Me</h2>
          </div>
          <div class="contenedor_1">
            <div class="contenedor2" style='border-right: 1px solid rgb(205, 205, 205);' >
              <p>I am Patricio Gallo Electronic Engineer graduated from the National University of Tucum??n in 2019. I have studies in front-end and back-end programming, with knowledge in HTML, CSS, JAVASCRIPT, MYSQL, PHP, PYTHON, among others.      </p>
            </div>
            <div class="contenedor3">
              <div class="datos_persona">
                <h3>Age:</h3>
                <h4>27</h4>
              </div>
              <div class="datos_persona">
                <h3>Residence:</h3>
                <h4>Argentina</h4>
              </div>
              <div class="datos_persona">
                <h3>Adress:</h3>
                <h4>Tucuman</h4>
              </div>
              <div class="datos_persona">
                <h3>Freelance:</h3>
                <h4>Availible</h4>
              </div>
            </div>
          </div>


          <div class="titulo_informacion">
            <h1>My</h1>
            <h2>Services</h2>
          </div>
          <div class="contenedor_1">
            <div class="contenedor2" style='border-right: 1px solid rgb(205, 205, 205);'>
              <img src="media/imagenes/tilde.png" alt="">
              <h1>WEB DEVOLPMENT</h1>
              <h2>Modern and mobile-ready website that will help you reach all of your marketing.</h2>
            </div>

            <div class="contenedor2" >
              <img src="media/imagenes/tilde.png" alt="">
              <h1>DEVELOPING</h1>
              <h2>Building web pages from scratch</h2>
            </div>

          </div>

          <div class="contenedor_1">
            <div class="contenedor2" style="border-right: 1px solid rgb(205, 205, 205);">
              <img src="media/imagenes/tilde.png" alt="">
              <h1>PERSONALIZED</h1>
              <h2>100% personalized treatment with the client, and their orders.</h2>
            </div>

            <div class="contenedor2">
              <img src="media/imagenes/tilde.png" alt="">
              <h1>OPTIMIZATION</h1>
              <h2>Code optimization, to improve user experience on web pages.</h2>
            </div>

          </div>
        </div>
        <!-- FIN ABOUT ME -->
      </div>

      <div id="resume">

        <!-- RESUME -->
        <!-- FIN RESUME -->

      </div>

      <div id="works">


      </div>

      <div id="contacto">


      </div>


    </div>


  </div>
  <!-- fin de cuerpo -->

  <div id="informacion_works">

  </div>
  
  <div class="link_escondido">
    <a href="admin.php">ADMIN</a>
  </div>

  <script src="JS/main.js"></script>
</body>

</html>

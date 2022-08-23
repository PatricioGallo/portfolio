<?php
  require 'config/db.php';
  require 'php/items.php';
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
  <link rel="stylesheet" href="Style/admin.css">
  <link rel="shortcut icon" href="media/imagenes/icono.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,400;0,500;0,600;0,700;0,800;1,700&display=swap" rel="stylesheet">
  <script src="JS/works.js"></script>
  <title>Zona de administracion</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
</head>

<body>


  <div id="logout">
    <div class="cuerpo">
      <div class="container">
        <div class="container_form">
          <form class="" action="index.html" method="post" id="loginForm">
            <label for="name">Nombre</label>
            <input type="text" name="nombre">
            <label for="pass">Apellido</label>
            <input type="password" name="pass">
            <button type="submit" name="button">INGRESAR</button>
            <a href="index.php">VOLVER</a>
            <div class="error_form" id="error_form">
            </div>
          </form>
          </div>
      </div>
    </div>
  </div>

  <div id="login">
  <header>
    <h1>ZONA DE ADMINISTRACION</h1>
    <div class="botones">
      <button type="button" name="button" id="inicio">INICIO</button>
      <button type="button" name="button" id="config">CONFIGURACION</button>
      <button type="button" name="button" id="salir" onclick="funcionLogout()">SALIR</button>
    </div>
  </header>

  <div class="cuerpo">
    <div class="container">
      <h1>HOLA</h1>
      <h4>Aqui estan tus estadisticas</h4>
      
      <table>
      <tr>
          <th>ID</th>
          <th>LOCATION</th>
          <th>CANTIDAD</th>
          <th>FECHA</th>
        </tr>

      <?php
      
      foreach ($listatabla as $lista) {
        $id= $lista['id'];
        $location= $lista['location'];
        $cantidad= $lista['cantidad'];
        $fecha= $lista['fecha'];
        ?>

         <tr>
          <td><?php echo $id;?></td>
          <td><?php echo $location;?></td>
          <td><?php echo $cantidad;?></td>
          <td><?php echo $fecha;?></td>
        </tr>

      <?php }?>

      </table>






    </div>
  </div>
  </div>


  <script src="JS/admin.js"></script>
</body>

</html>

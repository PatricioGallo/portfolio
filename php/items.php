<?php

$listaSQL= $conexion ->prepare("SELECT * FROM visitante ORDER BY id DESC");
$listaSQL ->execute();
$listatabla = $listaSQL ->fetchALL (PDO::FETCH_ASSOC);

?>
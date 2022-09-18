<?php

$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$mensaje = $_POST['mensaje'];

$header = 'From:'.$mail." \r\n";
$header .= "X-Mailer: PHP/ ".phpversion()." \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$message = "Este mensaje fue enviado por: ".$nombre." \r\n";
$message .= "Su correo es: ".$correo." \r\n";
$message .= "Mensaje: ".$mensaje." \r\n";
$message .= "Enviado el: ".date('d/m/Y', time());

$para = 'christiand0393@gmail.com';
$asunto = 'Contacto del portafolio';

mail($para, $asunto, utf8_decode($message), $header);

header("Location:index.html#contac")

?>
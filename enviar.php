<?php
function enviarEmail($assunto, $Mensagem, $paraQuem, $arquivo){
  error_reporting(E_ALL);
  //require_once($_SERVER['DOCUMENT_ROOT'].'/class_mailer/class.phpmailer.php');
  require_once("class/class.phpmailer.php");
  $mailer = new PHPMailer();
  $mailer->IsSMTP();
  $mailer->SMTPDebug = 1;
  $mailer->Port = 587; //Indica a porta de conexão para a saída de e-mails
  $mailer->Host = 'smtp.home.eng.br'; //smtp.dominio.com.br
  $mailer->SMTPAuth = true; //define se haverá ou não autenticação no SMTP
  $mailer->Username = 'contato@home.eng.br'; //Informe o e-mai o completo
  $mailer->Password = 'encanador10'; //Senha da caixa postal
  $mailer->FromName = "Contato"; //Nome que será exibido para o destinatário
  $mailer->From = 'no-reply@home.eng.br'; //Obrigatório ser a mesma caixa postal indicada em "username"
  $mailer->IsHTML(true);//PERMITE A INSERÇÂO DE HTML NO CONTEUDO DO EMAIL
  foreach($paraQuem as $valor){
    $mailer->AddAddress($valor['email'],$valor['nome']); //Destinatários
  }
  if($arquivo != ""){
    $mailer->AddAttachment($arquivo);//anexa o arquivo
  }
  $mailer->Subject = $assunto;
  $mailer->Body = $Mensagem;
  $mailer->Send();
  //header('Location: http://home.eng.br/#enviado');//enviar para pagina enviada com sucesso
}
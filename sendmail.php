<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") 
{
  $to = $_POST["tomail"];
  $question = $_POST["question"];
  $rusername = $_POST["rusername"];
  $susername = $_POST["susername"];
  $message = $_POST["message"];
  //$to      = 'pokeavathar@gmail.com';
  $subject = $rusername." answered your question " .$question;
  
  $headers = 'From: kurushetra111@gmail.com' . "\r\n" .
           'Reply-To: kurushetra111@gmail.com' . "\r\n" .
           'X-Mailer: PHP/' . phpversion();

	if(mail($to, $subject, $message, $headers)) 
	{
		echo 'Email sent successfully!';
	} else 
	{
		die('Failure: Email was not sent!');
	}
}
function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>

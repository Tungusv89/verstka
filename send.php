<?php
$name = $_POST['name'];
$email = $_POST['email'];

$name = htmlspecialchars($name);
$email = htmlspecialchars($email);

$name = urldecode($name);
$email = urldecode($email);

$name = trim($name);
$email = trim($email);

echo $name;
echo '<br>';
echo $email;

mail($email, "Заявка с сайта", "Имя".$name.". E-mail: ".$email.". Сообщение: Тестовое письмо","From: example2@mail.ru \r\n");

if (mail($email, "Заявка с сайта", "Имя".$name.". E-mail: ".$email.". Сообщение: Тестовое письмо " ,"From: example2@mail.ru \r\n"))
 {
    echo "  \r\nСообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}
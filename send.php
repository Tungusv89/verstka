<?php
$name = $_POST['name'];
$email = $_POST['email'];

$name = htmlspecialchars($name);
$email = htmlspecialchars($email);

$name = urldecode($name);
$email = urldecode($email);

$name = trim($name);
$email = trim($email);

mail("tungusv89@gmail.com, " . $email . "" . $email . "", "Заявка с сайта", "Тестовое письмо\r\n");

if (mail("tungusv89@gmail.com," . $email . "", "Заявка с сайта", "Тестовое письмо\r\n")) {
    echo "  \r\nСообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}

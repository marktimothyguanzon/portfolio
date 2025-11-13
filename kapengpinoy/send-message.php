<?php
if($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $msg = htmlspecialchars($_POST["message"]);

    $to = "your-email@example.com";
    $subject = "New Message from Kapeng Pinoy Website";
    $body = "Name: $name\nEmail: $email\nMessage: $msg";

    mail($to, $subject, $body);

    echo "Message sent successfully!";
}
?>
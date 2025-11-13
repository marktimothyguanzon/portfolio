<?php
$message_sent = false;
if($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $msg = htmlspecialchars($_POST["message"]);

    $to = "your-email@example.com";
    $subject = "New Message from Kapeng Pinoy Website";
    $body = "Name: $name\nEmail: $email\nMessage: $msg";

    mail($to, $subject, $body);
    $message_sent = true;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Contact Us - Kapeng Pinoy</title>
<link rel="stylesheet" href="styles.css">
</head>
<body>
<header class="navbar">
    <div class="logo">Kapeng Pinoy</div>
    <nav>
        <a href="index.html">Home</a>
        <a href="menu.html">Menu</a>
        <a href="about.html">About</a>
        <a href="contact.php">Contact</a>
    </nav>
</header>

<section class="contact-section">
    <h2>Contact Us</h2>
    <?php if($message_sent): ?>
        <p class="success-msg">Thank you! Your message has been sent.</p>
    <?php else: ?>
    <form action="contact.php" method="POST" class="contact-form">
        <input type="text" name="name" placeholder="Your Name" required>
        <input type="email" name="email" placeholder="Email Address" required>
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button class="btn">Send Message</button>
    </form>
    <?php endif; ?>
</section>

<footer>
    <p>© 2025 Kapeng Pinoy Coffee Shop. All rights reserved.</p>
</footer>
</body>
</html>
<?php
if($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    if(empty($name) OR !filter_var($email, FILTER_VALIDATE_EMAIL) OR empty($message)) {
        // Handle error here: for example, redirect back to form or display an error message
        echo "Oops! There was a problem with your submission. Please complete the form and try again.";
        exit;
    }

    $recipient = "mark_theshark@hotmail.com";
    $subject = "New contact from $name";
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";

    $email_headers = "From: $name <$email>";

    if(mail($recipient, $subject, $email_content, $email_headers)) {
        // Successfully sent
        echo "Thank You! Your message has been sent.";
    } else {
        // Failed to send
        echo "Oops! Something went wrong and we couldn't send your message.";
    }
} else {
    // Not a POST request, redirect to the form or handle accordingly
    echo "There was a problem with your submission, please try again.";
}
?>

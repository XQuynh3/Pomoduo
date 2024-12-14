<?php 

include 'connect.php';
session_start();
if (isset($_POST['changePass'])) {
    if (isset($_SESSION['email'])) {
        $email = $_SESSION['email'];
        $oldPassword = md5($_POST['oldPassword']); // Hash the old password input
        $newPassword = md5($_POST['newPassword']); // Hash the new password input

        // Check if the old password is correct
        $query = mysqli_query($conn, "SELECT * FROM `users` WHERE email='$email' AND password='$oldPassword'");

        if (mysqli_num_rows($query) > 0) {
            // If old password is correct, update to the new password
            $updateQuery = "UPDATE `users` SET password='$newPassword' WHERE email='$email'";

            if (mysqli_query($conn, $updateQuery)) {
                echo "Password updated successfully!";
                header("Location: index.php");
            } else {
                echo "Error updating password: " . mysqli_error($conn);
            }
        } else {
            echo "Incorrect old password. Please try again.";
        }
    } else {
        echo "You are not logged in. Please log in to update your password.";
    }
}
?>

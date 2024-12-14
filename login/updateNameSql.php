<?php 



include 'connect.php';
session_start();


if (isset($_POST['changeName'])) {
    echo "test";
    $newName=$_POST['name'];
    $email = $_SESSION['email'];
    echo $newName;
    $updateQuery = "UPDATE `users` SET name='$newName' WHERE email='$email'";

    if (mysqli_query($conn, $updateQuery)) {
        echo "Username updated successfully!";
        header("Location: homepage.php");
    } else {
        echo "Error updating password: " . mysqli_error($conn);
    }            
}
?>

<?php 

include 'connect.php';

if(isset($_POST['logIn'])){
    $email=$_POST['email'];
    $password=$_POST['password'];
    $password=md5($password) ;
    $sql="SELECT * FROM users WHERE email='$email' and password='$password'";
    $result=$conn->query($sql);
    if($result->num_rows>0){
     session_start();
     $row=$result->fetch_assoc();
     $_SESSION['email']=$row['email'];
     header("Location: homepage.php");
     exit();
    }
    else{
        header("Location: index.php");
        $_SESSION['message'] = 'Incorrect email or password.';
        //header("Location: index.php?x=1");
        //echo "Not Found, Incorrect Email or Password";
    }
 
 }
 ?>
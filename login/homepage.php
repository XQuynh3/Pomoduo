<?php
session_start();
include("connect.php");

?>



<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Study Solo</title>
  <link rel="stylesheet" href="./sideBar.css">
</head>
<body>
  <div class="container">
  <?php include 'menu.php'; ?>
    <!-- Main Content -->
    <main class="main-content">
      <div class="content">
        <div class="preview">
          <img src="./pic/background-preview.jpg" alt="Study Room Preview">
        </div>
        <div class="info">
          <h1>Study Solo</h1>
          <p>
            Hello <?php

            if(isset($_SESSION['email'])){
              $email = $_SESSION['email'];
              $query=mysqli_query($conn, "SELECT users.* FROM `users` WHERE users.email='$email'");
              while($row=mysqli_fetch_array($query)){
                  echo $row['name'];
                  $_SESSION['name']=$row['name'];
              }
             }
             ?>
          </p>
          <button class="start-btn">Start Solo Study</button>
        </div>
      </div>
      <div><a href="./change_pw.php">Change password</a></div>
    </main>
  </div>
</body>
</html>

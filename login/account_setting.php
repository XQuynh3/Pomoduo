<?php 

include 'connect.php';
session_start();


    if(isset($_SESSION['email'])){
        $email = $_SESSION['email'];
        $query=mysqli_query($conn, "SELECT users.* FROM `users` WHERE users.email='$email'");
        while($row=mysqli_fetch_array($query)){
            $name = $row['name'];
        }
    }         
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Account Settings</title>
    <link rel="stylesheet" href="./style_accountsetting.css">
</head>
<body>
    <div class="container">
        <div class="header">
            <button class="back-button">&#8592;</button>
            <h1>Profile</h1>
        </div>
        <div class="profile-section">
            <div class="photo-container">
                <div class="profile-photo" id="profileImg"></div>
                <!--<script>
                    var currentImg = document.getElementById("profileImg")
                    <?php 
                    
                    ?>
                </script>-->
                
            </div>

            <form method="post" action="updateNameSql.php">
                <div class="profile-form" >
                    <label for="name">Name</label>
                    <div style="display: flex; align-items: center;">
                        <input type="text" id="name" name="name" value="<?php echo $name ?>" style="flex: 1; margin-right: 10px;">
                        <button type="submit" id="change-display-name" name="changeName" class="change">Change</button>
                    </div>

                    <label for="email">Email</label>
                    <input type="email" id="email" value="<?php echo $email ?>" readonly>

                    <div class="actions">
                        <a href="./change_pw.php" class="change-password">Change password</a>
                        <a href="#" class="change-password">Report</a>
                    </div>
                </div>
            </form>
        </div>
    </div>
    <script src="./account_setting.js"></script>
</body>
</html>

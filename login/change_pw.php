
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Change Password</title>
    <link rel="stylesheet" href="./style_changepw.css">
</head>
<body>
    <div class="container">
        <div class="back-arrow">
            <a href="./">
                <span>&larr;</span>
            </a>
        </div>
        <h1>Change Password</h1>
        <form method="post" action="change_pw_sql.php">
            <!-- Username field -->
            <label for="username">OLD PASSWORD</label>
            <input type="password" id="username" name="oldPassword" placeholder="Enter your old password">
            <!-- New password field -->
            <label for="new-password">NEW PASSWORD</label>
            <p class="hint">At least 9 characters, with uppercase and lowercase letter</p>
            <input type="password" id="new-password" name="newPassword" placeholder="Enter new password">
            <!-- Confirm password field -->
            <label for="confirm-password">CONFIRM PASSWORD</label>
            <input type="password" id="confirm-password" placeholder="Confirm your password">
            <!-- Reset button -->
            <button class="reset-btn" value="change" name="changePass" >RESET</button>
        </form>
    </div>
    <!-- <script src="./change_pw.js"></script> -->
</body>
</html>

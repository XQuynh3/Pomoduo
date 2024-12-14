<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reset Password</title>
    <link rel="stylesheet" href="./reset_pw.css">
</head>
<body>
    <div class="container">
        <div class="back-arrow">
            <a href="./">
                <span>&larr;</span>
            </a>
        </div>
        <h1>Reset Password</h1>
        <form>
            <!-- New password field -->
            <label for="new-password">NEW PASSWORD</label>
            <p class="hint">At least 9 characters, with uppercase and lowercase letter</p>
            <input type="password" id="new-password" placeholder="Enter new password">
            <!-- Confirm password field -->
            <label for="confirm-password">CONFIRM PASSWORD</label>
            <input type="password" id="confirm-password" placeholder="Confirm your password">
            <!-- Reset button -->
            <a href="../html/login.html" class="reset-btn">RESET</a>
        </form>
    </div>
    <script src="./reset_pw.js"></script>
</body>
</html>

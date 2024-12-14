<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login & Signup</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <div id="logIn" class="login-container">
        <div class="logo">
            <img src="./pic/logo-removebg-preview.png" alt="Cute Character">
        </div>
        <?php
if (isset($_SESSION['message']))
{
    echo $_SESSION['message'];
    ?>
    <script>alert(1)</script>
    <?php
    unset($_SESSION['message']);
}
?>
        <form class="login-form" method="post" action="login.php">
            <input type="text" name="email" placeholder="Email address or phone number" class="input-field">
            <input type="password"name="password"  placeholder="Password" class="input-field">
            <div class="options">
                <label>
                    <input type="checkbox"> Remember me
                </label>
                <a href="./reset_pw.php" class="forgot-password">Forgot password?</a>
            </div>
            <button class="login-button" value="Log In" name="logIn">Login</button>
            <a href="#" class="create-account" id="signUpButton">Create new account?</a>
        </form>
        <div class="social-login">
            <a href="#"><img src="./fb.webp" alt="Facebook"></a>
            <a href="#"><img src="./gg.png" alt="Google"></a>
        </div>
    </div>
    
    <div id="signup" class="signup-container" style="display: none;">
        <a href="./login.html" class="back-arrow">←</a>
        <h1>Create an account to get started.</h1>
        <form class="signup-form" method="post" action="register.php">
            <label for="name">NAME</label>
            <input type="text" id="name" name="name" class="input-field" placeholder="Enter your name">
            
            <label for="email">EMAIL</label>
            <input type="email" id="email" name="email" class="input-field" placeholder="Enter your email">
    
            <label for="password">PASSWORD</label>
            <input type="password" id="password" name="password" class="input-field" placeholder="Enter your password">
    
            <!-- <label for="confirm-password">CONFIRM PASSWORD</label>
            <input type="password" id="confirm-password" class="input-field" placeholder="Confirm your password"> -->
    
            <button class="signup-button" value="Sign Up" name="signUp">SIGN UP</button>
            <p class="login-link">
                Already have an account? 
                <a href="#" id="logInButton" class="login-link">Log in</a>.
            </p>
        </form>
    </div>
    
    <script src="./script.js"></script>
</body>
</html>

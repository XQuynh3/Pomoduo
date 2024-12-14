/*document.addEventListener("DOMContentLoaded", function () {
    // Lấy các phần tử của form đăng nhập
    const loginEmailInput = document.querySelector(".login-form input[type='text']");
    const loginPasswordInput = document.querySelector(".login-form input[type='password']");
    const loginButton = document.querySelector(".login-button");

    // Lấy các phần tử của form đăng ký
    const signupForm = document.querySelector(".signup-form");
    const signupNameInput = document.getElementById("name");
    const signupEmailInput = document.getElementById("email");
    const signupPasswordInput = document.getElementById("password");
    const signupConfirmPasswordInput = document.getElementById("confirm-password");
    const signupButton = document.querySelector(".signup-button");

    // Hàm hiển thị thông báo lỗi
    function showError(input, message) {
        const errorMessage = document.createElement("p");
        errorMessage.textContent = message;
        errorMessage.style.color = "red";
        errorMessage.style.fontSize = "12px";
        errorMessage.style.marginTop = "-15px";
        errorMessage.style.marginBottom = "15px";

        // Xóa thông báo lỗi cũ nếu có
        if (input.nextElementSibling && input.nextElementSibling.tagName === "P") {
            input.nextElementSibling.remove();
        }
        input.insertAdjacentElement("afterend", errorMessage);
    }

    // Hàm xóa lỗi
    function clearError(input) {
        if (input.nextElementSibling && input.nextElementSibling.tagName === "P") {
            input.nextElementSibling.remove();
        }
    }

    // Hàm kiểm tra email hợp lệ
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Xử lý sự kiện khi nhấn nút "Login"
    loginButton.addEventListener("click", function (e) {
        e.preventDefault(); // Ngăn gửi form mặc định

        // Xóa lỗi cũ
        clearError(loginEmailInput);
        clearError(loginPasswordInput);

        let hasError = false;

        // Kiểm tra email hoặc số điện thoại
        if (loginEmailInput.value.trim() === "") {
            showError(loginEmailInput, "Email or phone number cannot be empty");
            hasError = true;
        } else if (!isValidEmail(loginEmailInput.value.trim()) && isNaN(loginEmailInput.value.trim())) {
            showError(loginEmailInput, "Enter a valid email address or phone number");
            hasError = true;
        }

        // Kiểm tra mật khẩu
        if (loginPasswordInput.value.trim() === "") {
            showError(loginPasswordInput, "Password cannot be empty");
            hasError = true;
        } else if (loginPasswordInput.value.trim().length < 9) {
            showError(loginPasswordInput, "Password must be at least 9 characters");
            hasError = true;
        }

        // Nếu không có lỗi, thực hiện hành động đăng nhập
        if (!hasError) {
            alert("Login successful!");
            //window.location.href = "./main_menu.html"; // Điều hướng tới trang chính
        }
    });

    // Xử lý sự kiện khi nhấn nút "SIGN UP"
    signupButton.addEventListener("click", function (e) {
        e.preventDefault(); // Ngăn việc gửi form mặc định

        // Xóa tất cả lỗi cũ
        clearError(signupNameInput);
        clearError(signupEmailInput);
        clearError(signupPasswordInput);
        clearError(signupConfirmPasswordInput);

        let hasError = false;

        // Kiểm tra tên
        if (signupNameInput.value.trim() === "") {
            showError(signupNameInput, "Name cannot be empty");
            hasError = true;
        }

        // Kiểm tra email
        if (signupEmailInput.value.trim() === "") {
            showError(signupEmailInput, "Email cannot be empty");
            hasError = true;
        } else if (!isValidEmail(signupEmailInput.value.trim())) {
            showError(signupEmailInput, "Invalid email address");
            hasError = true;
        }

        // Kiểm tra mật khẩu
        if (signupPasswordInput.value.trim() === "") {
            showError(signupPasswordInput, "Password cannot be empty");
            hasError = true;
        } else if (signupPasswordInput.value.trim().length < 6) {
            showError(signupPasswordInput, "Password must be at least 6 characters");
            hasError = true;
        }

        // Kiểm tra xác nhận mật khẩu
        if (signupConfirmPasswordInput.value.trim() !== signupPasswordInput.value.trim()) {
            showError(signupConfirmPasswordInput, "Passwords do not match");
            hasError = true;
        }

        // Nếu không có lỗi, thực hiện điều hướng hoặc gửi dữ liệu
        if (!hasError) {
            alert("Signup successful! Let's login again!");
            //window.location.href = "./login.html"; // Chuyển hướng tới trang đăng nhập
        }
    });
}); */
// Get elements
const signUpButton = document.getElementById('signUpButton');
const logInButton = document.getElementById('logInButton');
const logInForm = document.getElementById('logIn');
const signUpForm = document.getElementById('signup');

// Show the Signup form and hide the Login form
signUpButton.addEventListener('click', function (e) {
    e.preventDefault();
    logInForm.style.display = "none";
    signUpForm.style.display = "block";
});

// Show the Login form and hide the Signup form
logInButton.addEventListener('click', function (e) {
    e.preventDefault();
    signUpForm.style.display = "none";
    logInForm.style.display = "block";
});

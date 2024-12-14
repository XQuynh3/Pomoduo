document.addEventListener("DOMContentLoaded", function () {
    // Lấy các phần tử từ form
    const usernameInput = document.getElementById("username");
    const newPasswordInput = document.getElementById("new-password");
    const confirmPasswordInput = document.getElementById("confirm-password");
    const resetButton = document.querySelector(".reset-btn");

    // Hàm hiển thị thông báo lỗi
    function showError(input, message) {
        // Xóa thông báo lỗi cũ
        if (input.nextElementSibling && input.nextElementSibling.tagName === "P") {
            input.nextElementSibling.remove();
        }

        const errorMessage = document.createElement("p");
        errorMessage.textContent = message;
        errorMessage.style.color = "red";
        errorMessage.style.fontSize = "12px";
        errorMessage.style.marginTop = "-10px";
        errorMessage.style.marginBottom = "15px";

        input.insertAdjacentElement("afterend", errorMessage);
    }

    // Hàm xóa thông báo lỗi
    function clearError(input) {
        if (input.nextElementSibling && input.nextElementSibling.tagName === "P") {
            input.nextElementSibling.remove();
        }
    }

    // Hàm kiểm tra độ mạnh của mật khẩu mới
    function isValidPassword(password) {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{9,}$/;
        return passwordRegex.test(password);
    }

    // Xử lý sự kiện khi nhấn nút "RESET"
    resetButton.addEventListener("click", function (e) {
        e.preventDefault(); // Ngăn gửi form mặc định

        // Xóa lỗi cũ
        clearError(usernameInput);
        clearError(newPasswordInput);
        clearError(confirmPasswordInput);

        let hasError = false;

        // Kiểm tra tên người dùng
        if (usernameInput.value.trim() === "") {
            showError(usernameInput, "Username cannot be empty");
            hasError = true;
        }

        // Kiểm tra mật khẩu mới
        if (newPasswordInput.value.trim() === "") {
            showError(newPasswordInput, "New password cannot be empty");
            hasError = true;
        } else if (!isValidPassword(newPasswordInput.value.trim())) {
            showError(newPasswordInput, "Password must be at least 9 characters, with uppercase and lowercase letters");
            hasError = true;
        }

        // Kiểm tra xác nhận mật khẩu
        if (confirmPasswordInput.value.trim() === "") {
            showError(confirmPasswordInput, "Confirm password cannot be empty");
            hasError = true;
        } else if (newPasswordInput.value.trim() !== confirmPasswordInput.value.trim()) {
            showError(confirmPasswordInput, "Passwords do not match");
            hasError = true;
        }

        // Nếu không có lỗi, thực hiện hành động reset mật khẩu
        if (!hasError) {
            alert("Password reset successful! Let's login again");
            window.location.href = "./"; // Điều hướng tới trang thành công
        }
    });
});

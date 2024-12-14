document.getElementById("forgot-password-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form submission for validation

    const email = document.getElementById("email").value;

    // Kiểm tra nếu email trống
    if (!email) {
        alert("Email cannot be empty.");
        return;
    }

    // Kiểm tra định dạng email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Nếu hợp lệ, gửi thông báo hoặc xử lý gửi email (ví dụ gọi API)
    alert("Password reset email sent successfully to " + email);
});

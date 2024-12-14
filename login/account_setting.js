document.addEventListener("DOMContentLoaded", function () {
    // Xử lý sự kiện nút quay lại
    const backButton = document.querySelector(".back-button");
    backButton.addEventListener("click", function () {
        window.history.back();
    });

    // Xử lý thay đổi ảnh đại diện
    const profilePhoto = document.querySelector(".profile-photo");
    
    let currentIndex = 0;
    profilePhoto.addEventListener("click", function () {
        const profileImg = document.getElementById("profileImg");
        const images = [
            "url('./pic/1.png')",
            "url('./pic/2.png')",
            "url('./pic/3.png')",
            "url('./pic/4.png')"
        ]



        profileImg.style.backgroundImage = images[currentIndex];
        currentIndex=(currentIndex + 1) % images.length;
    });

    // Xử lý thay đổi tên hiển thị
    // const changeDisplayNameButton = document.querySelector("#change-display-name");
    // changeDisplayNameButton.addEventListener("click", function () {
    //     const displayNameInput = document.querySelector("#name");
    //     alert(`Your display name has been changed to: ${displayNameInput.value}`);
    //     // Gửi tên mới lên server hoặc xử lý tiếp
    // });

    // Xử lý điều hướng đến trang thay đổi mật khẩu
    const changePasswordLink = document.querySelector(".change-password");
    // changePasswordLink.addEventListener("click", function (event) {
    //     event.preventDefault();
    //     //window.location.href = "./reset_pw.html";
    // });
    document.addEventListener("DOMContentLoaded", function () {
        // Change Display Name functionality
        const changeDisplayNameButton = document.getElementById("change-display-name");
        const displayNameInput = document.getElementById("name");

        changeDisplayNameButton.addEventListener("click", function () {
            const newName = prompt("Enter your new display name:", displayNameInput.value);
            if (newName) {
                displayNameInput.value = newName;
                alert("Display name updated successfully!");
            }
        });
    });
});

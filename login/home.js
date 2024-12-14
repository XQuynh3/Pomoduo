function togglePopup(button) {
  // Lấy popup của người dùng liên quan đến avatar được click
  const popup = button.closest('.user').querySelector('.user-info-popup');

  // Lấy tất cả các popup khác
  const allPopups = document.querySelectorAll('.user-info-popup');

  // Ẩn tất cả các popup khác
  allPopups.forEach((p) => {
    if (p !== popup) {
      p.classList.remove('active'); // Ẩn popup khác
    }
  });

  // Toggle class 'active' cho popup hiện tại
  popup.classList.toggle('active'); // Hiển thị hoặc ẩn popup
}

// Ẩn tất cả popup khi click ra ngoài popup và avatar
document.addEventListener('click', (event) => {
  const isPopup = event.target.closest('.user-info-popup');
  const isButton = event.target.closest('.avatar-button');

  // Nếu click không phải vào popup hoặc avatar, ẩn tất cả các popup
  if (!isPopup && !isButton) {
    const allPopups = document.querySelectorAll('.user-info-popup');
    allPopups.forEach((popup) => {
      popup.classList.remove('active'); // Ẩn tất cả popup khi click ra ngoài
    });
  }
});

// Ẩn popup khi di chuột ra ngoài
document.querySelectorAll('.user-info-popup').forEach(popup => {
  popup.addEventListener('mouseleave', () => {
    popup.classList.remove('active'); // Ẩn popup khi chuột rời khỏi
  });
});

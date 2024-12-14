// Lấy các phần tử icon
const personIcon = document.querySelector('.tool-icon:nth-child(1)'); // Icon hình người
const clockIcon = document.querySelector('.tool-icon:nth-child(2)'); // Icon đồng hồ

// Lấy các phần tử bảng
const participantsPopup = document.querySelector('.menu-popup'); // Bảng participants
const timerSection = document.querySelector('.timer-section'); // Bảng timer

// Hàm ẩn tất cả các bảng
function hideAllPopups() {
    participantsPopup.style.display = 'none';
    timerSection.style.display = 'none';
}

// Thêm sự kiện click cho icon hình người
personIcon.addEventListener('click', () => {
    // Ẩn các popup khác và toggle bảng participants
    const isVisible = participantsPopup.style.display === 'block';
    hideAllPopups();
    participantsPopup.style.display = isVisible ? 'none' : 'block';
});

// Thêm sự kiện click cho icon đồng hồ
clockIcon.addEventListener('click', () => {
    // Ẩn các popup khác và toggle bảng timer
    const isVisible = timerSection.style.display === 'block';
    hideAllPopups();
    timerSection.style.display = isVisible ? 'none' : 'block';
});

// Ẩn các popup khi click ra ngoài
document.addEventListener('click', (event) => {
    if (!event.target.closest('.tool-icon') && !event.target.closest('.menu-popup') && !event.target.closest('.timer-section')) {
        hideAllPopups();
    }
});
// timer-section
// Lấy các phần tử cần thao tác
const tabs = document.querySelectorAll('.tab');
const timeDisplay = document.querySelector('.time');
const startButton = document.querySelector('.start-button');
const musicButton = document.querySelector('.top-menu .icon:nth-child(2)'); // Nút 🎵
const audio = new Audio('path-to-your-audio-file.mp3'); // Đường dẫn đến file nhạc, nằm trong database nha XQ

let countdown; // Biến lưu trữ để quản lý bộ đếm ngược
let isRunning = false; // Trạng thái đếm ngược
let isMuted = true; // Trạng thái nhạc (mute mặc định)

// Hàm cập nhật thời gian khi đổi tab
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        if (isRunning) return; // Không cho phép đổi tab khi đang đếm ngược
        clearInterval(countdown); // Dừng bộ đếm ngược hiện tại nếu có
        tabs.forEach(t => t.classList.remove('active')); // Xóa active khỏi các tab khác
        tab.classList.add('active'); // Thêm active cho tab hiện tại
        const time = tab.getAttribute('data-time'); // Lấy thời gian từ data-time
        timeDisplay.textContent = `${time.padStart(2, '0')}:00`;
    });
});

// Hàm đếm ngược
function startCountdown(duration) {
    let timeRemaining = duration * 60;
    isRunning = true; // Đặt trạng thái đang chạy
    startButton.disabled = true; // Vô hiệu hóa nút Start
    tabs.forEach(tab => tab.disabled = true); // Vô hiệu hóa các tab

    countdown = setInterval(() => {
        const minutes = Math.floor(timeRemaining / 60).toString().padStart(2, '0');
        const seconds = (timeRemaining % 60).toString().padStart(2, '0');
        timeDisplay.textContent = `${minutes}:${seconds}`;
        timeRemaining--;

        if (timeRemaining < 0) {
            clearInterval(countdown);
            isRunning = false; // Kết thúc trạng thái đang chạy
            startButton.disabled = false; // Kích hoạt lại nút Start
            tabs.forEach(tab => tab.disabled = false); // Kích hoạt lại các tab
            alert('Time is up!');
        }
    }, 1000);
}

// Xử lý khi nhấn nút Start
startButton.addEventListener('click', () => {
    if (isRunning) return; // Không cho phép nhấn nút nếu đang đếm ngược
    const activeTab = document.querySelector('.tab.active');
    const duration = parseInt(activeTab.getAttribute('data-time'));
    startCountdown(duration);
});

//
// Xử lý nút 🎵 (bật/tắt nhạc)
musicButton.addEventListener('click', () => {
    if (isMuted) {
        audio.loop = true; // Đặt nhạc lặp lại
        audio.play(); // Phát nhạc
        isMuted = false;
        musicButton.textContent = '🎵'; // Thay đổi biểu tượng
    } else {
        audio.pause(); // Dừng nhạc
        isMuted = true;
        musicButton.textContent = '❌'; // Thay đổi lại biểu tượng
    }
});
//
//bottom-left: lấy time hiện tại
function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('current-time').textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateTime, 1000);
updateTime(); // Initial call to set the time immediately

// Đặt trạng thái ẩn mặc định khi tải trang
hideAllPopups();

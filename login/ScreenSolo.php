<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Screen Solo</title>
    <link rel="stylesheet" href="./ScreenSolo.css">
</head>
<body>
    <div class="background">
        <div class="bottom-left" id="room-time">
            <span id="current-time"></span> | hihihaha<br>
        </div>
        <!-- Top right menu icons -->
        <div class="top-menu">
            <div class="icon">🔔</div>
            <div class="icon">🎵</div>
        </div>

        <!-- Menu popup -->
        <div class="menu-popup">
            <div class="popup-header">Participants</div>
            <div class="participant-list">
                <div class="participant-item">
                    <span class="participant-avatar">🐧</span>
                    <span class="participant-name">My Duyen</span>
                </div>
                <div class="participant-item">
                    <span class="participant-avatar">🐱</span>
                    <span class="participant-name">XQuyinhngoanmeow</span>
                </div>
                <div class="participant-item">
                    <span class="participant-avatar">🐰</span>
                    <span class="participant-name">Kristien</span>
                </div>
                <div class="participant-item">
                    <span class="participant-avatar">🐿️</span>
                    <span class="participant-name">HuyenLinh</span>
                </div>
            </div>
        </div> 

        <!-- Timer section -->
        <div class="timer-section">
            <div class="timer-tabs">
                <button class="tab active" data-time="30">Pomodoro</button>
                <button class="tab" data-time="5">Short Break</button>
                <button class="tab" data-time="10">Long Break</button>
            </div>
            <div class="timer-display">
                <div class="time">30:00</div>
                <button class="start-button">Start</button>
            </div>
        </div>

        <!-- Bottom toolbar -->
        <div class="bottom-menu">
            <div class="tool-icon">👥</div>
            <div class="tool-icon">⏰</div>
            <div class="tool-icon">➡︎</div>
            
        </div>
    </div>
   
    <script src="./ScreenSolo.js"></script>
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dashboard</title>
  <link rel="stylesheet" href="./home.css">
</head>
<body>
  <div class="container">
      <?php include 'menu.php'; ?>
      <?php include 'navBar.php'; ?>

    <!-- Main Content -->
    <div class="main-content">
     <!-- <nav class="top-navbar"> -->
        <div class="nav-right">
          <!--<a href="#" class="nav-icon"><img src="./píc/schedule.png" alt="Schedule"></a>
          <a href="#" class="nav-icon"><img src="./píc/jam_bell.png" alt="Notifications"></a> -->
          
        </div>
        <!-- </nav> -->
      
      <div class="dashboard-content">
        <h2>Welcome to Home</h2>
        <p>Here you can join our group to meet more study pals.</p>
        <a href="https://discord.com" target="_blank" class="discord-link">Join our Discord</a>
      </div>
    </div>

    <!-- Sidebar Right -->
    <aside class="sidebar right-sidebar" id="rightSidebar">
      <h3>Active Users</h3>
      <ul class="user-list">
        <li class="user">
          <button class="avatar-button" onclick="togglePopup(this)">
            <img src="./pic/userAvataar.png" alt="User 1">
            <span class="user-name">AnnaMaria Rizou</span>
          </button>
          <div class="user-info-popup">
            <img src="./pic/userAvataar.png" alt="User 1">
            <p>AnnaMaria Rizou</p>
            <button class="add-friend-btn">Add Friend</button>
          </div>
        </li>
        <li class="user">
          <button class="avatar-button" onclick="togglePopup(this)">
            <img src="./pic/userAvataar.png" alt="User 2">
            <span class="user-name">Anya Forger</span>
          </button>
          <div class="user-info-popup">
            <img src="./pic/userAvataar.png" alt="User 2">
            <p>Anya Forger</p>
            <button class="add-friend-btn">Add Friend</button>
          </div>
        </li>
        <li class="user">
          <button class="avatar-button" onclick="togglePopup(this)">
            <img src="./pic/userAvataar.png" alt="User 3">
            <span class="user-name">Apex Sumit</span>
          </button>
          <div class="user-info-popup">
            <img src="./pic/userAvataar.png" alt="User 3">
            <p>Apex Sumit</p>
            <button class="add-friend-btn">Add Friend</button>
          </div>
        </li>
      </ul>
    </aside>
  </div>
  <script src="./home.js"></script>
</body>
</html>

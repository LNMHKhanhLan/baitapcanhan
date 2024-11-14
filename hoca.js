// script.js

// Lấy tất cả các con cá trong hồ
const fishes = document.querySelectorAll('.fish');

fishes.forEach((fish, index) => {
  // Đặt vị trí ngẫu nhiên ban đầu cho mỗi con cá
  fish.style.left = `${Math.random() * 80 + 10}%`;
  fish.style.top = `${Math.random() * 80 + 10}%`;

  // Tùy chỉnh chuyển động cho từng con cá dựa vào chỉ số index
  let dx, dy, speed;

  switch (index) {
    case 0: // Cá 1 - Di chuyển chậm và lượn nhẹ
      dx = 0.15; dy = 0.1;
      speed = 30;
      break;
    case 1: // Cá 2 - Di chuyển nhanh và lên xuống nhiều
      dx = 0.3; dy = 0.25;
      speed = 20;
      break;
    case 2: // Cá 3 - Di chuyển chậm, nhiều vòng tròn nhỏ
      dx = 0.2; dy = 0.05;
      speed = 35;
      break;
    case 3: // Cá 4 - Di chuyển lên xuống, ngang ít
      dx = 0.1; dy = 0.3;
      speed = 25;
      break;
    case 4: // Cá 5 - Di chuyển nhanh, đổi hướng liên tục
      dx = 0.4; dy = 0.35;
      speed = 15;
      break;
    case 5: // Cá 6 - Di chuyển theo đường ngẫu nhiên
      dx = Math.random() * 0.3; 
      dy = Math.random() * 0.3;
      speed = 18;
      break;
  }

  // Hàm để di chuyển mỗi con cá
  function moveFish() {
    let x = parseFloat(fish.style.left);
    let y = parseFloat(fish.style.top);

    // Cập nhật vị trí
    x += dx;
    y += dy;

    // Kiểm tra va chạm với cạnh của fish-tank
    if (x <= 0 || x >= 90) dx *= -1; // Đổi hướng ngang
    if (y <= 0 || y >= 90) dy *= -1; // Đổi hướng dọc

    // Cập nhật vị trí mới của con cá
    fish.style.left = `${x}%`;
    fish.style.top = `${y}%`;

    // Hiệu ứng xoay theo hướng di chuyển
    if (dx < 0) {
      fish.style.transform = 'rotateY(180deg)';
    } else {
      fish.style.transform = 'rotateY(0deg)';
    }

    // Di chuyển cá sau một khoảng thời gian tùy thuộc vào `speed`
    setTimeout(moveFish, speed);
  }

  // Bắt đầu di chuyển
  moveFish();
});

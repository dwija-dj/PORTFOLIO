function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");
const colors = [
  "#f5f5f5", // Off-white
  "#e0e0e0", // Light gray
  "#c8c8c8", // Medium-light gray
  "#a0a0a0", // Medium gray
  "#787878", // Medium-dark gray
  "#525252", // Dark gray
  "#343434", // Very dark gray
  "#222222", // Extremely dark gray
  "#111111", // Black
  "#ffb6c1", // Light pink
  "#ff7979", // Light coral
  "#ff5c33", // Pumpkin
  "#ffcc00", // Sunflower
  "#99cc00", // Lime
  "#00cc66", // Mint
  "#00bfff", // Aqua
  "#6666ff", // Blue
  "#cc00ff", // Lavender
  "#ff00cc" // Raspberry
];
circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
  circle.style.zIndex = "9999"; // Set the z-index to a higher value
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
});

function animateCircles() {
  let x = coords.x;
  let y = coords.y;

  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";

    circle.style.scale = (circles.length - index) / circles.length;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });

  requestAnimationFrame(animateCircles);
}

animateCircles();
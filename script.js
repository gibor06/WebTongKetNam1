function toggleDisplay(id) {
  const el = document.getElementById(id);
  el.style.display = el.style.display === "none" ? "block" : "none";
}

function showMore() {
  toggleDisplay("more-info");
}

function toggleContact() {
  toggleDisplay("contact-info");
}

// ========== Hiệu ứng bong bóng theo chuột ==========
let lastX = 0,
  lastY = 0,
  lastTime = 0;

document.addEventListener("mousemove", function (e) {
  const now = Date.now();
  const moved =
    Math.abs(e.clientX - lastX) > 2 || Math.abs(e.clientY - lastY) > 2;

  if (moved && now - lastTime > 50) {
    lastX = e.clientX;
    lastY = e.clientY;
    lastTime = now;

    const bubble = document.createElement("span");
    bubble.classList.add("bubble-light");
    const colors = ["#ff66cc", "#66ccff", "#ffff66", "#99ff99", "#ff9966"];
    bubble.style.background = colors[Math.floor(Math.random() * colors.length)];
    bubble.style.left = e.clientX + "px";
    bubble.style.top = e.clientY + "px";
    document.body.appendChild(bubble);

    setTimeout(() => bubble.remove(), 800);
  }
});

// ========== Bong bóng tự nổi ==========
setInterval(() => {
  const bubble = document.createElement("span");
  bubble.classList.add("auto-bubble");
  bubble.style.left = Math.random() * window.innerWidth + "px";
  const size = Math.random() * 10 + 5;
  bubble.style.width = bubble.style.height = size + "px";
  const colors = ["#ffffff44", "#ff99cc55", "#99ccff44", "#ffff9955"];
  bubble.style.background = colors[Math.floor(Math.random() * colors.length)];
  document.body.appendChild(bubble);
  setTimeout(() => bubble.remove(), 4000);
}, 100);

// ========== Click ripple ==========
document.addEventListener("click", function (e) {
  const ripple = document.createElement("div");
  ripple.className = "click-ripple";
  ripple.style.left = e.clientX + "px";
  ripple.style.top = e.clientY + "px";
  document.body.appendChild(ripple);
  setTimeout(() => ripple.remove(), 600);
});

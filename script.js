function showSurprise() {
  alert("🎉 Surprise! 🎉\n\nHappy Birthday Srishti Pal 💖\nYou are truly special and loved 🥰");
}

// 🎇 Fireworks Animation
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Firework {
  constructor(x, y, colors) {
    this.x = x;
    this.y = y;
    this.colors = colors;
    this.particles = [];
    for (let i = 0; i < 50; i++) {
      this.particles.push({
        x: x,
        y: y,
        angle: Math.random() * 2 * Math.PI,
        speed: Math.random() * 5 + 2,
        radius: Math.random() * 2 + 1,
        life: 100
      });
    }
  }
  update() {
    this.particles.forEach(p => {
      p.x += Math.cos(p.angle) * p.speed;
      p.y += Math.sin(p.angle) * p.speed;
      p.life--;
    });
  }
  draw() {
    this.particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.colors[Math.floor(Math.random() * this.colors.length)];
      ctx.fill();
    });
  }
}

let fireworks = [];
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (Math.random() < 0.05) {
    fireworks.push(new Firework(Math.random() * canvas.width, Math.random() * canvas.height, ["#ff4b2b", "#e100ff", "#ffff00", "#00ffcc"]));
  }
  fireworks.forEach((fw, i) => {
    fw.update();
    fw.draw();
    fw.particles = fw.particles.filter(p => p.life > 0);
    if (fw.particles.length === 0) fireworks.splice(i, 1);
  });
  requestAnimationFrame(animate);
}
animate();

// 🎂 Age Calculator
const birthYear = 2007;
const currentYear = new Date().getFullYear();
document.getElementById("age").innerText = `${currentYear - birthYear} years old!`;
document.getElementById("years").innerText = currentYear - birthYear;

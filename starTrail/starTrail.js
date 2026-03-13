let trailContainer;

window.onload = function () {
  if (document.createElement) {
    trailContainer = document.createElement("div");
    trailContainer.id = "trail"
    document.body.appendChild(trailContainer);
    this.setInterval(sparkle, 20);
  }
};

let x = (currentX = 0);
let y = (currentY = 0);
document.onmousemove = (event) => {
  y = event.pageY;
  x = event.pageX;
};
addEventListener("touchmove", (event) => {
  y = event.changedTouches[0].pageY;
  x = event.changedTouches[0].pageX;
});

const spread = 50;
function sparkle() {
  if (x != currentX || y != currentY) {
    currentX = x;
    currentY = y;
    createStar(
      Math.floor(x + (Math.random() - 0.5) * spread) + "px",
      Math.floor(y + (Math.random() - 0.5) * spread) + "px",
    );
  }
}

function createStar(x, y) {
  const star = document.createElement("div");
  star.textContent = randomStar();
  star.style.top = y;
  star.style.left = x;

  trailContainer.appendChild(star);
  setTimeout(() => trailContainer.removeChild(star), 1000);
}

function randomStar() {
  r = Math.random();
  if (r < 0.1) return "💖";
  return ["⭐", "🌟", "✨"][Math.floor(r * 3)];
}

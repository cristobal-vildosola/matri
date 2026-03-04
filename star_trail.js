const sparkles = 100;

let x = (currentX = 0);
let y = (currentY = 0);
let screenWidth = 800;
let screenHeight = 600;
let scrollLeft = (scrollDown = 0);

let stars = new Array();
let starv = new Array();
let stary = new Array();

window.onload = function () {
  if (document.getElementById) {
    for (let i = 0; i < sparkles; i++) {
      starv[i] = 0;
      stars[i] = createStar();
      document.body.appendChild(stars[i]);
    }
    set_width();
    sparkle();
  }
};

function createStar() {
  let div = document.createElement("div");
  div.style.position = "absolute";
  div.style.display = "none";
  div.style.fontSize = "18px";
  return div;
}

const emojis = ["⭐", "🌟", "✨"];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function sparkle() {
  let c;
  if (x != currentX || y != currentY) {
    currentX = x;
    currentY = y;
    for (c = 0; c < sparkles; c++)
      if (!starv[c]) {
        stars[c].style.left = Math.floor(x + (Math.random() - 0.5) * 50) + "px";
        stars[c].style.top = Math.floor(stary[c] = y + (Math.random() - 0.5) * 50) + "px";
        stars[c].style.display = "block";
        stars[c].textContent = emojis[getRandomInt(3)];
        starv[c] = 100;
        break;
      }
  }
  for (c = 0; c < sparkles; c++) {
    if (starv[c]) update_star(c);
  }
  setTimeout("sparkle()", 40);
}

function update_star(i) {
  if (--starv[i]) {
    stary[i] += 1 + Math.random() * 4;

    if (stary[i] < screenHeight + scrollDown - 21) {
      stars[i].style.top = Math.floor(stary[i]) + "px";
      stars[i].style.fontSize = Math.floor(starv[i] * 18 / 100) + "px";
    } else {
      stars[i].style.display = "none";
      starv[i] = 0;
      return;
    }
  } else {
    stars[i].style.display = "none";
  }
}

document.onmousemove = (e) => {
  y = e.pageY;
  x = e.pageX;
};

document.onscroll = () => {
  if (typeof self.pageYOffset == "number") {
    scrollDown = self.pageYOffset;
    scrollLeft = self.pageXOffset;
  } else if (document.body.scrollTop || document.body.scrollLeft) {
    scrollDown = document.body.scrollTop;
    scrollLeft = document.body.scrollLeft;
  } else if (
    document.documentElement &&
    (document.documentElement.scrollTop || document.documentElement.scrollLeft)
  ) {
    scrollLeft = document.documentElement.scrollLeft;
    scrollDown = document.documentElement.scrollTop;
  } else {
    scrollDown = 0;
    scrollLeft = 0;
  }
};

function set_width() {
  if (document.body.clientWidth) {
    screenWidth = document.body.clientWidth;
    screenHeight = document.body.clientHeight;
  } else if (typeof self.innerWidth == "number") {
    screenWidth = self.innerWidth;
    screenHeight = self.innerHeight;
  } else if (document.documentElement && document.documentElement.clientWidth) {
    screenWidth = document.documentElement.clientWidth;
    screenHeight = document.documentElement.clientHeight;
  }
}
window.onresize = set_width;

const background = document.querySelector(".background");


function createStreak() {
  const streak = document.createElement("div");
  streak.className = "streak";

  streak.style.left = Math.random() * window.innerWidth + "px";
  streak.style.top = window.innerHeight + Math.random() * 200 + "px";
  streak.style.animationDuration = 4 + Math.random() * 3 + "s";

  document.querySelector(".background").appendChild(streak);

  setTimeout(() => streak.remove(), 8000);
}

setInterval(createStreak, 120);

// Control how many streaks appear
setInterval(createStreak, 150);

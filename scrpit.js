const flowers = ["🌻", "💛", "🌼", "🌸"];

function createFlower() {
  const flower = document.createElement("div");
  flower.classList.add("flower");
  flower.innerText = flowers[Math.floor(Math.random() * flowers.length)];
  flower.style.left = Math.random() * 100 + "vw";
  flower.style.animationDuration = 3 + Math.random() * 5 + "s";
  document.body.appendChild(flower);

  setTimeout(() => {
    flower.remove();
  }, 8000);
}

setInterval(createFlower, 400);
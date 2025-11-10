const grid = document.querySelector('.projects-grid');
let cards = Array.from(document.querySelectorAll('.project-card'));
const prev = document.querySelector('.prev-btn');
const next = document.querySelector('.next-btn');

let index = 0;

// Function to apply the data colors to each card
function applyCardColors(card) {
  const bg = card.getAttribute('data-bg');
  const color = card.getAttribute('data-color');
  card.style.background = bg;
  card.style.color = color;
}

// Apply initial colors
cards.forEach(applyCardColors);

// Clone first and last, keeping their colors
const firstClone = cards[0].cloneNode(true);
const lastClone = cards[cards.length - 1].cloneNode(true);

applyCardColors(firstClone);
applyCardColors(lastClone);

firstClone.id = 'first-clone';
lastClone.id = 'last-clone';

grid.appendChild(firstClone);
grid.insertBefore(lastClone, grid.firstChild);

let slides = Array.from(document.querySelectorAll('.project-card'));
let size = slides[0].clientWidth;

// Start at first real card
grid.style.transform = `translateX(-${size}px)`;

function moveToSlide() {
  grid.style.transition = 'transform 0.6s ease-in-out';
  grid.style.transform = `translateX(-${(index + 1) * size}px)`;
}

next.addEventListener('click', () => {
  if (index >= slides.length - 2) return;
  index++;
  moveToSlide();
});

prev.addEventListener('click', () => {
  if (index <= -1) return;
  index--;
  moveToSlide();
});

grid.addEventListener('transitionend', () => {
  const currentSlide = slides[index + 1];
  if (currentSlide && currentSlide.id === 'first-clone') {
    grid.style.transition = 'none';
    index = 0;
    grid.style.transform = `translateX(-${size}px)`;
  } else if (currentSlide && currentSlide.id === 'last-clone') {
    grid.style.transition = 'none';
    index = slides.length - 3;
    grid.style.transform = `translateX(-${(index + 1) * size}px)`;
  }
});

window.addEventListener('resize', () => {
  size = slides[0].clientWidth;
  grid.style.transition = 'none';
  grid.style.transform = `translateX(-${(index + 1) * size}px)`;
});


const coins = document.querySelectorAll(".coin");

coins.forEach((coin) => {
  coin.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
  coin.style.cursor = "pointer";

  coin.addEventListener("mouseenter", () => {
    coin.style.transform = "scale(1.1)";
    coin.style.boxShadow = "0 6px 15px rgba(0, 0, 0, 0.2)";
  });

  coin.addEventListener("mouseleave", () => {
    coin.style.transform = "scale(1)";
    coin.style.boxShadow = "none";
  });
});
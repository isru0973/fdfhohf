// ===== Ambient twinkling stars =====
const starsContainer = document.getElementById('stars');
const STAR_COUNT = 60;

for (let i = 0; i < STAR_COUNT; i++) {
  const star = document.createElement('div');
  star.className = 'star';
  star.style.left = Math.random() * 100 + '%';
  star.style.top = Math.random() * 100 + '%';
  star.style.animationDelay = (Math.random() * 3.5) + 's';
  star.style.animationDuration = (2.5 + Math.random() * 3) + 's';
  starsContainer.appendChild(star);
}

// ===== Envelope open =====
const envelopeWrap = document.getElementById('envelopeWrap');
const envelope = document.getElementById('envelope');

envelope.addEventListener('click', () => {
  envelopeWrap.classList.add('open');
});

// ===== Wish button =====
const wishBtn = document.getElementById('wishBtn');
const wishNote = document.getElementById('wishNote');
const sparkleLayer = document.getElementById('sparkleLayer');

const wishMessages = [
  "Your wish is already coming true \u2014 you have me. \u2764\uFE0F",
  "Happy Birthday, Siham. I love you.",
  "Here's to everything you deserve this year."
];

let wishUsed = false;

wishBtn.addEventListener('click', (e) => {
  if (!wishUsed) {
    wishNote.textContent = wishMessages[0];
    wishUsed = true;
  } else {
    wishNote.textContent = wishMessages[Math.floor(Math.random() * wishMessages.length)];
  }
  wishNote.classList.add('show');

  // burst of sparkles from the button
  const rect = wishBtn.getBoundingClientRect();
  for (let i = 0; i < 18; i++) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    const x = rect.left + rect.width / 2 + (Math.random() - 0.5) * rect.width;
    const y = rect.top + rect.height / 2;
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    sparkle.style.animationDelay = (Math.random() * 0.2) + 's';
    sparkleLayer.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 1600);
  }
});

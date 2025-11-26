// ---------------- Footer Year ----------------
document.getElementById('year').textContent = new Date().getFullYear();

// ---------------- Hero Parallax ----------------
const hero = document.querySelector('.hero');
window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset;
  hero.style.backgroundPosition = `center ${scrollTop * 0.3}px`;

  // Parallax for cards
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach(card => {
    const rect = card.getBoundingClientRect();
    const speed = 0.2;
    const offset = rect.top * speed;
    const bgDiv = card.querySelector('.card-bg-div');
    if(bgDiv){
      bgDiv.style.transform = `translateY(${offset}px) scale(1.1)`;
    }
  });
});

// ---------------- Set Service Card Backgrounds ----------------
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
  const bg = card.getAttribute('data-bg');
  const bgDiv = document.createElement('div');
  bgDiv.classList.add('card-bg-div');
  bgDiv.style.backgroundImage = `url('${bg}')`;
  card.prepend(bgDiv);
});

// ---------------- Card Tilt Effect ----------------
serviceCards.forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 5;
    const rotateY = ((x - centerX) / centerX) * 5;
    card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = `rotateX(0deg) rotateY(0deg)`;
  });
});
// ---------------- Hero 3D Parallax ----------------
const heroInner = document.querySelector('.hero-inner');
const heroLogo = document.querySelector('.hero-logo img');

hero.addEventListener('mousemove', e => {
  const rect = hero.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = ((y - centerY) / centerY) * 10; // increase for stronger effect
  const rotateY = ((x - centerX) / centerX) * 10;

  heroInner.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
  heroLogo.style.transform = `translateX(${rotateY / 2}px) translateY(${-rotateX / 2}px)`;
});

hero.addEventListener('mouseleave', () => {
  heroInner.style.transform = `rotateX(0deg) rotateY(0deg)`;
  heroLogo.style.transform = `translateX(0px) translateY(0px)`;
});


// ---------------- Card Background Zoom on Hover ----------------
serviceCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    const bg = card.querySelector('.card-bg-div');
    if(bg) bg.style.transform = 'scale(1.1)';
  });
  card.addEventListener('mouseleave', () => {
    const bg = card.querySelector('.card-bg-div');
    if(bg) bg.style.transform = 'scale(1)';
  });
});

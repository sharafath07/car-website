/* ============================================
   AUTO DELUX - Core JavaScript
   ============================================ */
import { listCars } from './api.js';

const WA_NUMBER = '919526226011';
const PHONE = '9526226011';

/* ============================================
   DEMO CARS DATA (Preloaded on first visit)
   ============================================ */
async function loadAndRenderCars() {
  const resp = await listCars();
  if (resp.success) {
    const cars = resp.cars; // array from DB
    // call your existing render function with `cars`
    // renderCars(cars);

    return cars;
  } else {
    console.error('List error', resp);
  }
}


const DEMO_CARS = await loadAndRenderCars()

const DEMO_ENQUIRIES = [
  { id: 1, carId: 1, carName: 'Hyundai Verna', name: 'Aneesh Kumar', phone: '9526226011', message: 'More details please', createdAt: new Date(Date.now() - 1 * 86400000).toISOString() },
  { id: 2, carId: 11, carName: 'Maruti Suzuki Baleno', name: 'Sreelakshmi', phone: '9495008080', message: 'Price details', createdAt: new Date(Date.now() - 2 * 86400000).toISOString() },
  { id: 3, carId: 3, carName: 'Honda City VX', name: 'Jayesh', phone: '8567891234', message: 'Test drive available?', createdAt: new Date(Date.now() - 3 * 86400000).toISOString() },
  { id: 4, carId: 4, carName: 'Toyota Innova Crysta', name: 'Vishnu', phone: '9745123456', message: 'Is it available?', createdAt: new Date(Date.now() - 4 * 86400000).toISOString() }
];

const DEMO_CONTACTS = [
  { id: 1, name: 'Rahul Nair', email: 'rahul@email.com', phone: '9876543210', message: 'Need to know about car exchange', createdAt: new Date(Date.now() - 2 * 86400000).toISOString() }
];

const DEMO_SELL_REQUESTS = [];

/* ============================================
   LOCAL STORAGE HELPERS
   ============================================ */
// function getLS(key) {
//   try { return JSON.parse(localStorage.getItem(key)) || []; }
//   catch { return []; }
// }
// function setLS(key, val) {
//   localStorage.setItem(key, JSON.stringify(val));
// }
// function getObj(key) {
//   try { return JSON.parse(localStorage.getItem(key)) || {}; }
//   catch { return {}; }
// }

/* ============================================
   INITIALIZE DATA ON FIRST LOAD
   ============================================ */
// function initData() {
//   if (!localStorage.getItem('autodelux_init')) {
//     setLS('cars', DEMO_CARS);
//     setLS('enquiries', DEMO_ENQUIRIES);
//     setLS('contacts', DEMO_CONTACTS);
//     setLS('sellRequests', DEMO_SELL_REQUESTS);
//     localStorage.setItem('autodelux_init', '1');
//   }
// }

/* ============================================
   FORMATTING HELPERS
   ============================================ */
function formatPrice(p) { return '₹' + Number(p).toLocaleString('en-IN'); }
function formatKm(k) { return Number(k).toLocaleString('en-IN') + ' KM'; }
function formatDate(d) {
  return new Date(d).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
}
function generateId() { return Date.now() + Math.floor(Math.random() * 1000); }

/* ============================================
   CAR CARD HTML
   ============================================ */
function carCardHTML(car) {
  const img = car.mainImage || 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&q=80';
  return `
    <div class="car-card" data-id="${car.id}">
      <div class="car-card-img">
        <img src="${img}" alt="${car.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&q=80'">
        <span class="car-card-badge">${car.fuel}</span>
        <button class="car-card-fav" onclick="toggleFav(${car.id}, this)" title="Favourite">
          <i class="fa${isFav(car.id) ? 's' : 'r'} fa-heart"></i>
        </button>
      </div>

      <div class="car-card-body">
        <h3>${car.name}</h3>
        <div class="car-specs">
          <span class="car-spec"><i class="fas fa-calendar-alt"></i> ${car.year}</span>
          <span class="car-spec"><i class="fas fa-gas-pump"></i> ${car.fuel}</span>
          <span class="car-spec"><i class="fas fa-cog"></i> ${car.transmission}</span>
          <span class="car-spec"><i class="fas fa-tachometer-alt"></i> ${formatKm(car.km)}</span>
        </div>
      </div>

      <div class="car-card-footer">
        <div class="car-price">${formatPrice(car.price)}</div>

        <button class="btn-view"
          onclick="location.href='car-detail.html?id=${car.id}'">
          View Details
        </button>

      </div>
    </div>
  `;
}

/* ============================================
   FAVOURITES
   ============================================ */
function getFavs() { return getLS('favs'); }
function isFav(id) { return getFavs().includes(id); }
function toggleFav(id, btn) {
  let favs = getFavs();
  if (favs.includes(id)) {
    favs = favs.filter(f => f !== id);
    btn.innerHTML = '<i class="far fa-heart"></i>';
    btn.classList.remove('active');
  } else {
    favs.push(id);
    btn.innerHTML = '<i class="fas fa-heart"></i>';
    btn.classList.add('active');
  }
  setLS('favs', favs);
}

/* ============================================
   TOAST NOTIFICATIONS
   ============================================ */
function showToast(msg, type = 'success') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  const icon = type === 'success' ? 'fas fa-check-circle' : 'fas fa-exclamation-circle';
  toast.innerHTML = `<i class="${icon}"></i> ${msg}`;
  container.appendChild(toast);
  setTimeout(() => { toast.style.opacity = '0'; toast.style.transition = 'opacity 0.4s'; setTimeout(() => toast.remove(), 400); }, 3000);
}

/* ============================================
   NAVBAR FUNCTIONS
   ============================================ */
function initNavbar() {
  const ham = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav-links');
  if (ham && nav) {
    ham.addEventListener('click', () => nav.classList.toggle('open'));
  }
  // Active link
  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href') || '';
    if (href === current || (current === '' && href === 'index.html')) a.classList.add('active');
  });
}

/* ============================================
   SEARCH FUNCTION (HOME + HEADER)
   ============================================ */
function doSearch() {
  const q = document.getElementById('searchQ')?.value || '';
  const brand = document.getElementById('searchBrand')?.value || '';
  const minP = document.getElementById('searchMinPrice')?.value || '';
  const maxP = document.getElementById('searchMaxPrice')?.value || '';
  const fuel = document.getElementById('searchFuel')?.value || '';
  const params = new URLSearchParams();
  if (q) params.set('q', q);
  if (brand) params.set('brand', brand);
  if (minP) params.set('minP', minP);
  if (maxP) params.set('maxP', maxP);
  if (fuel) params.set('fuel', fuel);
  location.href = 'cars.html?' + params.toString();
}

/* ============================================
   HERO SLIDER
   ============================================ */
function initHeroSlider() {
  const slides = [
    'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1400&q=80',
    'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1400&q=80',
    'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1400&q=80'
  ];
  let current = 0;
  const hero = document.querySelector('.hero');
  if (!hero) return;

  function setSlide(i) {
    hero.style.backgroundImage = `url(${slides[i]})`;
    hero.style.backgroundSize = 'cover';
    hero.style.backgroundPosition = 'center';
  }
  setSlide(0);

  function next() { current = (current + 1) % slides.length; setSlide(current); }
  function prev() { current = (current - 1 + slides.length) % slides.length; setSlide(current); }

  document.querySelector('.hero-prev')?.addEventListener('click', prev);
  document.querySelector('.hero-next')?.addEventListener('click', next);
  setInterval(next, 5000);
}

/* ============================================
   WHATSAPP FLOAT
   ============================================ */
function initWAFloat() {
  const wa = document.querySelector('.wa-float');
  if (wa) wa.href = `https://wa.me/${WA_NUMBER}`;
}

/* ============================================
   INIT
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
  initData();
  initNavbar();
  initHeroSlider();
  initWAFloat();

  // Search
  document.getElementById('searchBtn')?.addEventListener('click', doSearch);
  document.getElementById('searchQ')?.addEventListener('keydown', e => { if (e.key === 'Enter') doSearch(); });

  // Populate brand dropdowns
  const cars = getLS('cars');
  const brands = [...new Set(cars.map(c => c.brand))].sort();
  document.querySelectorAll('.brand-select').forEach(sel => {
    brands.forEach(b => sel.add(new Option(b, b)));
  });
});
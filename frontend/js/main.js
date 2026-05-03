/* ============================================
   AUTO DELUX - Core JavaScript
   ============================================ */

const WA_NUMBER = '919526226011';
const PHONE = '9526226011';

/* ============================================
   DEMO CARS DATA (Preloaded on first visit)
   ============================================ */
const DEMO_CARS = [
  {
    id: 1, name: 'Hyundai Verna', brand: 'Hyundai', model: 'Verna', year: 2019,
    fuel: 'Petrol', transmission: 'Manual', km: 40000, owner: '1st Owner',
    insurance: 'Valid', location: 'Panjal, Kerala', price: 790000,
    description: 'Hyundai Verna 2019 Petrol Manual in excellent condition. Well maintained, smooth drive, all documents clear. Contact Auto Delux for more details. Single owner vehicle with full service history.',
    features: ['ABS', 'Airbags', 'AC', 'Power Steering', 'Power Windows', 'Alloy Wheels', 'Reverse Camera', 'Touch Screen'],
    mainImage: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
      'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80',
      'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=800&q=80'
    ],
    status: 'active', createdAt: new Date(Date.now() - 1 * 86400000).toISOString()
  },
  {
    id: 2, name: 'Maruti Suzuki Swift', brand: 'Maruti', model: 'Swift', year: 2018,
    fuel: 'Petrol', transmission: 'Manual', km: 60000, owner: '1st Owner',
    insurance: 'Valid', location: 'Kozhikode, Kerala', price: 540000,
    description: 'Maruti Suzuki Swift 2018, excellent condition, all paperwork clear. Fuel efficient and perfect city car.',
    features: ['ABS', 'AC', 'Power Steering', 'Power Windows'],
    mainImage: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&q=80',
      'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80'
    ],
    status: 'active', createdAt: new Date(Date.now() - 2 * 86400000).toISOString()
  },
  {
    id: 3, name: 'Honda City VX', brand: 'Honda', model: 'City', year: 2019,
    fuel: 'Petrol', transmission: 'Automatic', km: 35000, owner: '1st Owner',
    insurance: 'Valid', location: 'Thrissur, Kerala', price: 880000,
    description: 'Honda City VX Automatic 2019, premium sedan in showroom condition. Sunroof, alloy wheels, top model.',
    features: ['ABS', 'Airbags', 'AC', 'Power Steering', 'Power Windows', 'Alloy Wheels', 'Touch Screen', 'Cruise Control'],
    mainImage: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80',
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&q=80'
    ],
    status: 'active', createdAt: new Date(Date.now() - 3 * 86400000).toISOString()
  },
  {
    id: 4, name: 'Toyota Innova Crysta', brand: 'Toyota', model: 'Innova Crysta', year: 2017,
    fuel: 'Diesel', transmission: 'Manual', km: 75000, owner: '1st Owner',
    insurance: 'Valid', location: 'Malappuram, Kerala', price: 1250000,
    description: 'Toyota Innova Crysta 2017, 7-seater, diesel, perfect family vehicle. Company service history maintained.',
    features: ['ABS', 'Airbags', 'AC', 'Power Steering', 'Power Windows', 'Alloy Wheels', 'Reverse Camera'],
    mainImage: 'https://images.unsplash.com/photo-1586767003402-c87c3b09cfae?w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1586767003402-c87c3b09cfae?w=800&q=80',
      'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80'
    ],
    status: 'active', createdAt: new Date(Date.now() - 4 * 86400000).toISOString()
  },
  {
    id: 5, name: 'Volkswagen Polo', brand: 'Volkswagen', model: 'Polo', year: 2017,
    fuel: 'Petrol', transmission: 'Manual', km: 30000, owner: '2nd Owner',
    insurance: 'Expired', location: 'Calicut, Kerala', price: 525000,
    description: 'Volkswagen Polo 2017 petrol, well maintained, sporty hatchback. Low km driven.',
    features: ['ABS', 'AC', 'Airbags', 'Power Windows', 'Alloy Wheels'],
    mainImage: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80'
    ],
    status: 'active', createdAt: new Date(Date.now() - 5 * 86400000).toISOString()
  },
  {
    id: 6, name: 'Mahindra XUV500', brand: 'Mahindra', model: 'XUV500', year: 2016,
    fuel: 'Diesel', transmission: 'Manual', km: 90000, owner: '1st Owner',
    insurance: 'Valid', location: 'Kochi, Kerala', price: 780000,
    description: 'Mahindra XUV500 W10 2016, full option, 7-seater SUV. All features working.',
    features: ['ABS', 'Airbags', 'AC', 'Power Steering', 'Power Windows', 'Alloy Wheels', 'Reverse Camera', 'Touch Screen', 'Cruise Control'],
    mainImage: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80'
    ],
    status: 'active', createdAt: new Date(Date.now() - 6 * 86400000).toISOString()
  },
  {
    id: 7, name: 'Ford EcoSport', brand: 'Ford', model: 'EcoSport', year: 2018,
    fuel: 'Diesel', transmission: 'Manual', km: 50000, owner: '1st Owner',
    insurance: 'Valid', location: 'Palakkad, Kerala', price: 630000,
    description: 'Ford EcoSport Titanium 2018 diesel, excellent compact SUV, well maintained.',
    features: ['ABS', 'Airbags', 'AC', 'Power Steering', 'Alloy Wheels', 'Reverse Camera'],
    mainImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80'
    ],
    status: 'active', createdAt: new Date(Date.now() - 7 * 86400000).toISOString()
  },
  {
    id: 8, name: 'Hyundai i20 Asta', brand: 'Hyundai', model: 'i20', year: 2018,
    fuel: 'Petrol', transmission: 'Manual', km: 45000, owner: '1st Owner',
    insurance: 'Valid', location: 'Manjeri, Kerala', price: 625000,
    description: 'Hyundai i20 Asta 2018 petrol, top model, excellent condition. All features working perfectly.',
    features: ['ABS', 'Airbags', 'AC', 'Power Windows', 'Alloy Wheels', 'Touch Screen'],
    mainImage: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80'
    ],
    status: 'active', createdAt: new Date(Date.now() - 8 * 86400000).toISOString()
  },
  {
    id: 9, name: 'Tata Nexon XZ+', brand: 'Tata', model: 'Nexon', year: 2020,
    fuel: 'Petrol', transmission: 'Manual', km: 28000, owner: '1st Owner',
    insurance: 'Valid', location: 'Tirur, Kerala', price: 950000,
    description: 'Tata Nexon XZ+ 2020, low km, full option. Best safety rated compact SUV.',
    features: ['ABS', 'Airbags', 'AC', 'Power Windows', 'Alloy Wheels', 'Touch Screen', 'Reverse Camera'],
    mainImage: 'https://images.unsplash.com/photo-1563720223809-b2a83777d093?w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1563720223809-b2a83777d093?w=800&q=80'
    ],
    status: 'active', createdAt: new Date(Date.now() - 9 * 86400000).toISOString()
  },
  {
    id: 10, name: 'Kia Seltos HTX', brand: 'Kia', model: 'Seltos', year: 2021,
    fuel: 'Diesel', transmission: 'Automatic', km: 22000, owner: '1st Owner',
    insurance: 'Valid', location: 'Kondotty, Kerala', price: 1450000,
    description: 'Kia Seltos HTX 2021, low km, excellent condition. Premium SUV with all features.',
    features: ['ABS', 'Airbags', 'AC', 'Power Steering', 'Power Windows', 'Alloy Wheels', 'Touch Screen', 'Reverse Camera', 'Cruise Control'],
    mainImage: 'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=800&q=80'
    ],
    status: 'active', createdAt: new Date(Date.now() - 10 * 86400000).toISOString()
  },
  {
    id: 11, name: 'Maruti Suzuki Baleno', brand: 'Maruti', model: 'Baleno', year: 2018,
    fuel: 'Petrol', transmission: 'Manual', km: 55000, owner: '2nd Owner',
    insurance: 'Valid', location: 'Kochi, Kerala', price: 610000,
    description: 'Maruti Suzuki Baleno Zeta 2018, well maintained, good condition. Perfect city car.',
    features: ['ABS', 'AC', 'Power Windows', 'Touch Screen', 'Alloy Wheels'],
    mainImage: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&q=80'
    ],
    status: 'active', createdAt: new Date(Date.now() - 11 * 86400000).toISOString()
  },
  {
    id: 12, name: 'Renault Kwid RXT', brand: 'Renault', model: 'Kwid', year: 2019,
    fuel: 'Petrol', transmission: 'Manual', km: 38000, owner: '1st Owner',
    insurance: 'Valid', location: 'Tirur, Kerala', price: 380000,
    description: 'Renault Kwid RXT 2019, budget-friendly, good mileage. Excellent for first time buyers.',
    features: ['AC', 'Power Windows', 'Touch Screen'],
    mainImage: 'https://images.unsplash.com/photo-1462396240927-52058a6a84ec?w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1462396240927-52058a6a84ec?w=800&q=80'
    ],
    status: 'active', createdAt: new Date(Date.now() - 12 * 86400000).toISOString()
  }
];

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
function getLS(key) {
  try { return JSON.parse(localStorage.getItem(key)) || []; }
  catch { return []; }
}
function setLS(key, val) {
  localStorage.setItem(key, JSON.stringify(val));
}
function getObj(key) {
  try { return JSON.parse(localStorage.getItem(key)) || {}; }
  catch { return {}; }
}

/* ============================================
   INITIALIZE DATA ON FIRST LOAD
   ============================================ */
function initData() {
  if (!localStorage.getItem('autodelux_init')) {
    setLS('cars', DEMO_CARS);
    setLS('enquiries', DEMO_ENQUIRIES);
    setLS('contacts', DEMO_CONTACTS);
    setLS('sellRequests', DEMO_SELL_REQUESTS);
    localStorage.setItem('autodelux_init', '1');
  }
}

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
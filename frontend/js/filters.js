// AUTO DELUX - Filters & Sorting for cars.html
let allCars = [];
let filteredCars = [];
let currentPage = 1;
const CARS_PER_PAGE = 6;

function initCarsPage() {
  allCars = Storage.getCars().filter(c => c.status === 'active');
  filteredCars = [...allCars];
  renderFilters();
  applyFiltersAndSort();
  attachFilterListeners();
}

function renderFilters() {
  const brands = [...new Set(allCars.map(c => c.brand))].sort();
  const brandSelect = document.getElementById('filter-brand');
  if (brandSelect) {
    brandSelect.innerHTML = '<option value="">All Brands</option>' + 
      brands.map(b => `<option value="${b}">${b}</option>`).join('');
  }

  // Set range max values
  const years = allCars.map(c => c.year);
  const prices = allCars.map(c => c.price);
  const kms = allCars.map(c => c.km);

  const minY = Math.min(...years, 2000), maxY = Math.max(...years, 2024);
  const minP = Math.min(...prices, 0), maxP = Math.max(...prices, 5000000);
  const minK = 0, maxK = Math.max(...kms, 200000);

  setRange('year-min', minY, maxY, minY);
  setRange('year-max', minY, maxY, maxY);
  setRange('price-min', minP, maxP, minP);
  setRange('price-max', minP, maxP, maxP);
  setRange('km-min', minK, maxK, minK);
  setRange('km-max', minK, maxK, maxK);

  updateRangeLabels();
}

function setRange(id, min, max, val) {
  const el = document.getElementById(id);
  if (el) { el.min = min; el.max = max; el.value = val; }
}

function updateRangeLabels() {
  const rv = (id) => { const el = document.getElementById(id); return el ? parseInt(el.value) : 0; };
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };

  set('year-min-val', rv('year-min'));
  set('year-max-val', rv('year-max'));
  set('price-min-val', formatPrice(rv('price-min')));
  set('price-max-val', formatPrice(rv('price-max')));
  set('km-min-val', formatKm(rv('km-min')));
  set('km-max-val', formatKm(rv('km-max')));
}

function attachFilterListeners() {
  const inputs = ['filter-brand', 'filter-search', 'year-min', 'year-max', 
                  'price-min', 'price-max', 'km-min', 'km-max', 'sort-select'];
  inputs.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('change', () => { currentPage = 1; applyFiltersAndSort(); updateRangeLabels(); });
    if (el && el.type === 'range') {
      el.addEventListener('input', () => { updateRangeLabels(); applyFiltersAndSort(); });
    }
  });

  document.querySelectorAll('.fuel-check, .trans-check').forEach(cb => {
    cb.addEventListener('change', () => { currentPage = 1; applyFiltersAndSort(); });
  });

  const searchEl = document.getElementById('filter-search');
  if (searchEl) searchEl.addEventListener('input', () => { currentPage = 1; applyFiltersAndSort(); });

  document.getElementById('reset-filters')?.addEventListener('click', resetFilters);
}

function getChecked(cls) {
  return [...document.querySelectorAll(`.${cls}:checked`)].map(c => c.value);
}

function applyFiltersAndSort() {
  const brand = document.getElementById('filter-brand')?.value || '';
  const search = document.getElementById('filter-search')?.value?.toLowerCase() || '';
  const fuels = getChecked('fuel-check');
  const trans = getChecked('trans-check');
  const yearMin = parseInt(document.getElementById('year-min')?.value || 2000);
  const yearMax = parseInt(document.getElementById('year-max')?.value || 2024);
  const priceMin = parseInt(document.getElementById('price-min')?.value || 0);
  const priceMax = parseInt(document.getElementById('price-max')?.value || 99999999);
  const kmMin = parseInt(document.getElementById('km-min')?.value || 0);
  const kmMax = parseInt(document.getElementById('km-max')?.value || 9999999);
  const sort = document.getElementById('sort-select')?.value || 'latest';

  filteredCars = allCars.filter(car => {
    if (brand && car.brand !== brand) return false;
    if (search && !`${car.name} ${car.brand} ${car.model}`.toLowerCase().includes(search)) return false;
    if (fuels.length && !fuels.includes(car.fuel)) return false;
    if (trans.length && !trans.includes(car.transmission)) return false;
    if (car.year < yearMin || car.year > yearMax) return false;
    if (car.price < priceMin || car.price > priceMax) return false;
    if (car.km < kmMin || car.km > kmMax) return false;
    return true;
  });

  // Sort
  filteredCars.sort((a, b) => {
    switch (sort) {
      case 'price-asc': return a.price - b.price;
      case 'price-desc': return b.price - a.price;
      case 'km-asc': return a.km - b.km;
      case 'km-desc': return b.km - a.km;
      case 'year-desc': return b.year - a.year;
      case 'year-asc': return a.year - b.year;
      default: return new Date(b.createdAt) - new Date(a.createdAt);
    }
  });

  renderCarsGrid();
  renderPagination();
}

function renderCarsGrid() {
  const grid = document.getElementById('cars-grid');
  const countEl = document.getElementById('cars-count');
  if (!grid) return;

  const start = (currentPage - 1) * CARS_PER_PAGE;
  const pageCars = filteredCars.slice(start, start + CARS_PER_PAGE);

  if (countEl) countEl.innerHTML = `Showing <strong>${filteredCars.length}</strong> cars`;

  if (pageCars.length === 0) {
    grid.innerHTML = `
      <div class="no-cars" style="grid-column:1/-1">
        <i class="fas fa-car"></i>
        <h3>No cars found</h3>
        <p>Try adjusting your filters</p>
      </div>`;
    return;
  }

  grid.innerHTML = pageCars.map(renderCarCard).join('');
  if (typeof AOS !== 'undefined') AOS.refresh();
}

function renderPagination() {
  const el = document.getElementById('pagination');
  if (!el) return;

  const total = Math.ceil(filteredCars.length / CARS_PER_PAGE);
  if (total <= 1) { el.innerHTML = ''; return; }

  let html = `<button class="page-btn" onclick="goPage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}><i class="fas fa-chevron-left"></i></button>`;
  for (let i = 1; i <= total; i++) {
    html += `<button class="page-btn ${i === currentPage ? 'active' : ''}" onclick="goPage(${i})">${i}</button>`;
  }
  html += `<button class="page-btn" onclick="goPage(${currentPage + 1})" ${currentPage === total ? 'disabled' : ''}><i class="fas fa-chevron-right"></i></button>`;
  el.innerHTML = html;
}

function goPage(n) {
  const total = Math.ceil(filteredCars.length / CARS_PER_PAGE);
  if (n < 1 || n > total) return;
  currentPage = n;
  renderCarsGrid();
  renderPagination();
  window.scrollTo({ top: 300, behavior: 'smooth' });
}

function resetFilters() {
  document.getElementById('filter-brand').value = '';
  document.getElementById('filter-search').value = '';
  document.querySelectorAll('.fuel-check, .trans-check').forEach(cb => cb.checked = false);
  document.getElementById('sort-select').value = 'latest';
  renderFilters();
  currentPage = 1;
  applyFiltersAndSort();
}
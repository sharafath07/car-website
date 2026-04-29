// AUTO DELUX - Storage Utilities
const Storage = {
  get: (key) => {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    } catch { return null; }
  },
  set: (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch { return false; }
  },
  getCars: () => Storage.get('cars') || [],
  saveCars: (cars) => Storage.set('cars', cars),
  getEnquiries: () => Storage.get('enquiries') || [],
  saveEnquiries: (e) => Storage.set('enquiries', e),
  getContacts: () => Storage.get('contacts') || [],
  saveContacts: (c) => Storage.set('contacts', c),
  getSellRequests: () => Storage.get('sellRequests') || [],
  saveSellRequests: (s) => Storage.set('sellRequests', s),
  getSession: () => Storage.get('adminSession'),
  setSession: (s) => Storage.set('adminSession', s),
  clearSession: () => localStorage.removeItem('adminSession'),

  addCar: (car) => {
    const cars = Storage.getCars();
    car.id = Date.now();
    car.createdAt = new Date().toISOString();
    cars.unshift(car);
    Storage.saveCars(cars);
    return car;
  },
  updateCar: (id, data) => {
    const cars = Storage.getCars();
    const idx = cars.findIndex(c => c.id == id);
    if (idx !== -1) { cars[idx] = { ...cars[idx], ...data }; Storage.saveCars(cars); return true; }
    return false;
  },
  deleteCar: (id) => {
    const cars = Storage.getCars().filter(c => c.id != id);
    Storage.saveCars(cars);
  },
  getCarById: (id) => Storage.getCars().find(c => c.id == id) || null,

  addEnquiry: (e) => {
    const list = Storage.getEnquiries();
    e.id = Date.now();
    e.createdAt = new Date().toISOString();
    list.unshift(e);
    Storage.saveEnquiries(list);
    return e;
  },
  deleteEnquiry: (id) => {
    Storage.saveEnquiries(Storage.getEnquiries().filter(e => e.id != id));
  },

  addContact: (c) => {
    const list = Storage.getContacts();
    c.id = Date.now();
    c.createdAt = new Date().toISOString();
    list.unshift(c);
    Storage.saveContacts(list);
    return c;
  },
  deleteContact: (id) => {
    Storage.saveContacts(Storage.getContacts().filter(c => c.id != id));
  },

  addSellRequest: (s) => {
    const list = Storage.getSellRequests();
    s.id = Date.now();
    s.createdAt = new Date().toISOString();
    list.unshift(s);
    Storage.saveSellRequests(list);
    return s;
  },
  deleteSellRequest: (id) => {
    Storage.saveSellRequests(Storage.getSellRequests().filter(s => s.id != id));
  }
};

// Demo cars with placeholder images (SVG data URLs)
function generateCarSVG(color, name) {
  const c = color || '#1a2d4f';
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220" width="400" height="220">
  <rect width="400" height="220" fill="#f0f4f8"/>
  <rect x="40" y="110" width="320" height="60" rx="12" fill="${c}"/>
  <rect x="80" y="70" width="240" height="70" rx="16" fill="${c}" opacity="0.85"/>
  <rect x="100" y="80" width="80" height="45" rx="6" fill="#c8e6ff" opacity="0.7"/>
  <rect x="220" y="80" width="80" height="45" rx="6" fill="#c8e6ff" opacity="0.7"/>
  <circle cx="110" cy="172" r="25" fill="#222"/>
  <circle cx="110" cy="172" r="15" fill="#555"/>
  <circle cx="290" cy="172" r="25" fill="#222"/>
  <circle cx="290" cy="172" r="15" fill="#555"/>
  <rect x="30" y="130" width="40" height="18" rx="4" fill="#ffe066"/>
  <rect x="330" y="130" width="40" height="18" rx="4" fill="#ff6b6b"/>
  <text x="200" y="210" text-anchor="middle" font-family="Poppins,sans-serif" font-size="11" fill="#888">${name}</text>
  </svg>`;
  return 'data:image/svg+xml;base64,' + btoa(svg);
}

const DEMO_CARS = [
  {
    id: 1001,
    name: "Maruti Swift ZXi+",
    brand: "Maruti Suzuki",
    model: "Swift",
    year: 2021,
    fuel: "Petrol",
    transmission: "Manual",
    km: 28000,
    owner: "1st Owner",
    insurance: "Valid",
    location: "Kozhikode, Kerala",
    price: 750000,
    description: "Well maintained Swift ZXi+ with all service records. First owner, accident-free vehicle. Excellent fuel efficiency and driving experience.",
    features: ["ABS", "Airbags", "AC", "Power Steering", "Power Windows", "Alloy Wheels"],
    mainImage: generateCarSVG('#e8a020', 'Maruti Swift'),
    galleryImages: [generateCarSVG('#e8a020', 'Swift - Front'), generateCarSVG('#e8a020', 'Swift - Interior')],
    status: "active",
    createdAt: new Date(Date.now() - 86400000 * 1).toISOString()
  },
  {
    id: 1002,
    name: "Hyundai Creta SX",
    brand: "Hyundai",
    model: "Creta",
    year: 2020,
    fuel: "Diesel",
    transmission: "Automatic",
    km: 45000,
    owner: "1st Owner",
    insurance: "Valid",
    location: "Malappuram, Kerala",
    price: 1250000,
    description: "Fully loaded Creta SX Diesel Automatic. Sunroof, all digital features. Single owner maintained at authorized service center.",
    features: ["ABS", "Airbags", "AC", "Power Steering", "Power Windows", "Alloy Wheels", "Reverse Camera", "Touch Screen"],
    mainImage: generateCarSVG('#1a2d4f', 'Hyundai Creta'),
    galleryImages: [generateCarSVG('#1a2d4f', 'Creta Front'), generateCarSVG('#1a2d4f', 'Creta Side')],
    status: "active",
    createdAt: new Date(Date.now() - 86400000 * 2).toISOString()
  },
  {
    id: 1003,
    name: "Honda City ZX CVT",
    brand: "Honda",
    model: "City",
    year: 2022,
    fuel: "Petrol",
    transmission: "Automatic",
    km: 15000,
    owner: "1st Owner",
    insurance: "Valid",
    location: "Calicut, Kerala",
    price: 1450000,
    description: "Near new Honda City ZX CVT. Lane watch camera, Honda Sensing, wireless Android Auto/Apple CarPlay. Showroom condition.",
    features: ["ABS", "Airbags", "AC", "Power Steering", "Power Windows", "Alloy Wheels", "Reverse Camera", "Touch Screen", "Cruise Control"],
    mainImage: generateCarSVG('#c0392b', 'Honda City'),
    galleryImages: [generateCarSVG('#c0392b', 'City Front'), generateCarSVG('#c0392b', 'City Rear')],
    status: "active",
    createdAt: new Date(Date.now() - 86400000 * 3).toISOString()
  },
  {
    id: 1004,
    name: "Toyota Innova Crysta 2.4G",
    brand: "Toyota",
    model: "Innova Crysta",
    year: 2019,
    fuel: "Diesel",
    transmission: "Manual",
    km: 62000,
    owner: "2nd Owner",
    insurance: "Valid",
    location: "Thrissur, Kerala",
    price: 1850000,
    description: "7-seater family car, well maintained Innova Crysta. All company fitments, leather seats, cruise control. Regular service at Toyota dealer.",
    features: ["ABS", "Airbags", "AC", "Power Steering", "Power Windows", "Alloy Wheels", "Touch Screen", "Cruise Control"],
    mainImage: generateCarSVG('#27ae60', 'Innova Crysta'),
    galleryImages: [generateCarSVG('#27ae60', 'Innova Front'), generateCarSVG('#27ae60', 'Innova Side')],
    status: "active",
    createdAt: new Date(Date.now() - 86400000 * 4).toISOString()
  },
  {
    id: 1005,
    name: "Tata Nexon EV Max",
    brand: "Tata",
    model: "Nexon EV",
    year: 2022,
    fuel: "Electric",
    transmission: "Automatic",
    km: 22000,
    owner: "1st Owner",
    insurance: "Valid",
    location: "Kochi, Kerala",
    price: 1680000,
    description: "400km range Nexon EV Max. Fast charging capable, Connected features. Kerala registration, valid warranty remaining.",
    features: ["ABS", "Airbags", "AC", "Power Steering", "Power Windows", "Alloy Wheels", "Reverse Camera", "Touch Screen"],
    mainImage: generateCarSVG('#2980b9', 'Nexon EV'),
    galleryImages: [generateCarSVG('#2980b9', 'Nexon Front'), generateCarSVG('#2980b9', 'Nexon Charge')],
    status: "active",
    createdAt: new Date(Date.now() - 86400000 * 5).toISOString()
  },
  {
    id: 1006,
    name: "Maruti Baleno Alpha",
    brand: "Maruti Suzuki",
    model: "Baleno",
    year: 2021,
    fuel: "Petrol",
    transmission: "Manual",
    km: 30000,
    owner: "1st Owner",
    insurance: "Valid",
    location: "Manjeri, Kerala",
    price: 820000,
    description: "Premium hatchback Baleno Alpha with all features. Excellent NCAP safety rating. Smooth petrol engine, great mileage.",
    features: ["ABS", "Airbags", "AC", "Power Steering", "Power Windows", "Alloy Wheels", "Reverse Camera", "Touch Screen"],
    mainImage: generateCarSVG('#8e44ad', 'Baleno'),
    galleryImages: [generateCarSVG('#8e44ad', 'Baleno Front'), generateCarSVG('#8e44ad', 'Baleno Side')],
    status: "active",
    createdAt: new Date(Date.now() - 86400000 * 6).toISOString()
  },
  {
    id: 1007,
    name: "Kia Seltos HTX Plus",
    brand: "Kia",
    model: "Seltos",
    year: 2020,
    fuel: "Diesel",
    transmission: "Manual",
    km: 52000,
    owner: "1st Owner",
    insurance: "Valid",
    location: "Kozhikode, Kerala",
    price: 1320000,
    description: "Kia Seltos HTX Plus in great condition. Diesel manual, panoramic sunroof, Bose music system. Full service history maintained.",
    features: ["ABS", "Airbags", "AC", "Power Steering", "Power Windows", "Alloy Wheels", "Reverse Camera", "Touch Screen"],
    mainImage: generateCarSVG('#d35400', 'Kia Seltos'),
    galleryImages: [generateCarSVG('#d35400', 'Seltos Front'), generateCarSVG('#d35400', 'Seltos Side')],
    status: "active",
    createdAt: new Date(Date.now() - 86400000 * 7).toISOString()
  },
  {
    id: 1008,
    name: "Mahindra Scorpio N Z8",
    brand: "Mahindra",
    model: "Scorpio N",
    year: 2023,
    fuel: "Diesel",
    transmission: "Automatic",
    km: 12000,
    owner: "1st Owner",
    insurance: "Valid",
    location: "Palakkad, Kerala",
    price: 2250000,
    description: "Brand new Scorpio N 4WD Automatic. Fully loaded Z8 variant with all premium features. Adventure-ready SUV.",
    features: ["ABS", "Airbags", "AC", "Power Steering", "Power Windows", "Alloy Wheels", "Reverse Camera", "Touch Screen", "Cruise Control"],
    mainImage: generateCarSVG('#2c3e50', 'Scorpio N'),
    galleryImages: [generateCarSVG('#2c3e50', 'Scorpio Front'), generateCarSVG('#2c3e50', 'Scorpio Side')],
    status: "active",
    createdAt: new Date(Date.now() - 86400000 * 8).toISOString()
  }
];

function initDemoData() {
  if (!Storage.get('__demo_loaded__')) {
    Storage.saveCars(DEMO_CARS);
    Storage.set('__demo_loaded__', true);
    console.log('Demo data loaded!');
  }
}

// Run on load
initDemoData();
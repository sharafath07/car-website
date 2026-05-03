// AUTO DELUX - Admin JS

function adminAuthCheck() {
  const session = Storage.getSession();
  if (!session || !session.loggedIn) {
    window.location.href = 'admin-login.html';
    return false;
  }
  // Set username display
  const el = document.getElementById('admin-username');
  if (el) el.textContent = session.username;
  return true;
}

function adminLogout() {
  Storage.clearSession();
  window.location.href = 'admin-login.html';
}

// Admin toast
function adminToast(msg, type = 'success') {
  let toast = document.getElementById('admin-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'admin-toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  const icons = { success: 'check-circle', error: 'times-circle', info: 'info-circle' };
  toast.className = `toast ${type}`;
  toast.innerHTML = `<i class="fas fa-${icons[type] || 'info-circle'}"></i> ${msg}`;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// Set active sidebar link
function setSidebarActive() {
  const page = window.location.pathname.split('/').pop();
  document.querySelectorAll('.sidebar-menu a').forEach(a => {
    const href = a.getAttribute('href') || '';
    if (href === page) a.classList.add('active');
  });
}

// Format price (for admin)
function formatPrice(p) {
  if (!p) return '₹0';
  if (p >= 10000000) return '₹' + (p / 10000000).toFixed(2) + ' Cr';
  if (p >= 100000) return '₹' + (p / 100000).toFixed(2) + ' Lakh';
  return '₹' + parseInt(p).toLocaleString('en-IN');
}

function formatKm(km) {
  return parseInt(km || 0).toLocaleString('en-IN') + ' km';
}

function formatDate(iso) {
  if (!iso) return '-';
  return new Date(iso).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
}

// Image to base64
function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = e => resolve(e.target.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

// ADMIN SIDEBAR TOGGLE (mobile)
function initSidebarToggle() {
  const toggle = document.getElementById('sidebar-toggle');
  const sidebar = document.querySelector('.sidebar');
  if (toggle && sidebar) {
    toggle.addEventListener('click', () => sidebar.classList.toggle('open'));
  }
}

// SIDEBAR LOGOUT
document.addEventListener('DOMContentLoaded', () => {
  setSidebarActive();
  initSidebarToggle();
  document.getElementById('logout-btn')?.addEventListener('click', adminLogout);
  document.getElementById('topbar-logout')?.addEventListener('click', adminLogout);
});
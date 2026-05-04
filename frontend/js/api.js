const API_ROOT = 'https://auto-delux.onrender.com/api';

export async function listCars() {
    const res = await fetch(`${API_ROOT}/car/list`);
    return res.json();
}

export async function getCar(carId) {
    const res = await fetch(`${API_ROOT}/car/single`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ carId })
    });
    return res.json();
}

export async function adminLogin(email, password) {
    const res = await fetch(`${API_ROOT}/admin/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });
    return res.json();
}

export async function addCar(formData) {
    // formData is a FormData() instance with fields + file inputs
    const token = localStorage.getItem('admin_token');
    const res = await fetch(`${API_ROOT}/car/add`, {
        method: 'POST',
        headers: token ? { token } : undefined,
        body: formData
    });
    return res.json();
}

export async function removeCar(id) {
    const token = localStorage.getItem('admin_token');
    const res = await fetch(`${API_ROOT}/car/remove`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json', token },
        body: JSON.stringify({ id })
    });
    return res.json();
}
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const menuIcon = document.getElementById('menuIcon');
    const mainContent = document.getElementById('mainContent');
    if (sidebar) sidebar.classList.toggle('active');
    if (overlay) overlay.classList.toggle('active');
    if (menuIcon) menuIcon.classList.toggle('active');
    if (mainContent) mainContent.classList.toggle('sidebar-open');
}

function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const menuIcon = document.getElementById('menuIcon');
    const mainContent = document.getElementById('mainContent');
    if (sidebar) sidebar.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
    if (menuIcon) menuIcon.classList.remove('active');
    if (mainContent) mainContent.classList.remove('sidebar-open');
}

function showPage(pageName) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    const activePage = document.getElementById(pageName + '-page');
    if (activePage) activePage.classList.add('active');
}

function showPageAndCloseSidebar(pageName) {
    showPage(pageName);
    closeSidebar();
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.add('active');
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove('active');
}

const sampleHorses = [
    { id: 1, name: 'Lightning Thunder', breed: 'Thoroughbred', age: 4, gender: 'Đực', color: 'Nâu đỏ' },
    { id: 2, name: 'Golden Star', breed: 'Quarter Horse', age: 3, gender: 'Cái', color: 'Vàng' },
    { id: 3, name: 'Black Diamond', breed: 'Thoroughbred', age: 5, gender: 'Đực', color: 'Đen' }
];

function loadHorses() {
    const containers = ['horsesContainer', 'allHorsesContainer'];
    containers.forEach(containerId => {
        const container = document.getElementById(containerId);
        if (container) {
            container.innerHTML = sampleHorses.map(horse => `
                <div class="horse-item">
                    <div class="horse-info">
                        <div class="horse-name">🐴 ${horse.name}</div>
                        <div class="horse-details">${horse.breed} • Tuổi: ${horse.age} • ${horse.gender} • Màu: ${horse.color}</div>
                    </div>
                    <div><span class="horse-status">✓ Hoạt Động</span></div>
                    <div class="horse-actions">
                        <button class="btn-small" onclick="alert('Sửa ${horse.name}')">Sửa</button>
                        <button class="btn-small" onclick="alert('Chi tiết ${horse.name}')">Chi Tiết</button>
                    </div>
                </div>
            `).join('');
        }
    });
    document.getElementById('totalHorses') && (document.getElementById('totalHorses').innerText = sampleHorses.length);
    document.getElementById('activeHorses') && (document.getElementById('activeHorses').innerText = sampleHorses.length);
}

function openRegisterHorseModal() {
    window.location.href = 'pages/horse-registration.html';
}

let selectedPaymentMethod = null;
function selectPaymentMethod(method) {
    selectedPaymentMethod = method;
    alert(`Đã chọn: ${method === 'vnpay' ? 'VN Pay' : 'Chuyển khoản'}`);
}
function processPayment() {
    const amount = document.getElementById('amountInput')?.value;
    if (!amount || amount <= 0) return alert('Nhập số tiền hợp lệ!');
    if (!selectedPaymentMethod) return alert('Chọn phương thức thanh toán!');
    alert(`💰 Thanh toán ${amount}đ thành công!`);
}

document.addEventListener('DOMContentLoaded', () => {
    loadHorses();
    showPage('home');
});
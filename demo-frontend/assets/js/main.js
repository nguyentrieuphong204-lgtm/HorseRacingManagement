document.addEventListener('DOMContentLoaded', function() {
    console.log('Horse Racing System loaded');

    checkAuth();

    loadInitialData();
});


function checkAuth() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const currentPage = window.location.pathname;

    if (!isLoggedIn && !currentPage.includes('register')) {
        console.log('Chưa đăng nhập');
    }
}

async function loadInitialData() {
    try {

        if (document.getElementById('horsesContainer')) {
            await loadHorses();
        }

        if (document.getElementById('racesContainer')) {
            await loadRaces();
        }
    } catch (error) {
        console.error('Lỗi load dữ liệu:', error);
    }
}

async function loadHorses() {
    const horses = await HorseAPI.getAll();
    const container = document.getElementById('horsesContainer');
    
    if (container) {
        container.innerHTML = horses.map(horse => `
            <div class="horse-item">
                <div class="horse-info">
                    <div class="horse-name">🐴 ${horse.name}</div>
                    <div class="horse-details">${horse.breed} • ${horse.age} tuổi</div>
                </div>
                <div>
                    <span class="horse-status">✓ ${horse.status}</span>
                </div>
            </div>
        `).join('');
    }
}

async function loadRaces() {
    const races = await RaceAPI.getAll();
    const container = document.getElementById('racesContainer');
    
    if (container) {
        container.innerHTML = races.map(race => `
            <div style="border:2px solid #10b981; border-radius:20px; padding:20px;">
                <h3>🏁 ${race.name}</h3>
                <p>📆 ${race.date} | 📍 ${race.location}</p>
                <p>💰 ${race.prize}</p>
            </div>
        `).join('');
    }
}

function registerOwner() {
    const name = document.getElementById('ownerName')?.value;
    const phone = document.getElementById('phone')?.value;
    const email = document.getElementById('email')?.value;
    
    if (!name || !phone || !email) {
        alert('Vui lòng điền đầy đủ thông tin');
        return;
    }
    
    const userData = { name, phone, email, role: 'owner' };
    handleSignup(userData);
    window.location.href = 'HomePage.html';
}

function registerJockey() {
    const name = document.getElementById('fullName')?.value;
    const experience = document.getElementById('expYear')?.value;
    
    if (!name) {
        alert('Vui lòng nhập họ tên');
        return;
    }
    
    const jockeyData = { name, experience, role: 'jockey' };
    JockeyAPI.register(jockeyData);
    alert(`Jockey ${name} đăng ký thành công!`);
    window.location.href = 'HomePage.html';
}

function registerSpectator() {
    const username = document.getElementById('username')?.value;
    const password = document.getElementById('pwd')?.value;
    const confirm = document.getElementById('confirmPwd')?.value;
    
    if (!username || !password) {
        alert('Vui lòng nhập đầy đủ thông tin');
        return;
    }
    
    if (password !== confirm) {
        alert('Mật khẩu xác nhận không khớp');
        return;
    }
    
    const userData = { username, password, role: 'spectator' };
    handleSignup(userData);
    window.location.href = 'HomePage.html';
}
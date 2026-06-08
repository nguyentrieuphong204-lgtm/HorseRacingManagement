function handleLogin() {
    const username = document.getElementById('login-username')?.value;
    const password = document.getElementById('login-password')?.value;
    
    if (!username || !password) {
        alert('Vui lòng nhập đầy đủ thông tin!');
        return false;
    }

    localStorage.setItem('currentUser', username);
    localStorage.setItem('isLoggedIn', 'true');
    
    alert('Đăng nhập thành công!');
    return true;
}

function handleSignup(userData) {
    const { username, password, email, role } = userData;
    
    if (!username || !password) {
        alert('Vui lòng nhập đầy đủ thông tin!');
        return false;
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push({ username, password, email, role });
    localStorage.setItem('users', JSON.stringify(users));
    
    alert('Đăng ký thành công!');
    return true;
}

function isLoggedIn() {
    return localStorage.getItem('isLoggedIn') === 'true';
}

function logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('isLoggedIn');
    window.location.href = 'register.html';
}
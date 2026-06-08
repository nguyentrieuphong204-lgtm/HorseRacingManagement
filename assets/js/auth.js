// 1. Khai báo địa chỉ của Server Backend
const BACKEND_URL = "http://localhost:8080";

// 2. GET - Lấy danh sách tất cả ngựa
function getUrlHorses() {
    fetch(`${BACKEND_URL}/api/horses`)
        .then(response => response.json())
        .then(data => {
            console.log("Dữ liệu nhận từ Backend:", data);
            const container = document.getElementById("horse-list");
            if (container) {
                container.innerHTML = "";
                data.forEach(horse => {
                    const card = document.createElement("div");
                    card.className = "horse-card";
                    card.innerHTML = `
                        <h3>${horse.name || horse.horseName || "Không có tên"}</h3>
                        <p>Tuổi: ${horse.age || "?"}</p>
                        <p>Giống: ${horse.breed || "Không rõ"}</p>
                    `;
                    container.appendChild(card);
                });
            }
        })
        .catch(error => console.error("Lỗi kết nối Server Backend:", error));
}

// 3. GET - Lấy danh sách ngựa (async/await version)
const fetchHorses = async () => {
    try {
        const response = await fetch(`${BACKEND_URL}/api/horses`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Danh sách ngựa:", data);
        
        // Hiển thị lên giao diện
        const container = document.getElementById("horse-list");
        if (container) {
            container.innerHTML = "";
            data.forEach(horse => {
                const card = document.createElement("div");
                card.className = "horse-card";
                card.innerHTML = `
                    <h3>${horse.name || horse.horseName || "Không có tên"}</h3>
                    <p>Tuổi: ${horse.age || "?"}</p>
                    <p>Giống: ${horse.breed || "Không rõ"}</p>
                    <button onclick="deleteHorse(${horse.id})">Xóa</button>
                    <button onclick="editHorse(${horse.id})">Sửa</button>
                `;
                container.appendChild(card);
            });
        }
        return data;
    } catch (error) {
        console.error("Lỗi khi lấy danh sách ngựa:", error);
    }
};

// 4. POST - Thêm ngựa mới
const addHorse = async (horseData) => {
    try {
        const response = await fetch(`${BACKEND_URL}/api/horses`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(horseData),
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log("Thêm ngựa thành công:", data);
        return data;
    } catch (error) {
        console.error("Lỗi khi thêm ngựa:", error);
    }
};

// 5. DELETE - Xóa ngựa theo ID
const deleteHorse = async (id) => {
    if (!confirm("Bạn có chắc muốn xóa con ngựa này?")) {
        return;
    }
    
    try {
        const response = await fetch(`${BACKEND_URL}/api/horses/${id}`, {
            method: "DELETE",
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        console.log(`Đã xóa ngựa có ID: ${id}`);
        // Reload lại danh sách sau khi xóa
        await fetchHorses();
    } catch (error) {
        console.error("Lỗi khi xóa ngựa:", error);
    }
};

// 6. PUT - Cập nhật thông tin ngựa
const updateHorse = async (id, horseData) => {
    try {
        const response = await fetch(`${BACKEND_URL}/api/horses/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(horseData),
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log(`Cập nhật ngựa ID ${id} thành công:`, data);
        
        // Reload lại danh sách sau khi cập nhật
        await fetchHorses();
        return data;
    } catch (error) {
        console.error("Lỗi khi cập nhật ngựa:", error);
    }
};

// 7. Hàm ví dụ để thêm một con ngựa mới
const exampleAddHorse = async () => {
    const newHorse = {
        name: "Bạch Mã",
        age: 5,
        breed: "Thuần Chủng",
        color: "Trắng"
    };
    await addHorse(newHorse);
};

// 8. Hàm ví dụ để sửa thông tin ngựa
const exampleUpdateHorse = async (id) => {
    const updatedData = {
        name: "Hắc Mã",
        age: 6,
        breed: "Mongolian"
    };
    await updateHorse(id, updatedData);
};

// Xuất các hàm ra ngoài nếu dùng module (tùy chọn)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        getUrlHorses,
        fetchHorses,
        addHorse,
        deleteHorse,
        updateHorse
    };
}
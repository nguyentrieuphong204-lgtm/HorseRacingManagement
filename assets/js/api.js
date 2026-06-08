const BACKEND_URL = "http://localhost:8080";

const HorseAPI = {
    getAll: async () => {
        try {
            const response = await fetch(`${BACKEND_URL}/api/horses`);
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            return await response.json();
        } catch (error) {
            console.error("Lỗi lấy danh sách ngựa:", error);
            return [];
        }
    },
    getById: async (id) => {
        try {
            const response = await fetch(`${BACKEND_URL}/api/horses/${id}`);
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            return await response.json();
        } catch (error) {
            console.error(`Lỗi lấy ngựa ID ${id}:`, error);
            return null;
        }
    },
    create: async (horseData) => {
        try {
            const response = await fetch(`${BACKEND_URL}/api/horses`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(horseData)
            });
            return await response.json();
        } catch (error) {
            console.error("Lỗi thêm ngựa:", error);
        }
    },
    update: async (id, horseData) => {
        try {
            const response = await fetch(`${BACKEND_URL}/api/horses/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(horseData)
            });
            return await response.json();
        } catch (error) {
            console.error(`Lỗi cập nhật ngựa ID ${id}:`, error);
        }
    },
    delete: async (id) => {
        try {
            const response = await fetch(`${BACKEND_URL}/api/horses/${id}`, {
                method: "DELETE"
            });
            return response.ok;
        } catch (error) {
            console.error(`Lỗi xóa ngựa ID ${id}:`, error);
        }
    }
};
const HorseAPI = {
    getAll: async () => {

        return [
            { id: 1, name: 'Lightning Thunder', breed: 'Thoroughbred', age: 4, status: 'active' },
            { id: 2, name: 'Golden Star', breed: 'Quarter Horse', age: 3, status: 'active' },
            { id: 3, name: 'Black Diamond', breed: 'Thoroughbred', age: 5, status: 'active' }
        ];
    },

    add: async (horseData) => {
        console.log('Thêm ngựa:', horseData);
        return { success: true, message: 'Thêm ngựa thành công' };
    },

    update: async (id, horseData) => {
        console.log(`Cập nhật ngựa ${id}:`, horseData);
        return { success: true, message: 'Cập nhật thành công' };
    },

    delete: async (id) => {
        console.log(`Xóa ngựa ${id}`);
        return { success: true, message: 'Xóa thành công' };
    }
};

const RaceAPI = {
    getAll: async () => {
        return [
            { id: 1, name: 'Cúp Bình Minh', date: '20/06/2026', location: 'Hà Nội', prize: '250M VND' },
            { id: 2, name: 'Đại Nội Derby', date: '28/06/2026', location: 'Huế', prize: '500M VND' }
        ];
    }
};

const JockeyAPI = {
    register: async (data) => {
        console.log('Đăng ký Jockey:', data);
        return { success: true, message: 'Đăng ký Jockey thành công' };
    }
};
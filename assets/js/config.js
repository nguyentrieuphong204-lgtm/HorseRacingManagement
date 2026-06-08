// Cấu hình backend
const CONFIG = {
    BACKEND_URL: "http://localhost:8080",
    API_VERSION: "v1",
    TIMEOUT: 10000
};

// Export cho cả browser và module
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
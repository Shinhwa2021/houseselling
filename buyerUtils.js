// buyer/buyerUtils.js

// Generate a random buyer name
function generateRandomName() {
    const names = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace"];
    return names[Math.floor(Math.random() * names.length)];
}

module.exports = {
    generateRandomName
};

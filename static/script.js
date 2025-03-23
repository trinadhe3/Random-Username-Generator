document.addEventListener("DOMContentLoaded", function () {
    const adjectives = ["Cool", "Happy", "Fast", "Brave", "Clever", "Witty"];
    const generateBtn = document.getElementById("generateBtn");
    const nameInput = document.getElementById("name");
    const usernameDisplay = document.getElementById("username");

    generateBtn.addEventListener("click", function () {
        let name = nameInput.value.trim();
        let randomAdj = adjectives[Math.floor(Math.random() * adjectives.length)];
        let randomNum = Math.floor(Math.random() * 100);

        let username = name ? `${randomAdj}${name}${randomNum}` : `${randomAdj}${randomNum}`;

        usernameDisplay.textContent = "Generated Username: " + username;
    });
});

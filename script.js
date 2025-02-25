document.addEventListener("DOMContentLoaded", function () {
    console.log("Portfolio Loaded Successfully!");

    // Dark Mode Toggle
    let darkModeBtn = document.createElement("button");
    darkModeBtn.innerText = "🌙 Dark Mode";
    darkModeBtn.style.position = "fixed";
    darkModeBtn.style.top = "20px";
    darkModeBtn.style.right = "20px";
    darkModeBtn.style.padding = "12px 15px";
    darkModeBtn.style.border = "none";
    darkModeBtn.style.borderRadius = "10px";
    darkModeBtn.style.cursor = "pointer";
    darkModeBtn.style.background = "linear-gradient(135deg, #5b86e5, #36d1dc)";
    darkModeBtn.style.color = "white";
    darkModeBtn.style.fontSize = "1em";
    darkModeBtn.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.2)";
    darkModeBtn.style.transition = "0.3s ease-in-out";

    document.body.appendChild(darkModeBtn);

    darkModeBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            darkModeBtn.innerText = "☀ Light Mode";
            darkModeBtn.style.background = "linear-gradient(135deg, #ff758c, #ff7eb3)";
        } else {
            darkModeBtn.innerText = "🌙 Dark Mode";
            darkModeBtn.style.background = "linear-gradient(135deg, #5b86e5, #36d1dc)";
        }
    });
});
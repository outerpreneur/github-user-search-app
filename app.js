document.addEventListener("DOMContentLoaded", function () {
  const darkModeButton = document.getElementById("dark-mode");
  const whiteModeButton = document.getElementById("white-mode");
  const searchBox = document.querySelector(".search-box");
  const profileCard = document.querySelector(".profile-card");
  const stats = document.querySelector(".stats");
  const body = document.body;

  darkModeButton.addEventListener("click", function () {
    body.style.color = "white";
    body.style.backgroundColor = "#141d2f";
    searchBox.style.backgroundColor = "#1E2A47";
    profileCard.style.backgroundColor = "#1E2A47";
    stats.style.backgroundColor = "#141d2f";
    darkModeButton.classList.add("hidden");
    whiteModeButton.classList.remove("hidden");
  });

  whiteModeButton.addEventListener("click", function () {
    body.style.colorScheme = "white";
    body.style.color = "black";
    body.style.backgroundColor = "var(--background-color";
    searchBox.style.backgroundColor = "var(--dark-white)";
    profileCard.style.backgroundColor = "var(--dark-white)";
    stats.style.backgroundColor = "var(--background-color";
    darkModeButton.classList.remove("hidden");
    whiteModeButton.classList.add("hidden");
  });
});

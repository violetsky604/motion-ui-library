 document.addEventListener("DOMContentLoaded", () => {
    const mainButton = document.querySelector(".button-pro");

    // Load saved theme on startup
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark-mode");
    }

    // Toggle and save when clicking
    mainButton.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }
    });
  });
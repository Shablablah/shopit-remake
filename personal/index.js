function validatePassword() {
    var password = document.getElementById("password").value;
    if (password.length < 8) {
        alert("Password must be at least 8 characters long");
        return false;
    }
    return true;
}

document.querySelector("form")
.addEventListener("submit", function (e) {
  e.preventDefault();
  validatePassword();
});

// Function to toggle dark mode
function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");

  // Save the user's preference in localStorage
  const isDarkMode = body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDarkMode);
}

// Check if the user has previously selected dark mode
const isDarkMode = localStorage.getItem("darkMode") === "true";
if (isDarkMode) {
  document.body.classList.add("dark-mode");
}

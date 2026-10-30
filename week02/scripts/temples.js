// ==========================================
// FOOTER DATE AND LAST MODIFIED
// ==========================================
const currentYear = document.getElementById("currentYear")
const lastModified = document.getElementById("lastModified")
currentYear.textContent = new Date().getFullYear();
lastModified.textContent = `Last Modification: ${document.lastModified}`;


// ==========================================
// HAMBURGER MENU TOGGLE
// ==========================================
const menuToggle = document.getElementById("menu-toggle");
const navList = document.getElementById("nav-list");

menuToggle.addEventListener("click", () => {
    navList.classList.toggle("show");

    // Change the hamburger icon to a close icon when the menu is open
    if (navList.classList.contains("show")) {
        menuToggle.textContent = "✕"; // Close icon
        menuToggle.setAttribute("aria-expanded", "true");
    } else {
        menuToggle.textContent = "☰"; // Hamburger icon
        menuToggle.setAttribute("aria-expanded", "false");
    }
});

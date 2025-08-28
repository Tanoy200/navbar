// Toggle menu for mobile
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Dropdown toggle for mobile
const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(dropdown => {
  const link = dropdown.querySelector("a"); // dropdown ka main link
  link.addEventListener("click", (e) => {
    // Sirf mobile screen par kaam karega
    if (window.innerWidth <= 768) {
      e.preventDefault(); // link disable (normal page redirect nahi hoga)
      dropdown.classList.toggle("open");
    }
  });
});

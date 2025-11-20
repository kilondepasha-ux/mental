
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("primaryNav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("show");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const status = form.querySelector(".form-status");
      const required = Array.from(form.querySelectorAll("[required]"));
      const invalid = required.find(el => !el.value.trim());
      if (invalid) {
        status.textContent = "Please complete all required fields.";
        status.style.color = "#f59e0b";
        invalid.focus();
        return;
      }
      status.textContent = "Thanks — your message has been recorded (demo).";
      form.reset();
    });
  }
});

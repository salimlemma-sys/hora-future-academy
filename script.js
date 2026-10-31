const menuToggle = document.querySelector("#menuToggle");
const mainNav = document.querySelector("#mainNav");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  menuToggle.textContent = isOpen ? "×" : "☰";
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    menuToggle.textContent = "☰";
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();

const contactForm = document.querySelector("#contactForm");
const formNote = document.querySelector("#formNote");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const message = document.querySelector("#message").value.trim();

  if (!name || !email || !message) {
    formNote.textContent = "Please complete all fields before preparing your message.";
    return;
  }

  const subject = encodeURIComponent("School website inquiry from " + name);
  const body = encodeURIComponent(
    "Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message
  );

  // This opens the visitor's email app; it does not send the message automatically.
  window.location.href = "mailto:info@example-school.com?subject=" + subject + "&body=" + body;
  formNote.textContent = "Your email app should open with a prepared message. Replace the demo email address before publishing.";
});

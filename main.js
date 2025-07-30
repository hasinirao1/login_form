document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".form-item");

  items.forEach((item, index) => {
    setTimeout(() => {
      item.classList.remove("hidden");
      item.classList.add("show");
    }, index * 700);
  });
});

document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    alert("Invalid email format.");
    return;
  }

  if (password === "") {
    alert("Password cannot be empty.");
    return;
  }

  alert("Successfully Logged In!!!");
});

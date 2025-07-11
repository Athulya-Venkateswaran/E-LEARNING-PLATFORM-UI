function register() {
  const username = document.getElementById("register-username").value;
  const password = document.getElementById("register-password").value;
  localStorage.setItem("user", JSON.stringify({ username, password }));
  alert("Registered successfully!");
  window.location.href = "index.html";
}

function login() {
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.username === username && user.password === password) {
    alert("Login successful!");
    window.location.href = "home.html";
  } else {
    alert("Invalid credentials!");
  }
}

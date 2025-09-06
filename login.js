document.getElementById("loginForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const data = {
    email: document.getElementById("email").value,
    password: document.getElementById("password").value
  };

  try {
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const result = await res.json();
    console.log(result);

    if (res.ok && result.token) {
      localStorage.setItem("token", result.token);
      localStorage.setItem("user", JSON.stringify(result.user));

      document.getElementById("message").style.color = "green";
      document.getElementById("message").textContent = "✅ Login successful!";

      // redirect after login (e.g., to dashboard.html)
      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 1000);
    } else {
      document.getElementById("message").style.color = "red";
      document.getElementById("message").textContent = "❌ " + (result.message || "Login failed");
    }
  } catch (err) {
    console.error(err);
    document.getElementById("message").style.color = "red";
    document.getElementById("message").textContent = "❌ Error connecting to server";
  }
});

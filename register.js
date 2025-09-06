document.getElementById("registerForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    roll_no: document.getElementById("roll_no").value,
    branch: document.getElementById("branch").value,
    year: document.getElementById("year").value,
    cgpa: document.getElementById("cgpa").value,
    resume_link: document.getElementById("resume_link").value
  };

  try {
    const res = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const result = await res.json();
    console.log(result);

    if (res.ok && result.token) {
      localStorage.setItem("token", result.token);
      document.getElementById("message").style.color = "green";
      document.getElementById("message").textContent = "✅ Registration successful!";
    } else {
      document.getElementById("message").style.color = "red";
      document.getElementById("message").textContent = "❌ " + (result.message || "Registration failed");
    }
  } catch (err) {
    console.error(err);
    document.getElementById("message").style.color = "red";
    document.getElementById("message").textContent = "❌ Error connecting to server";
  }
});

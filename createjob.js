document.getElementById("jobForm").addEventListener("submit", async function(e) {
  e.preventDefault();
  const token = localStorage.getItem("token");
  if (!token) { alert("Admin login required"); return; }

  const data = {
    company_name: document.getElementById("company_name").value,
    role: document.getElementById("role").value,
    package: document.getElementById("package").value,
    eligibility_cgpa: document.getElementById("eligibility_cgpa").value,
    deadline: document.getElementById("deadline").value,
    description: document.getElementById("description").value
  };

  const res = await fetch("http://localhost:5000/api/jobs", {
    method: "POST",
    headers: { "Content-Type": "application/json", "Authorization": "Bearer " + token },
    body: JSON.stringify(data)
  });

  const result = await res.json();
  document.getElementById("message").style.color = res.ok ? "green" : "red";
  document.getElementById("message").textContent = res.ok ? "✅ Job Created!" : "❌ " + result.message;
});

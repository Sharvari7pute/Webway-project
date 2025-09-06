async function loadApplications() {
  const token = localStorage.getItem("token");
  if (!token) { alert("Please login as student"); return; }

  const res = await fetch("http://localhost:5000/api/applications/my", {
    headers: { "Authorization": "Bearer " + token }
  });
  const apps = await res.json();

  let container = document.getElementById("appsList");
  container.innerHTML = "";
  apps.forEach(app => {
    const div = document.createElement("div");
    div.className = "app-card";
    div.innerHTML = `
      <h2>${app.job.company_name} - ${app.job.role}</h2>
      <p>Status: ${app.status}</p>
    `;
    container.appendChild(div);
  });
}

loadApplications();

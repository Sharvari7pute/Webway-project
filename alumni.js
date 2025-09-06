async function loadAlumni() {
  const res = await fetch("http://localhost:5000/api/alumni");
  const alumni = await res.json();

  let container = document.getElementById("alumniList");
  container.innerHTML = "";
  alumni.forEach(a => {
    const div = document.createElement("div");
    div.className = "alumni-card";
    div.innerHTML = `
      <h2>${a.name}</h2>
      <p>${a.role} @ ${a.company}</p>
      <p>Salary: ${a.salary || "N/A"}</p>
      <a href="${a.linkedin}" target="_blank">LinkedIn</a>
    `;
    container.appendChild(div);
  });
}

loadAlumni();

async function loadJobs() {
  const res = await fetch("http://localhost:5000/api/jobs");
  const jobs = await res.json();
  let container = document.getElementById("jobsList");
  container.innerHTML = "";
  jobs.forEach(job => {
    const div = document.createElement("div");
    div.className = "job-card";
    div.innerHTML = `
      <h2>${job.company_name} - ${job.role}</h2>
      <p>Package: ${job.package}</p>
      <p>Eligibility: ${job.eligibility_cgpa} CGPA</p>
      <p>Deadline: ${job.deadline ? job.deadline.substring(0,10) : "N/A"}</p>
      <button onclick="applyToJob('${job._id}')">Apply</button>
    `;
    container.appendChild(div);
  });
}

async function applyToJob(jobId) {
  const token = localStorage.getItem("token");
  if (!token) { alert("Please login as student"); return; }
  const res = await fetch(`http://localhost:5000/api/applications/${jobId}`, {
    method: "POST",
    headers: { "Authorization": "Bearer " + token }
  });
  const result = await res.json();
  alert(res.ok ? "Applied Successfully!" : "Error: " + result.message);
}

loadJobs();

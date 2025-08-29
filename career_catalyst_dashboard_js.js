// User Info (you can fetch this from DB in real app)
document.getElementById("userName").innerText = "Sharvari";
document.getElementById("userEmail").innerText = "sharvari@example.com";
document.getElementById("userCourse").innerText = "B.Tech in AI & DS";

// Example Modules Data
const completed = ["Data Structures", "DBMS Basics", "Python Programming"];
const pending = ["Machine Learning", "Operating Systems", "Web Development"];

// Insert Completed Modules
const completedList = document.getElementById("completedModules");
completed.forEach(module => {
  const li = document.createElement("li");
  li.innerText = module;
  li.classList.add("completed");
  completedList.appendChild(li);
});

// Insert Pending Modules
const pendingList = document.getElementById("pendingModules");
pending.forEach(module => {
  const li = document.createElement("li");
  li.innerText = module;
  li.classList.add("pending");
  pendingList.appendChild(li);
});
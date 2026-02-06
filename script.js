const rules = [
  "Protect capital first",
  "No trade is also a trade",
  "Discipline beats strategy",
  "One good trade is enough",
  "Survive to trade tomorrow"
];

document.getElementById("rule").innerText =
  rules[Math.floor(Math.random() * rules.length)];

function saveNotes() {
  localStorage.setItem("notes", document.getElementById("notes").value);
  alert("Saved");
}

document.getElementById("notes").value =
  localStorage.getItem("notes") || "";

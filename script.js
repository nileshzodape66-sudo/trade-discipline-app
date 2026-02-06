const rules = [
  "Loss control is profit control",
  "No trade is also a trade",
  "Protect capital first",
  "Discipline beats strategy",
  "Trade less, trade better"
];

// Rule of the day
document.getElementById("rule").innerText =
  rules[new Date().getDate() % rules.length];

// Load saved notes
const notesEl = document.getElementById("notes");
notesEl.value = localStorage.getItem("trade_notes") || "";

// Save notes
function saveNotes() {
  localStorage.setItem("trade_notes", notesEl.value);
  alert("Notes saved successfully!");
}

// Register Service Worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}

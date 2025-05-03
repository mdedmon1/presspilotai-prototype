function showSpinner(id) {
  document.getElementById(id).style.display = "inline-block";
}

function hideSpinner(id) {
  document.getElementById(id).style.display = "none";
}

function getTimeStamp() {
  const now = new Date();
  return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function assignTask() {
  showSpinner("assignSpinner");
  setTimeout(() => {
    const statusMsg = `[${getTimeStamp()}] ✅ Field Team Assigned: Sarah to Brunswick`;
    document.getElementById("status").innerText = statusMsg;
    hideSpinner("assignSpinner");
  }, 1000);
}

function generateScript() {
  showSpinner("scriptSpinner");
  setTimeout(() => {
    const output = `[${getTimeStamp()}] 🎤 Script Generated: A powerful hurricane has slammed into Georgia, leaving a trail of destruction as emergency crews begin rescue operations.`;
    document.getElementById("scriptOutput").innerText = output;
    hideSpinner("scriptSpinner");
  }, 1000);
}

function showVerified() {
  showSpinner("verifiedSpinner");
  setTimeout(() => {
    const output = `[${getTimeStamp()}] 📡 Verified Info: Reuters confirms 1M+ without power. AP reports 85 mph sustained winds.`;
    document.getElementById("verifiedOutput").innerText = output;
    hideSpinner("verifiedSpinner");
  }, 1000);
}

function buildVO() {
  showSpinner("voSpinner");
  setTimeout(() => {
    const output = `[${getTimeStamp()}] 🎬 VO Ready: Scenes of flooded streets, downed power lines, and families evacuated by boat.`;
    document.getElementById("voOutput").innerText = output;
    hideSpinner("voSpinner");
  }, 1000);
}

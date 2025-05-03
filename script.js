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
    document.getElementById("status").innerText =
      `[${getTimeStamp()}] ✅ Field Team Assigned: Sarah to Brunswick`;
    hideSpinner("assignSpinner");
  }, 1000);
}

function generateScript() {
  showSpinner("scriptSpinner");
  setTimeout(() => {
    document.getElementById("scriptOutput").innerText =
      `[${getTimeStamp()}] 🎤 Script: A Category 4 hurricane has slammed into Georgia, causing major damage. We go live to Brunswick now.`;
    hideSpinner("scriptSpinner");
  }, 1000);
}

function showVerified() {
  showSpinner("verifiedSpinner");
  setTimeout(() => {
    document.getElementById("verifiedOutput").innerText =
      `[${getTimeStamp()}] 📰 AP Verified: Over 1.2 million without power. Emergency declarations issued in 6 counties.`;
    hideSpinner("verifiedSpinner");
  }, 1000);
}

function buildVO() {
  showSpinner("voSpinner");
  setTimeout(() => {
    document.getElementById("voOutput").innerText =
      `[${getTimeStamp()}] 🎬 VO: Picture of destruction — collapsed roofs, flooded neighborhoods, rescue crews in boats.`;
    hideSpinner("voSpinner");
  }, 1000);
}

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
    const output = `
      <p>[${getTimeStamp()}] 🎤 Script Generated:</p>
      <pre>
Anchor: Good afternoon. We begin with breaking news — a Category 4 hurricane has made landfall along the Georgia coast.
Winds exceeding 85 mph have left widespread destruction.
We go now to Brunswick, where our field team is live with the latest.
      </pre>`;
    document.getElementById("scriptOutput").innerHTML = output;
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
    const img = document.getElementById("voImage");
    img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Hurricane_damage.jpg/640px-Hurricane_damage.jpg";
    img.style.display = "block";
    hideSpinner("voSpinner");
  }, 1000);
}


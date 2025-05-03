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
    document.getElementById("status").innerText = `[${getTimeStamp()}] ✅ Field Team Assigned: Sarah to Brunswick`;
    hideSpinner("assignSpinner");
  }, 1000);
}

function generateScript() {
  showSpinner("scriptSpinner");
  setTimeout(() => {
    document.getElementById("scriptOutput").innerText =
      `[${getTimeStamp()}] 🎤 Script: Good afternoon. A Category 4 hurricane has slammed into the Georgia coastline, causing widespread flooding and power outages. We now go live to our correspondent in Brunswick.`;
    hideSpinner("scriptSpinner");
  }, 1000);
}

function showVerified() {
  showSpinner("verifiedSpinner");
  setTimeout(() => {
    document.getElementById("verifiedOutput").innerText =
      `[${getTimeStamp()}] 📰 AP Verified: More than 1.2 million people are without power across Georgia and South Carolina, AP confirms. Emergency declarations have been issued in 6 counties.`;
    hideSpinner("verifiedSpinner");
  }, 1000);
}

function buildVO() {
  showSpinner("voSpinner");
  setTimeout(() => {
    document.getElementById("voOutput").innerText =
      `[${getTimeStamp()}] 🎬 VO: Picture of destruction — collapsed roofs, waist-high water, and families wading through flooded neighborhoods.`;
    hideSpinner("voSpinner");
  }, 1000);
}

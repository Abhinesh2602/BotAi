import moment from "moment-timezone";

async function getCurrentTime() {
  const apiUrl = "https://worldtimeapi.org/api/timezone/Asia/Kolkata";

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch current time");
    }
    const data = await response.json();
    const isoTimeString = data.datetime; // Corrected key
    const utcDateTime = moment.utc(isoTimeString);
    const indiaDateTime = utcDateTime.tz("Asia/Kolkata");
    const timeString = indiaDateTime.format("HH:mm");
    return timeString;
  } catch (error) {
    console.error("Error fetching current time:", error.message);
    return null;
  }
}

export default getCurrentTime;

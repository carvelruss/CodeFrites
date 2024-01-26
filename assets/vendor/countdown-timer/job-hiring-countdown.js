// Set the countdown date and time
const countdownDate = new Date("January 31, 2024 00:00:00").getTime();

// Update the countdown every second
const timerInterval = setInterval(function () {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = formatTime(
    Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const minutes = formatTime(
    Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  );
  const seconds = formatTime(Math.floor((distance % (1000 * 60)) / 1000));

  // Display the countdown
  document.getElementById("days").innerHTML = `${days}`;
  document.getElementById("hours").innerHTML = `${hours}`;
  document.getElementById("minutes").innerHTML = `${minutes}`;
  document.getElementById("seconds").innerHTML = `${seconds}`;

  // Check if the countdown is over
  if (distance < 0) {
    clearInterval(timerInterval);
    document.getElementById("apply-btn").classList.add("d-none");
    document.getElementById("inactive").classList.remove("d-none");

    // Set the content to "00" when the countdown ends
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
  }
}, 1000);

// Function to format time with two decimal places
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

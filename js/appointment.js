// Prevents the user to pick a day that already passed.

function checkDate(selectedDate) {
  // Get the current date
  let today = new Date();

  // Convert the selected date to a Date object
  let selected = new Date(selectedDate);

  // Compare the selected date to the current date
  if (selected < today) {
    // If the selected date is in the past, show an error message
    alert("Please select a date in the future.");
    // Reset the value of the date field
    document.getElementsByName("Data")[0].value = "";
  }
}

// Prevents the user to pick an hour outside the interval of the clinic.
function checkTime(selectedTime) {
  // Convert the selected time to a Date object
  let selected = new Date("1970-01-01T" + selectedTime + "Z");

  // Set the minimum and maximum allowed times
  let minTime = new Date("1970-01-01T08:00:00Z");
  let maxTime = new Date("1970-01-01T21:00:00Z");

  // Compare the selected time to the minimum and maximum allowed times
  if (selected < minTime || selected > maxTime) {
    // If the selected time is outside the allowed range, show an error message
    alert(
      "Te rugam sa selectezi o ora in concordanta cu orarul de functionare al clinicii."
    );
  }
  // Reset the value of the time field
}

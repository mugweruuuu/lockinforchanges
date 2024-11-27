// The correct password
const correctPassword = "JM1";

// Ensure page resets if user clicks back
window.onload = () => {
  if (!sessionStorage.getItem("authorized")) {
    // Redirect back to password screen
    document.getElementById("password-container").style.display = "block";
    document.getElementById("countdown-container").style.display = "none";
  }
};

// Check password input and show error message
function checkPassword() {
  const enteredPassword = document.getElementById("password").value;
  if (enteredPassword === correctPassword) {
    // Set authorized state and show countdown
    sessionStorage.setItem("authorized", "true");
    document.getElementById("password-container").style.display = "none";
    document.getElementById("countdown-container").style.display = "block";

    // Initialize the countdown timer
    startCountdown();
  } else {
    showError();
  }
}

// Check for Enter key press
function checkEnter(event) {
  if (event.key === 'Enter') {
    checkPassword();
  }
}

// Show error with shake effect
function showError() {
  const passwordInput = document.getElementById("password");
  passwordInput.classList.add('shake');
  document.getElementById("error-message").innerHTML = "Password Incorrect ;)";
  
  setTimeout(() => {
    passwordInput.classList.remove('shake');
  }, 500);
}

// Countdown Timer Logic
function startCountdown() {
  const targetDate = new Date('December 03, 2024 00:00:00').getTime();

  const timerInterval = setInterval(() => {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft < 0) {
      clearInterval(timerInterval);
      document.getElementById('countdown').innerHTML = "TIME'S UP!";
      return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = 
      `${days.toString().padStart(2, '0')}d ${hours.toString().padStart(2, '0')}h ${minutes.toString().padStart(2, '0')}m ${seconds.toString().padStart(2, '0')}s`;
  }, 1000);
}
// JavaScript Document
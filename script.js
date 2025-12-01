// Game variables
let husbandProfile = [];
let score = 0;
let currentLevel = 1;

// Profile update functions
function addJob(job) {
  husbandProfile.push({ type: "job", value: job });
}

function addLoveKids(value) {
  husbandProfile.push({ type: "loveKids", value: value });
}

function addGoodLooking(value) {
  husbandProfile.push({ type: "goodLooking", value: value });
}

function addHelpsHousework(value) {
  husbandProfile.push({ type: "helpsHousework", value: value });
}

// Challenge scenario functions
function challengeJobInterview() {
  let answer1 = prompt("What is your favorite programming language?");
  if (answer1 === "JavaScript") {
    score++;
    alert("Correct! JavaScript is a great choice.");
  } else {
    alert("Incorrect. The correct answer is JavaScript.");
  }
}

function challengePlayground() {
  let answer2 = prompt("Which activity would you like to do with the kids? (A) Play soccer, (B) Build a sandcastle");
  if (answer2 === "A") {
    score++;
    alert("Great choice! Kids love playing soccer.");
  } else {
    alert("Building a sandcastle is fun too!");
  }
}

function challengeCooking() {
  let answer3 = prompt("What dish would you like to cook? (A) Pasta, (B) Salad");
  if (answer3 === "A") {
    score++;
    alert("Yum! Pasta is a family favorite.");
  } else {
    alert("Salad is healthy, but pasta is more fun!");
  }
}

function challengeDateNight() {
  let answer4 = prompt("What would you prefer for date night? (A) Movie, (B) Dinner");
  if (answer4 === "B") {
    score++;
    alert("Dinner is a romantic choice!");
  } else {
    alert("Movies are fun too!");
  }
}

function challengeHousework() {
  let answer5 = prompt("Which task would you prefer? (A) Vacuuming, (B) Dusting");
  if (answer5 === "A") {
    score++;
    alert("Vacuuming is a great way to help out!");
  } else {
    alert("Dusting is important too!");
  }
}

// Scoreboard update function
function updateScoreboard() {
  document.getElementById("scoreboard").innerHTML = `Score: ${score}`;
}

// Function to display the next challenge
function nextChallenge() {
  if (currentLevel <= 6) {
    switch (currentLevel) {
      case 1:
        challengeJobInterview();
        break;
      case 2:
        challengePlayground();
        break;
      case 3:
        challengeCooking();
        break;
      case 4:
        challengeDateNight();
        break;
      case 5:
        challengeHousework();
        break;
      default:
        alert("Game over! You've completed all challenges.");
        return;
    }
    currentLevel++;
    updateScoreboard();
  } else {
    alert("You've completed all challenges!");
  }
}

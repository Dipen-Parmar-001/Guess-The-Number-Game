let input = document.querySelector("input");
let playBtn = document.querySelector(".play-btn");
let yourCount = document.querySelector(".your-count");
let compCount = document.querySelector(".comp-count");
let winMsg = document.querySelector("h3");

let yourScore = 0;
let compScore = 0;

function generateCompChoice() {
  return Math.floor(Math.random() * 100) + 1;
}

playBtn.addEventListener("click", () => {
  let userInput = Number(input.value.trim());

  if (userInput < 1 || userInput > 100 || isNaN(userInput)) {
    alert("Please Enter a Number between 1 and 100!");
    input.value = "";
    return;
  }

  let computerChoice = generateCompChoice();

  yourCount.textContent = userInput;
  compCount.textContent = computerChoice;

  if (userInput === computerChoice) {
    winMsg.textContent = "You Win!!! 🎉";
    winMsg.style.color = "green";
    yourScore++;
  } else {
    winMsg.textContent = "Try Again!";
    winMsg.style.color = "red";
    compScore++;
  }

  // (Optional) You could update score display here too if needed
});


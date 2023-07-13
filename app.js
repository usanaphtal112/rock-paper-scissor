function play(userChoice) {
  let choices = ["rock", "paper", "scissors"];
  // console.log(choices.length);
  let ranChoice = Math.floor(Math.random() * choices.length);
  let computerChoice = choices[ranChoice];

  let rowElement = document.querySelector(".custom-bg-row");
  // rowElement.classList.remove("win-bg", "lose-bg");

  if (userChoice === computerChoice) {
    document.getElementById("result").innerHTML = "It's a draw!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    document.getElementById("result").innerHTML = "You win!";
    rowElement.classList.add("win-bg");
  } else {
    document.getElementById("result").innerHTML = "You lose!";
    rowElement.classList.add("lose-bg");
  }
}

let missions = [
  {
    text: "Heavy force is hitting the gate. What protects it?",
    options: ["Decoration", "Defense spikes", "Color"],
    answer: "Defense spikes"
  },
  {
    text: "Enemies are entering. Why is the path curved?",
    options: ["Decoration", "To confuse enemies", "Random"],
    answer: "To confuse enemies"
  },
  {
    text: "Where should guards stand?",
    options: ["Low ground", "High point", "Inside room"],
    answer: "High point"
  },
  {
    text: "Why are walls thick?",
    options: ["Style", "Defense", "Random"],
    answer: "Defense"
  },
  {
    text: "How does sound travel?",
    options: ["Magic", "Acoustic design", "Coincidence"],
    answer: "Acoustic design"
  }
];
 
let current = 0;
let score = 0;
 
function loadMission() {
  document.getElementById("mission").innerText = missions[current].text;
 
  let optionsHTML = "";
  missions[current].options.forEach(option => {
    optionsHTML += `<button onclick="checkAnswer('${option}')">${option}</button>`;
  });
 
  document.getElementById("options").innerHTML = optionsHTML;
  document.getElementById("result").innerText = "";
}
 
function checkAnswer(selected) {
  if (selected === missions[current].answer) {
    document.getElementById("result").innerText = "Correct!";
    score += 10;
  } else {
    document.getElementById("result").innerText = "Wrong!";
  }
 
  document.getElementById("score").innerText = score;
}
 
function nextMission() {
  current++;
  if (current < missions.length) {
    loadMission();
  } else {
    document.getElementById("mission").innerText = "Game Completed!";
    document.getElementById("options").innerHTML = "";
  }
}
 
loadMission();
 

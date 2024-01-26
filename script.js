function startQuestions() {
    document.getElementById("questions").style.display = "block";
  }
  
  function answerYes() {
    document.getElementById("questions").style.display = "none";
      document.getElementById("que").style.display = "none";
      document.getElementById("init").innerText = "Haha Great🫶🏻🎉";
    document.getElementById("message").style.display = "block";
    document.getElementById("messageText").innerText = "I believe in love at first sight too😂! How about we go to eat icecream🤧 and Go for a long drive🐼";
}
  
  function answerNo() {
    document.getElementById("questions").style.display = "none";
    document.getElementById("que").style.display = "none";
    document.getElementById("init").innerText = "wah Baakaa Chi😭🥺🐼";
    document.getElementById("message").style.display = "block";
    document.getElementById("messageText").innerText = "No worries😭, I respect that ,Love takes time😂 , You’re such an amazing person🫶🫣 And You are too much adorable 🤧🐥 and let me know if you ever want to hangout with me ✈️🚗, i thought We are destined to be together; you’ll be back😂🥱" ;
    showConfetti()

}
  
// Function to show confetti
function showConfetti() {
    const confettiSettings = {
      target: 'confetti-canvas',
      respawn: true,
      colors: ['#ff0000', '#00ff00', '#0000ff'], 
    };
  
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
    setTimeout(() => {
      confetti.clear();
    }, 5000);
  }
  

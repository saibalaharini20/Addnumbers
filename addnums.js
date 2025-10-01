   let firstNumberEl = document.getElementById("firstNumber");
   let secondNumberEl = document.getElementById("secondNumber");
   let userInputEl = document.getElementById("userInput");
   let gameResultEl = document.getElementById("gameResult");

   function generateNumbers() {
     let num1 = Math.ceil(Math.random() * 10);
     let num2 = Math.ceil(Math.random() * 10);
     firstNumberEl.textContent = num1;
     secondNumberEl.textContent = num2;
   }
   generateNumbers();

   document.getElementById("checkButton").addEventListener("click", function () {
     let num1 = parseInt(firstNumberEl.textContent);
     let num2 = parseInt(secondNumberEl.textContent);
     let correctAnswer = num1 + num2;
     let userAnswer = parseInt(userInputEl.value);

     if (userAnswer === correctAnswer) {
       gameResultEl.textContent = "Congratulations! 🎉 Correct Answer!";
       gameResultEl.style.color = "#028a0f";
     } else {
       gameResultEl.textContent = "Oops! ❌ Wrong Answer. Try Again!";
       gameResultEl.style.color = "#1e217c";
     }
   });

   document.getElementById("restartButton").addEventListener("click", function () {
     generateNumbers();
     gameResultEl.textContent = "";
     userInputEl.value = "";
   });
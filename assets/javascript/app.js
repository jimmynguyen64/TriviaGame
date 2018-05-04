    function buildQuiz() {

      const output = [];
  
   
      myQuestions.forEach((currentQuestion, questionNumber) => {
        
        const answers = [];
  
        for (letter in currentQuestion.answers) {
          
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
  
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join("")} </div>`
        );
      });
  
      
      quizContainer.innerHTML = output.join("");
    }
    
    

    function showResults() {
      
      const answerContainers = quizContainer.querySelectorAll(".answers");
  
      
      numCorrect = 0;
  
      
      myQuestions.forEach((currentQuestion, questionNumber) => {
        
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        
        if (userAnswer === currentQuestion.correctAnswer) {
          
          numCorrect++;
  
         
          answerContainers[questionNumber].style.color = "lightgreen";
        } else {

          answerContainers[questionNumber].style.color = "red";
        }
      });
      endgamescreen(numCorrect);
      
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");
    const myQuestions = [
      {
        question: "Who is the strongest in Dragonball Z?",
        answers: { 
        a: " Goku ", 
        b: " Vegeta ", 
        c: " Krillan "
        },
        correctAnswer: "a"
      },
      {
        question: "What was Howl in Howl's Moving Castle?",
        answers: {
          a: " Stud ",
          b: " Wizard ",
          c: " Mage ",
          d: " all the above "
        },
        correctAnswer: "b"
      },
      {
        question: "Who is the god of war?",
        answers: {
          a: " Aries ",
          b: " Jupiter ",
          c: " Mars ",
          d: " A & C "
        },
        correctAnswer: "d"
      },
      {
      question: "Who defeated Medusa in Greek Mythology?",
        answers: {
          a: "Odysseus",
          b: "Hercules",
          c: "Perseus",
        },
        correctAnswer: "c"
      },
      {
        question: "Who is the Goddess of wisdom?",
          answers: {
            a: "APHRODITE",
            b: "ATHENA",
            c: "Até",
          },
          correctAnswer: "b"
        },
    ];
  
    // display quiz right away
    buildQuiz();
  
    // on submit, show results
    submitButton.addEventListener("click", showResults);
    

  let numCorrect = 0;
  var seconds;
      var temp;
     
      function countdown() {
        seconds = document.getElementById('countdown').innerHTML;
        seconds = parseInt(seconds, 10);
     
        if (seconds == 1) {
          temp = document.getElementById('countdown');
          temp.innerHTML = ("That's All Folks!!!");
          showResults();
          return;
        }
     
        seconds--;
        temp = document.getElementById('countdown');
        temp.innerHTML = seconds;
        timeoutMyOswego = setTimeout(countdown, 1000);
      } 
     
      countdown();

      function endgamescreen(score){
        if (seconds <= 1){
          alert(" Out of time!!! Your score is: " + score + " of 5")
        }

        else {
          alert(" Quiz Complete!!! Your score is: " + score + " of 5" )
        }
      }
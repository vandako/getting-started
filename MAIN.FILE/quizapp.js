const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Jupiter", "Mars", "Venus", "Saturn"],
      answer: "Mars"
    },
    {
      question: "What is the powerhouse of the cell?",
      options: ["Nucleus", "Chloroplast", "Mitochondria", "Ribosome"],
      answer: "Mitochondria"
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  document.addEventListener("DOMContentLoaded", function() {
    const name = localStorage.getItem('name');
  const email = localStorage.getItem('email');

  if (!name || !email) {
    alert('Please enter your name and email.');
    window.location.href = 'index.html';
  } else {
    displayQuestion();
  
    const submitButton = document.getElementById('submitBtn');
    submitButton.addEventListener('click', checkAnswer);
  }
  });
  
  function displayQuestion() {
    const questionElement = document.querySelector('.question');
    const optionsElement = document.querySelector('.options');
    const currentQuestionObj = questions[currentQuestion];
  
    questionElement.textContent = currentQuestionObj.question;
    optionsElement.innerHTML = '';
  
    currentQuestionObj.options.forEach(option => {
      const li = document.createElement('li');
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = 'option';
      input.value = option;
      li.appendChild(input);
      li.appendChild(document.createTextNode(option));
      optionsElement.appendChild(li);
    });
  }
  
  function checkAnswer() {
    const selectedOption = document.querySelector('input[type=radio]:checked');
  
    if (!selectedOption) {
      alert('Please select an option.');
      return;
    }
  
    const userAnswer = selectedOption.value;
    const correctAnswer = questions[currentQuestion].answer;
  
    if (userAnswer === correctAnswer) {
      score++;
      document.getElementById('feedback').textContent = 'Correct!';
    } else {
      document.getElementById('feedback').textContent = 'Incorrect! The correct answer is ' + correctAnswer;
    }
  
    currentQuestion++;
  
    if (currentQuestion < questions.length) {
      displayQuestion();
    } else {
      showResults();
    }
  }
  
  function showResults() {
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
  
    const quizContainer = document.querySelector('.quiz-container');
    quizContainer.innerHTML = `<h2>Quiz Complete!</h2>
    <p>Name: ${name}</p>
    <p>Email: ${email}</p>
    <p>Your score: ${score} out of ${questions.length}</p>`;
  }
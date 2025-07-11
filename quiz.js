const questions = [
  {
    q: "1. What does HTML stand for?",
    o: ["Hyper Text Markup Language", "High Transfer Markup Language", "Hyperlink and Text Management Language", "Home Tool Markup Language"],
    a: 0
  },
  {
    q: "2. Which HTML tag is used to display a picture on a webpage?",
    o: ["&lt;image&gt;", "&lt;picture&gt;", "&lt;img&gt;", "&lt;src&gt;"],
    a: 2
  },
  {
    q: "3. Which HTML tag is used to create a line break?",
    o: ["&lt;br&gt;", "&lt;break&gt;", "&lt;lb&gt;", "&lt;hr&gt;"],
    a: 0
  },
  {
    q: "4. What is the largest heading tag in HTML?",
    o: ["&lt;h1&gt;", "&lt;h6&gt;", "&lt;head&gt;", "&lt;heading&gt;"],
    a: 0
  },
  {
    q: "5. Which CSS property controls the text size?",
    o: ["font-weight", "text-style", "font-size", "text-size"],
    a: 2
  },
  {
    q: "6. How do you apply a background color in CSS?",
    o: ["color: blue;", "bg-color: blue;", "background-color: blue;", "background: blue-color;"],
    a: 2
  },
  {
    q: "7. Which is the correct way to apply a CSS class?",
    o: ["#myClass", "@myClass", ".myClass", "&myClass"],
    a: 2
  },
  {
    q: "8. What is the correct HTML element for the largest heading?",
    o: ["&lthead&gt", "&lth6&gt", "&lth1&gt", "&ltheading&gt"],
    a: 2
  },
  {
    q: "9. Which of the following is NOT a valid HTML5 semantic element?",
    o: ["&ltarticle&gt", "&ltfooter&gt", "&ltsection&gt", "&ltframe&gt"],
    a: 3
  },
  {
    q: "10. What does JavaScript primarily run on?",
    o: ["Server", "Database", "Browser", "Compiler"],
    a: 2
  },
  {
    q: "11. How do you declare a variable in JavaScript?",
    o: ["let x = 5;", "int x = 5;", "x := 5;", "declare x = 5;"],
    a: 0
  },
  {
    q: "12. Which operator is used to assign a value?",
    o: ["==", ":", "=", "==="],
    a: 2
  },
  {
    q: "13. Which method is used to add an element at the end of an array?",
    o: ["append()", "push()", "add()", "concat()"],
    a: 1
  },
  {
    q: "14. Which keyword is used for conditional branching in JavaScript?",
    o: ["loop", "if", "switcher", "case"],
    a: 1
  },
  {
    q: "15. What is the correct syntax for a function in JavaScript?",
    o: ["function myFunc()", "def myFunc()", "function:myFunc()", "function = myFunc()"],
    a: 0
  }
];


let current = 0;
let score = 0;
let timeLeft = 180;

let timer = setInterval(() => {
  document.getElementById("timer").innerText = `Time left: ${--timeLeft}s`;
  if (timeLeft <= 0) endQuiz();
}, 1000);

function showQuestion() {
  const q = questions[current];
  document.getElementById("question-container").innerHTML = `<h3>${q.q}</h3>`;
  
  const optionsHTML = q.o.map((opt, i) => 
    `<button class="option-btn" onclick="selectOption(${i})">${opt}</button>`
  ).join("");
  
  document.getElementById("options-container").innerHTML = optionsHTML;
  document.getElementById("next-btn").style.display = "none";
}

function selectOption(index) {
  const correct = questions[current].a;
  const buttons = document.querySelectorAll('.option-btn');

  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === correct) btn.classList.add('correct');
    if (i === index && i !== correct) btn.classList.add('wrong');
  });

  if (index === correct) score++;
  document.getElementById("next-btn").style.display = "inline-block";
}

function nextQuestion() {
  current++;
  if (current < questions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  clearInterval(timer);
  document.getElementById("question-container").innerHTML = "";
  document.getElementById("options-container").innerHTML = "";
  document.getElementById("next-btn").style.display = "none";
  document.getElementById("timer").style.display = "none";
  document.getElementById("score-box").innerHTML = `<h3>Quiz Over! Your Score: ${score}/${questions.length}</h3>`;
}

showQuestion();
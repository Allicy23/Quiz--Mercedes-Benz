const questions = [
  { 
    question: "1. Quem é creditado como o inventor do primeiro automóvel movido a gasolina?",
    img: "q1.jpg",
    options: ["Karl Benz", "Henry Ford", "Gottlieb Daimler", "Wilhelm Maybach"],
    correctAnswer: "Karl Benz",
    points: 10
  },

  { 
    question: "2. O nome 'Mercedes' vem de quem?",
    img: "q2.jpg",
    options: ["Esposa de Karl Benz", "Filha de Emil Jellinek", "Deusa grega", "Termo alemão antigo"],
    correctAnswer: "Filha de Emil Jellinek",
    points: 10
  },

  { 
    question: "3. Em que ano a Mercedes-Benz foi oficialmente formada após a fusão da Daimler e Benz?",
    img: "q3.jpg",
    options: ["1905", "1926", "1950", "1933"],
    correctAnswer: "1926",
    points: 10
  },

  { 
    question: "4. O que simbolizam as três pontas da estrela da Mercedes-Benz?",
    img: "q4.jpg",
    options: ["Luxo, força e velocidade", "Terra, mar e ar", "Eficiência, segurança e design", "Potência, conforto e tecnologia"],
    correctAnswer: "Terra, mar e ar",
    points: 10
  },

  { 
    question: "5. Qual modelo ficou famoso por suas portas tipo 'asa de gaivota'?",
    img: "q5.jpg",
    options: ["Classe C", "300SL", "SLS AMG", "CLA 45 AMG"],
    correctAnswer: "300SL",
    points: 10
  },

  { 
    question: "6. Como é apelidada a equipe de Fórmula 1 da Mercedes pelos carros prateados?",
    img: "q6.jpg",
    options: ["Silver Lights", "Silver Arrows", "Platinum Racers", "Steel Wings"],
    correctAnswer: "Silver Arrows",
    points: 10
  },

  { 
    question: "7. Qual sistema de segurança automotiva a Mercedes foi pioneira em adotar?",
    img: "q7.jpg",
    options: ["ABS", "Airbag", "Célula de sobrevivência (crumple zone)", "Controle de tração"],
    correctAnswer: "Célula de sobrevivência (crumple zone)",
    points: 10
  },

  { 
    question: "8. Qual divisão da Mercedes-Benz é focada em alto desempenho?",
    img: "q8.jpg",
    options: ["AMG", "GTR", "M-Power", "TurboSport"],
    correctAnswer: "AMG",
    points: 10
  },

  { 
    question: "9. Qual desses modelos é considerado o sedã de luxo mais icônico da marca?",
    img: "q9.jpg",
    options: ["Classe C", "Classe A", "Classe S", "GLA"],
    correctAnswer: "Classe S",
    points: 10
  },

  { 
    question: "10. Qual tecnologia de direção semi-autônoma avançada a Mercedes utiliza em seus veículos modernos?",
    img: "q10.jpg",
    options: ["AutoDrive 1.0", "Drive Pilot", "SmartMotion", "Assist Plus"],
    correctAnswer: "Drive Pilot",
    points: 10
  }
];


let current = 0;
let score = 0;
let timerInterval;
let timeLeft = 40;

document.getElementById("start-btn").onclick = () => {
    document.getElementById("start-screen").classList.add("hidden");
    document.getElementById("quiz-screen").classList.remove("hidden");
    loadQuestion();
};

function startTimer() {
    clearInterval(timerInterval);
    timeLeft = 40;
    document.getElementById("timer-number").textContent = timeLeft;

    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById("timer-number").textContent = timeLeft;

        if (timeLeft <= 0) nextQuestion();
    }, 1000);
}

function loadQuestion() {
    const q = questions[current];
    document.getElementById("question").textContent = q.question;
    document.getElementById("question-img").src = q.img;

    const box = document.getElementById("options");
    box.innerHTML = "";

    q.options.forEach(op => {
        const btn = document.createElement("button");
        btn.textContent = op;
        btn.onclick = () => checkAnswer(btn, op);
        box.appendChild(btn);
    });

    startTimer();
}

function checkAnswer(btn, ans) {
    const q = questions[current];

    if (ans === q.correctAnswer) {
        btn.classList.add("correct");
        score += q.points;
        document.getElementById("score").textContent = score;
    } else {
        btn.classList.add("wrong");
    }

    setTimeout(nextQuestion, 700);
}

function nextQuestion() {
    current++;

    if (current >= questions.length) return endQuiz();
    loadQuestion();
}

function endQuiz() {
    document.getElementById("quiz-screen").classList.add("hidden");
    document.getElementById("end-screen").classList.remove("hidden");

    document.getElementById("final-score").textContent = score;

    let msg = score >= 80 ? "Excelente!" :
              score >= 50 ? "Muito bom!" :
              "Continue treinando!";

    document.getElementById("end-title").textContent = msg;
}

document.getElementById("restart-btn").onclick = () => location.reload()
const questions = [
    {
        question: "1. Qual foi o primeiro trator Massey Ferguson fabricado no Brasil?",
        options: ["MF 50", "MF 65x", "MF 95", "MF 275"],
        answer: 1
    },
    {
        question: "2. Qual cor tradicional caracteriza os tratores da Massey Ferguson?",
        options: ["Verde", "Azul", "Vermelho", "Amarelo"],
        answer: 2
    },
    {
        question: "3. A Massey Ferguson faz parte de qual grande grupo industrial global?",
        options: ["CNH Industrial", "AGCO Corporation", "John Deere", "Kubota"],
        answer: 1
    },
    {
        question: "4. Qual motor clássico ficou mundialmente famoso por equipar muitos tratores Massey Ferguson antigos?",
        options: ["Perkins", "Cummins", "MWM", "Mercedes-Benz"],
        answer: 0
    },
    {
        question: "5. Qual modelo da linha vermelha ficou conhecido no Brasil pelo apelido de 'Cinquentinha'?",
        options: ["MF 50", "MF 50x", "MF 55", "MF 65"],
        answer: 1
    },
    {
        question: "6. Em que ano a Massey Ferguson iniciou sua produção industrial no Brasil (em Canoas - RS)?",
        options: ["1955", "1961", "1970", "1982"],
        answer: 1
    },
    {
        question: "7. Qual série de tratores da Massey Ferguson marcou a transição para a tecnologia mais moderna com cabines integradas nos anos 90/2000 no Brasil?",
        options: ["Série 200", "Série 5000", "Série 4200", "Série 600"],
        answer: 3
    },
    {
        question: "8. O icônico trator MF 275 pertence a qual famosa série da marca no Brasil?",
        options: ["Série 200", "Série 300", "Série 600", "Série 7000"],
        answer: 0
    },
    {
        question: "9. Qual a principal função do sistema hidráulico Ferguson, patenteado por Harry Ferguson?",
        options: ["Aumentar a velocidade final", "Controle de profundidade e transferência de peso do implemento", "Economizar combustível na estrada", "Resfriamento rápido do motor"],
        answer: 1
    },
    {
        question: "10. Qual destas opções é uma linha de tratores focada em alta potência da Massey Ferguson?",
        options: ["MF 4200", "MF 7700 S", "MF 292", "MF 50X"],
        answer: 1
    },
    {
        question: "11. De onde originou-se a marca Massey Ferguson após a fusão em 1953?",
        options: ["Masssey Harris e Ferguson Company", "Ford e Ferguson", "Fiat e Massey", "Case e Harris"],
        answer: 0
    },
    {
        question: "12. Qual modelo da série 4200 é um dos tratores utilitários mais vendidos e populares do Brasil?",
        options: ["MF 4275", "MF 4292", "MF 4299", "Todos os anteriores"],
        answer: 3
    },
    {
        question: "13. O que significa a sigla MF nos equipamentos?",
        options: ["Motor Forte", "Massey Ferguson", "Mechanized Farming", "Master Force"],
        answer: 1
    },
    {
        question: "14. Qual trator Massey Ferguson introduziu amplamente a tração dianteira auxiliar (tração 4x4) de série com grande apelo comercial no Brasil nos anos 80?",
        options: ["MF 295", "MF 285", "MF 296 / 297", "MF 50"],
        answer: 2
    },
    {
        question: "15. A tecnologia de telemetria e agricultura de precisão da AGCO usada nos tratores MF chama-se:",
        options: ["AutoTrac", "AgriCommand / Fuse", "Xerion", "IsoMax"],
        answer: 1
    },
    {
        question: "16. Qual destes tratores possui articulação central (chassi articulado) voltado para grandes lavouras?",
        options: ["MF 98", "MF 8700 S", "MF 4283", "MF 265"],
        answer: 0
    },
    {
        question: "17. Harry Ferguson, um dos fundadores, era originário de qual país?",
        options: ["Estados Unidos", "Irlanda do Norte", "Inglaterra", "Canadá"],
        answer: 1
    },
    {
        question: "18. Qual característica mecânica marcou o motor Perkins dos tratores MF clássicos?",
        options: ["Ser de 2 tempos", "Alta durabilidade e facilidade de manutenção", "Uso obrigatório de gasolina", "Refrigeração exclusiva a ar"],
        answer: 1
    },
    {
        question: "19. Qual série atual substituiu com grande sucesso tecnológico a antiga linha 4200 no mercado brasileiro?",
        options: ["Série MF 4700", "Série MF 300", "Série MF 900", "Série MF 100"],
        answer: 0
    },
    {
        question: "20. Qual era a principal inovação do sistema de engate de três pontos criado por Harry Ferguson?",
        options: ["Eliminar a necessidade de motor", "Integrar o implemento ao trator de forma segura e controlada", "Permitir acoplar carretas rodoviárias", "Aumentar o torque das rodas traseiras"],
        answer: 1
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("next-btn");
const quizDiv = document.getElementById("quiz");
const scoreContainer = document.getElementById("score-container");
const scoreText = document.getElementById("score-text");

function loadQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionText.innerText = currentQuestion.question;

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add("option-btn");
        button.addEventListener("click", () => selectOption(button, index));
        optionsContainer.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (optionsContainer.firstChild) {
        optionsContainer.removeChild(optionsContainer.firstChild);
    }
}

function selectOption(button, selectedIndex) {
    let currentQuestion = questions[currentQuestionIndex];
    const buttons = optionsContainer.querySelectorAll(".option-btn");

    buttons.forEach(btn => btn.disabled = true);

    if (selectedIndex === currentQuestion.answer) {
        button.classList.add("correct");
        score++;
    } else {
        button.classList.add("wrong");
        buttons[currentQuestion.answer].classList.add("correct");
    }

    nextButton.style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    quizDiv.style.display = "none";
    scoreContainer.style.display = "block";
    scoreText.innerText = `Você acertou ${score} de ${questions.length} perguntas!`;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    quizDiv.style.display = "block";
    scoreContainer.style.display = "none";
    loadQuestion();
}

loadQuestion();
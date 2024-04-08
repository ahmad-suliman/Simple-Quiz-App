const qusetions = [
    {
        qusetion: "which is larget animal in the world?",
        answers :[
            { text :"shark", correct: false },
            { text :"Blue Whale", correct: true },
            { text :"Bobber", correct: false },
            { text :"Kurva", correct: false },
        ]
    },
    {
        qusetion: "which is smallest country in the world?",
        answers :[
            { text :"syria", correct: false },
            { text :"egypt", correct: false },
            { text :"vatican", correct: true },
            { text :"iraq", correct: false },
        ]
    },
    {
        qusetion: "Aer you Gay?",
        answers :[
            { text :"yes", correct: true },
            { text :"NO", correct: false },
            { text :"mabey", correct: false },
            { text :"idk", correct: false },
        ]
    },
    {
        qusetion: "which is the larget desert in the world?",
        answers :[
            { text :"kaiahari", correct: false },
            { text :"dubi", correct: false },
            { text :"sahaca", correct: false },
            { text :"antaccsca", correct: true },
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score =0 ;
    nextButton.innerHTML="Next";
    showQuestion();
}
function  showQuestion(){
    resetState();
    let currentQuestion = qusetions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML =questionNo + ". "+currentQuestion.qusetion;
    
    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectBtn= e.target;
    const isCorrect = selectBtn.dataset.correct ==="true";
    if (isCorrect){
        selectBtn.classList.add("correct");
        score++;
    }else{
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled = true ;
    });
    nextButton.style.display = "block";
}
function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${qusetions.length}`;
    nextButton.innerHTML = "play agin";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if (currentQuestionIndex < qusetions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<qusetions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});
startQuiz();
document.addEventListener("DOMContentLoaded", () => {
    const quizContainer = document.getElementById('quiz-container');

    const quizQuestions = [
        {
            question: "What is the main character's name?",
            options: ["Harry Du Bois", "Kim Kitsuragi", "Jean Vicquemare", "Klaasje Amandou"],
            answer: "Harry Du Bois"
        },
        {
            question: "What type of game is Disco Elysium?",
            options: ["First-person shooter", "Role-playing game", "Puzzle game", "Strategy game"],
            answer: "Role-playing game"
        },
        {
            question: "What is the setting of Disco Elysium?",
            options: ["Revachol", "Novigrad", "Dunwall", "Rapture"],
            answer: "Revachol"
        }
    ];
    function generateQuiz() {
        quizQuestions.forEach((q, index) => {
            const questionElement = document.createElement('div');
            questionElement.classList.add('question');

            const questionText = document.createElement('h3');
            questionText.textContent = q.question;
            questionElement.appendChild(questionText);

            q.options.forEach(option => {
                const optionLabel = document.createElement('label');
                const optionInput = document.createElement('input');
                optionInput.type = 'radio';
                optionInput.name = `question${index}`;
                optionInput.value = option;

                optionLabel.appendChild(optionInput);
                optionLabel.appendChild(document.createTextNode(option));
                questionElement.appendChild(optionLabel);
            });

            quizContainer.appendChild(questionElement);
        }); 
        quizQuestions.className = "questions";
        
        const submitButton = document.createElement('button');
        submitButton.textContent = 'Submit';
        submitButton.addEventListener('click', gradeQuiz);
        quizContainer.appendChild(submitButton);
        submitButton.className = "button";
    }

    function gradeQuiz() {
        let score = 0;
        quizQuestions.forEach((q, index) => {
            const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
            if (selectedOption && selectedOption.value === q.answer) {
                score++;
            }
        });

        alert(`You scored ${score} out of ${quizQuestions.length}`);
    }

    generateQuiz();
});

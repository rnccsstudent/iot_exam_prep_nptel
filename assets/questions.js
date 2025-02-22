const questions = [
    { question: "What is IoT?", options: ["Internet of Technology", "Internet of Things", "Intelligent Objects", "None"], correct: "2" },
    { question: "Which protocol is used in IoT?", options: ["HTTP", "MQTT", "FTP", "SMTP"], correct: "2" }
];

localStorage.setItem("questions", JSON.stringify(questions));

document.addEventListener("DOMContentLoaded", function () {
    let quizContainer = document.getElementById("quiz-container");
    let questions = JSON.parse(localStorage.getItem("questions"));

    quizContainer.innerHTML = questions.map((q, i) =>
        `<div class="question">
            <p>${q.question}</p>
            ${q.options.map((opt, j) =>
                `<input type="radio" name="q${i}" value="${j + 1}"> ${opt} <br>`
            ).join("")}
        </div>`).join("");
});

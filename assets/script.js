// Notes Functionality
function saveNote() {
    let note = document.getElementById("noteInput").value;
    let savedNotes = localStorage.getItem("notes") || "[]";
    let notesArray = JSON.parse(savedNotes);
    notesArray.push(note);
    localStorage.setItem("notes", JSON.stringify(notesArray));
    displayNotes();
}

function displayNotes() {
    let notesArray = JSON.parse(localStorage.getItem("notes") || "[]");
    let display = document.getElementById("savedNotes");
    display.innerHTML = notesArray.map(note => `<p>${note}</p>`).join("");
}
displayNotes();

// Quiz Functionality
function checkAnswers() {
    let correctAnswers = 0;
    let questions = JSON.parse(localStorage.getItem("questions"));
    
    document.querySelectorAll(".question").forEach((q, index) => {
        let selected = q.querySelector("input:checked");
        if (selected && selected.value == questions[index].correct) {
            correctAnswers++;
        }
    });
    
    document.getElementById("result").innerText = `Score: ${correctAnswers}/${questions.length}`;
}

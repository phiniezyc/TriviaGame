/*function startQuiz() {
    document.getElementById("startQuiz").addEventListener("click", Quiz1)

}

function Quiz1() {
    document.getElementById("quizQuestion").innerHTML = "Who was Roger Rabbit Sleeping w/?";
    document.getElementById("question1Div").innerHTML = "Jessica Rabbit";
    //named "startQuiz because it's the middle section for the button
    document.getElementById("startQuiz").innerHTML = "Elmer Fudd";
    document.getElementById("question3Div").innerHTML = "Roger Himself";
    document.getElementById("question4Div").innerHTML = "You did!";
    console.log("test")
}*/

$("#startGameButton").on("click", function () {
    $("#startGameButton").remove();
    for (var i = 0; i < questions.length; i++) {
        $("#questionSection").append("<h2>" + questions[i].question + "</h2>");
        for (var j = 0; j < questions[i].answers.length; j++) {
            $("#questionSection").append("<input type = 'radio' name= 'question- " + i + " 'value'" + questions[i].answers[j] + "'>" + questions[i].answers[j])
        }
    }
});

var questions = [{
    question: "who shot Roger Rabbit?",
    answers: ["Jessica Rabbit", "The Tortoise", "Elmer Fudd", "Roger Rabbit?"],
    correctAnswer: "Jessica Rabbit"
}, {
    question: "Who is the best Brave?",
    answers: ["Freeman", "Inciarte", "Tehran", "Swanson"],
    correctAnswer: "Freeman"
}, {
    question: "Who is the best Hawk of All Time?",
    answers: ["Dominique Wilkins", "Joe Johnson", "Pistol Pete", "Dikembe Mutombo"],
    correctAnswer: "Dominique Wilkins"
}, {
    question: "Who is the best Falcon?",
    answers: ["Julio Jones", "Matt Ryan", "Devante Freeman", "Beasley"],
    correctAnswer: "Julio Jones"
}];


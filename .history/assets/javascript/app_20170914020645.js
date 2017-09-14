
$("#startGameButton").on("click", function () {
    trivaScoring.startTimer();
    /* $("#startGameButton").remove();
    for (var i = 0; i < questions.length; i++) {
        $("#questionSection").append("<h2>" + questions[i].question + "</h2>");
        for (var j = 0; j < questions[i].answers.length; j++) {
            $("#questionSection").append("<input type = 'radio' name= 'questionsToAsk" + i + " 'value' " + questions[i].answers[j] + "'>" + questions[i].answers[j])
        }
    }
    $("#questionSection").after("<button value = 'hello' id = 'doneButton'> Done"); */
});

var questions = [{
    question: " who shot Roger Rabbit? ",
    answers: [" Jessica Rabbit ", " The Tortoise ", " Elmer Fudd ", " Roger Rabbit? "],
    correctAnswer: " Jessica Rabbit "
}, {
    question: " Who is the best Brave? ",
    answers: [" Freeman ", " Inciarte ", " Tehran ", " Swanson "],
    correctAnswer: "Freeman"
}, {
    question: " Who is the best Hawk of All Time? ",
    answers: [" Dominique Wilkins ", " Joe Johnson ", " Pistol Pete ", " Dikembe Mutombo "],
    correctAnswer: " Dominique Wilkins "
}, {
    question: " Who is the best Falcon? ",
    answers: [" Julio Jones ", " Matt Ryan ", " Devante Freeman ", " Beasley "],
    correctAnswer: " Julio Jones "
}];


var trivaScoring = {
    correct: 0,
    incorrect: 0,
    counter: 60,
    timeLeft: function() {
        trivaScoring.counter--;
        $("#timeClock").html(trivaScoring.counter);
        console.log(this.countercounter);
        if (trivaScoring.counter === 0) {
            console.log("You're done!");
            trivaScoring.over();
        }
    },
    startTimer: function() {
        timer = setInterval(trivaScoring.timeLeft, 1000);
        $("#questionSection").prepend("<h3>Time Left to Answer: <span id = 'timeClock'>  </span> Seconds </h3>");
        $("#startGameButton").remove();
        for (var i = 0; i < questions.length; i++) {
            $("#questionSection").append("<h2>" + questions[i].question + "</h2>");
            for (var j = 0; j < questions[i].answers.length; j++) {
                $("#questionSection").append("<input type = 'radio' name= 'questionsToAsk" + i + " 'value' " + questions[i].answers[j] + "'>" + questions[i].answers[j])
            }
        }
        $("#questionSection").after("<button value = 'hello' id = 'doneButton'> Done");
    }


}

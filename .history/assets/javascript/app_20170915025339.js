
$("#starttrButton").on("click", function () {
    trivaScoring.startTimer();
    /* $("#starttrButton").remove();
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
    counter: 3,
    timeLeft: function() {
        trivaScoring.counter--;
        $("#timeClock").html(trivaScoring.counter);
        console.log(trivaScoring.counter);
        if (trivaScoring.counter <= 0) {
            console.log("You're done!");
            trivaScoring.over();
        }
    },
    startTimer: function() {
        timer = setInterval(trivaScoring.timeLeft, 1000);
        $("#questionSection").prepend("<h3>Time Left: <span id = 'timeClock'>  </span> Seconds </h3>");
        $("#starttrButton").remove();
        for (var i = 0; i < questions.length; i++) {
            $("#questionSection").append("<h2>" + questions[i].question + "</h2>");
            for (var j = 0; j < questions[i].answers.length; j++) {
                $("#questionSection").append("<input type = 'radio' name= 'questionsToAsk" + i + " 'value' " + questions[i].answers[j] + "'>" + questions[i].answers[j])
            }
        }
        $("#questionSection").after("<button value = 'hello' id = 'doneButton'> Done");
    },
    over: function() {
        $.each($("input[name = 'question-0']:checked"), function() {
            if($(this).val()==questions[0].correctAnswer) {
                trivaScoring.correct++;
                console.log(trivaScoring.correct);
            }else {
                trivaScoring.incorrect++;
            }
        });
        $.each($("input[name = 'question-1']:checked"), function() {
            if($(this).val()==questions[1].correctAnswer) {
                trivaScoring.correct++;
                console.log(tr.correct);
            }else {
                tr.incorrect++;
            }
        });
        $.each($("input[name = 'question-2']:checked"), function() {
            if($(this).val()==questions[2].correctAnswer) {
                tr.correct++;
                console.log(tr.correct);
            }else {
                tr.incorrect++;
            }
        });
        $.each($("input[name = 'question-3']:checked"), function() {
            if($(this).val()==questions[3].correctAnswer) {
                tr.correct++;
                console.log(tr.correct);
            }else {
                tr.incorrect++;
            }
        });
        this.result();

    },
        result: function() {
            clearInterval(timer);
            $("#questionSection h3").remove();
            $("#questionSection").html("<h2> Results are In! </h2>");
            $("#questionSection").append("<h3>Correct Answers:' + trivaScoring.correct'</h3>");
            $("#questionSection").append("<h3>Incorrect Answers:' + trivaScoring.incorrect'</h3>");
            $("#questionSection").append("<h3>Unanswered Questions:'+ questions.length-(this.incorrect+this.correct))+'</h3>");

        }
};

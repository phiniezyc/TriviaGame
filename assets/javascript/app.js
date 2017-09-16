
$("#startGameButton").on("click", function () {
    trivaScoring.startTimer();
});

var questions = [{
    question: " What was Atlanta's original name? ",
    answers: [" King George ", " Terminus ", " Hotlanta ", " Phoenix "],
    correctAnswer: " Terminus "
}, {
    question: " How many streets are named 'Peachtree' in Atlanta? ",
    answers: [" 24 ", " 109 ", " 55 ", " 7 "],
    correctAnswer: " 55 "
}, {
    question: " What is the official symbol of Atlanta? ",
    answers: [" Phoenix ", " Pecan ", " Peach ", " Tomahawk "],
    correctAnswer: " Phoenix "
}, {
    question: " Which of these cities was NOT a capital of Georgia before Atlanta? ",
    answers: [" Savannah ", " Augusta ", " Valdosta ", " Louisville "],
    correctAnswer: " Valdosta "
}, {
    question: " What is the name of one of the largest blocks of exposed granite in the world, located just outside of Atlanta? ",
    answers: [" Macon ", " High Line ", " Large Rock ", " Stone Mountain "],
    correctAnswer: " Stone Mountain "
}, {

    question: " What cities did Atlanta NOT beat out for the right to host the 1996 Olympics? ",
    answers: [" Athens ", " Toronto ", " Seattle ", " Manchester "],
    correctAnswer: " Seattle "
}, {
    question: " Which Georgia college holds the distinction of winning by the largest margin in the sport's history ? ",
    answers: [" University of Georgia ", " Georgia Tech ", " Georgia State ", " Emory "],
    correctAnswer: " Georgia Tech "
}, {
    question: " What was the profession of the person who came for the Atlanta professional football team? ",
    answers: [" teacher ", " team namer ", " owner ", " mayor "],
    correctAnswer: " teacher "
}, {
    question: " Which Atlanta native wrote Gone with the Wind? ",
    answers: [" Rick Wilson ", " Shelly Moore ", " George Martin ", " Margaret Mitchell "],
    correctAnswer: " Margaret Mitchell "
}, {
    question: " What is the best music group from the city of Atlanta? ",
    answers: [" John Mayer ", " Future ", " Outkast ", " impossible to determine "],
    correctAnswer: " impossible to determine "
}];


var trivaScoring = {
    correct: 0,
    incorrect: 0,
    counter: 20,
    timeLeft: function () {
        trivaScoring.counter--;
        $("#timeClock").html(trivaScoring.counter);
        console.log(trivaScoring.counter);
        if (trivaScoring.counter <= 0) {
            console.log("You're done!");
            trivaScoring.over();
        }
    },
    startTimer: function () {
        timer = setInterval(trivaScoring.timeLeft, 1000);
        $("#questionSection").prepend("<h3>Time Left: <span id = 'timeClock'>  </span> Seconds </h3>");
        $("#startGameButton").remove();
        
        for (var i = 0; i < questions.length; i++) {
            $("#questionSection").append("<h2>" + questions[i].question + "</h2>");
            for (var j = 0; j < questions[i].answers.length; j++) {
                $("#questionSection").append("<input type= 'radio' name='question-"+i+"' value ='"+questions[i].answers[j]+"'>"+ questions[i].answers[j])
            }
        }
    },
    over: function() {
        $.each($("input[name='question-0']:checked"), function () {
            console.log("Test");
            if($("input[name='question-0']:checked").val()===questions[0].correctAnswer) {
                console.log("if test");
                trivaScoring.correct++;


            } else {
                trivaScoring.incorrect++;
                console.log("Else Test");
            }
        });
        $.each($("input[name='question-1']:checked"), function () {
            if ($(this).val() === questions[1].correctAnswer) {
                trivaScoring.correct++;
            } else {
                trivaScoring.incorrect++;
            }
        });
        $.each($("input[name='question-2']:checked"), function () {
            if ($(this).val() === questions[2].correctAnswer) {
                trivaScoring.correct++;
            } else {
                trivaScoring.incorrect++;
            }
        });
        $.each($("input[name='question-3']:checked"), function () {
            if ($(this).val() === questions[3].correctAnswer) {
                trivaScoring.correct++;
            } else {
                trivaScoring.incorrect++;
            }
        });
        $.each($("input[name='question-4']:checked"), function () {
            if ($(this).val() === questions[4].correctAnswer) {
                trivaScoring.correct++;
            } else {
                trivaScoring.incorrect++;
            }
        });
        $.each($("input[name='question-5']:checked"), function () {
            if ($(this).val() === questions[5].correctAnswer) {
                trivaScoring.correct++;
            } else {
                trivaScoring.incorrect++;
            }
        });
        $.each($("input[name='question-6']:checked"), function () {
            if ($(this).val() === questions[6].correctAnswer) {
                trivaScoring.correct++;
            } else {
                trivaScoring.incorrect++;
            }
        });
        $.each($("input[name='question-7']:checked"), function () {
            if ($(this).val() === questions[7].correctAnswer) {
                trivaScoring.correct++;
            } else {
                trivaScoring.incorrect++;
            }
        });
        $.each($("input[name='question-8']:checked"), function () {
            if ($(this).val() === questions[8].correctAnswer) {
                trivaScoring.correct++;
            } else {
                trivaScoring.incorrect++;
            }
        });
        $.each($("input[name='question-9']:checked"), function () {
            if ($(this).val() === questions[9].correctAnswer) {
                trivaScoring.correct++;
            } else {
                trivaScoring.incorrect++;
            }
        });
        $.each($("input[name='question-10']:checked"), function () {
            if ($(this).val() === questions[10].correctAnswer) {
                trivaScoring.correct++;
            } else {
                trivaScoring.incorrect++;
            }
        });
        this.result();
    },
    result: function () {
        clearInterval(timer);
        $("#questionSection h3").remove();
        $("#questionSection").html("<h2> How You Did: </h2>");
        $("#questionSection").append("<h3>Correct: " + this.correct + "</h3>");
        $("#questionSection").append("<h3>Incorrect: " + this.incorrect + "</h3>");
        $("#questionSection").append("<h3>Questions Left Blank: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
    }
};

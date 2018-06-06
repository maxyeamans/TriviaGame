$(document).ready(function () {

    // *Global game variables
    var numWins = 0;
    var numLosses = 0;
    var numCorrect = 0;
    var numWrong = 0;
    var numMissed = 0;
    var currentQuizItem;
    const TIME_LIMIT = 3; // This will be the time limit for each question
    var timer;  // Variable to hold the setTimeout
    var timeLeft;
    var questionTimeLeft; // Variable to hold the time left in seconds for each question
    

    // Array to hold all of the possible questions
    var QuizItems = [QuizItem1, QuizItem2, QuizItem3, QuizItem4, QuizItem5, QuizItem6];

    // Randomly selects a question from the bank of questions
    function SelectQuizItem() {
        var random = Math.floor(Math.random() * QuizItems.length);
        // Splicing, rather than selecting, the trivia item
        // means it can't be picked twice in one game.
        var splicedQuizItem = QuizItems.splice(random, 1);
        currentQuizItem = splicedQuizItem[0];
        console.log(currentQuizItem);
    }

    // Displays the quiz items on the display area
    // TODO: Rewrite so this doesn't require an argument
    function DisplayQuizItem(item) {
        StartCountdown();
        // Clear the quiz item container
        $("#display-area").empty();
        // Display the question on the page
        $("#display-area").append($("<h3>").text(item.Question));
        // Display the potential answers on the page
        item.Answers.forEach( function( answer ) {
            $("#display-area").append($("<p>").text( answer ).addClass("answer p-2 rounded text-center"));         
        });
        $("#questions-left").text(QuizItems.length);
    }
        
    function StartCountdown() {
        clearInterval(timer);
        timeLeft = TIME_LIMIT;
        timer = setInterval( function() {
            $("#time-left").text(timeLeft);
            timeLeft--;
            console.log($("#time-left").text())
            // Time's up? Move on to next question.
            if( $("#time-left").text() == "0" ) {
                clearInterval(timer);
                numMissed++;
                alert("Oooh, you ran out of time.");
                SelectQuizItem();
                DisplayQuizItem( currentQuizItem );
            };
        }, 1000)
    };
    
    $(".start-button").on("click", function() {
        SelectQuizItem();
        DisplayQuizItem( currentQuizItem );
    });

    function IsItOverYet() {
        if( QuizItems.length == 0) {
            // alert("You made it through. You got " + numCorrect + " correct, " + numWrong + " wrong, and missed " + numMissed + ".");
            clearInterval(timer);
            $("#display-area").empty();
            var gameResults = $("<div>").addClass("lead").text("You made it through. You got " + numCorrect + " correct, " + numWrong + " wrong, and missed " + numMissed + ".");
            var btnNewGame = $("<button>").addClass("start-button").text("Play again?");
            $("#display-area").append(gameResults).append(btnNewGame);

        }
        else {
            SelectQuizItem();
            DisplayQuizItem( currentQuizItem );
        }        
    }

    function ResetStats() {

    }
    
    // TODO: Split the two if/else statements into functions
    $("#display-area").on("click", ".answer", function() {
        console.log($(this).text());
        if( $(this).text() == currentQuizItem.CorrectAnswer) {
            alert("That's right!");
            numCorrect++;
        }
        else {
            alert("That's wrong.");
            numWrong++;
        };
        IsItOverYet();
    });
    
});
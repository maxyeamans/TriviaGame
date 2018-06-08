$(document).ready(function () {

    // *Global game variables
    var numCorrect = 0;
    var numWrong = 0;
    var numMissed = 0;
    var currentQuizItem;
    const TIME_LIMIT = 10;   // This will be the time limit for each question
    var timer;              // Variable to hold the setTimeout
    var timeLeft;
    var questionTimeLeft;   // Variable to hold the time left in seconds for each question



    // This will hold the 5 quiz items for the game
    var QuizItems = [];

    // Randomly selects a question from the bank of questions
    function SelectQuizItem() {
        var random = Math.floor(Math.random() * QuizItems.length);
        // Splicing, rather than selecting, the trivia item
        // means it can't be picked twice in one game.
        var splicedQuizItem = QuizItems.splice(random, 1);
        currentQuizItem = splicedQuizItem[0];
        console.log(currentQuizItem);
    };

    // Displays the quiz items on the display area
    function DisplayQuizItem(item) {
        // Start the timer for the question
        StartCountdown();
        // Clear the quiz item container
        $("#display-area").empty();
        // Display the question on the page
        $("#display-area").append($("<h3>").text(item.Question));
        // Display the potential answers on the page
        item.Answers.forEach(function (answer) {
            $("#display-area").append($("<p>").text(answer).addClass("answer p-2 rounded text-center"));
        });
        // Display how many questions are left
        $("#questions-left").text(QuizItems.length);
    };

    function StartCountdown() {
        clearInterval(timer);
        timeLeft = TIME_LIMIT;
        timer = setInterval(function () {
            $("#time-left").text(timeLeft);
            timeLeft--;
            console.log($("#time-left").text())
            // Time's up? Move on to next question.
            if ($("#time-left").text() == "0") {
                clearInterval(timer);
                numMissed++;
                alert("Oooh, you ran out of time.");
                SelectQuizItem();
                DisplayQuizItem(currentQuizItem);
            };
        }, 1000)
    };


    function IsItOverYet() {
        // If there are no more quiz items, then...
        if (QuizItems.length == 0) {
            // Stop the timer
            clearInterval(timer);
            // Clear out the display area
            $("#display-area").empty();
            // Create elements to show the results of the game
            var gameResults = $("<div>").addClass("lead").text("You made it through. You got " + numCorrect + " correct, " + numWrong + " wrong, and missed " + numMissed + ".");
            var btnNewGame = $("<button>").addClass("start-button").text("Play again?");
            // Add the elements to show the results of the game
            $("#display-area").append(gameResults);
            // Add a button to start a new game that doesn't work for some reason.
            $("#display-area").append(btnNewGame).addClass("start-button");
        }
        // If there are still quiz items, then...
        else {
            SelectQuizItem();
            DisplayQuizItem(currentQuizItem);
        }
    };

    function ResetStats() {
        numCorrect = 0;
        numWrong = 0;
        numMissed = 0;
    };

    $(".start-button").on("click", function () {
        ResetStats();
        QuizItems = PickSomeItems(AllQuizItems);
        SelectQuizItem();
        DisplayQuizItem(currentQuizItem);
    });

    // TODO: Split the two if/else statements into functions
    $("#display-area").on("click", ".answer", function () {
        console.log($(this).text());
        if ($(this).text() == currentQuizItem.CorrectAnswer) {
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
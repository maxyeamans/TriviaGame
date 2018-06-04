$(document).ready(function () {

    // *Global game variables
    var numWins = 0;
    var numLosses = 0;
    var currentQuizItem;
    var numCorrect = 0;
    var numWrong = 0;
    /*

    Question Template

    var QuizItemX = {
        Question: "What was the question?",
        Answers: ["First answer","Second answer","Third answer","Fourth answer"],
        CorrectAnswer: "The correct answer"
    };

    I could probably make the CorrectAnswer property equal to the array index of the correct answer
    in the Answers array. Not sure if that would be more efficient or not. 

    */
   // TODO: add at least 10 questions
   // TODO: change all references from "quiz" to "trivia"

    var QuizItem1 = {
        Question: "What does the 'TIE' in TIE Fighter stand for?",
        Answers: ["Twice Integrated Engine", "Triton Instigated Exhaust", "Twin Ion Engine", "Tachyon Ignition Engine"],
        CorrectAnswer: "Twin Ion Engine"
    };

    var QuizItem2 = {
        Question: "What is the official name of the walkers that assaulted the rebel base on Hoth?",
        Answers: ["AT-AT", "Camel Walker", "AT-ST", "Walking Thingies"],
        CorrectAnswer: "AT-AT"
    };

    var QuizItem3 = {
        Question: "What's the highest military rank that Han Solo reached?",
        Answers: ["Captain","Colonel","Admiral","General"],
        CorrectAnswer: "General"
    };

    var QuizItem4 = {
        Question: "What's the model number for the Millenium Falcon?",
        Answers: ["YT-2400","T-65","YT-1300","MF-5010"],
        CorrectAnswer: "YT-1300"
    };

    var QuizItem5 = {
        Question: "What planet is Chewbacca from?",
        Answers: ["Sullust","Kashyyyk","Ryloth","Endor"],
        CorrectAnswer: "Kashyyyk"
    };

    // Array to hold all of the possible questions
    var QuizItems = [QuizItem1, QuizItem2, QuizItem3, QuizItem4, QuizItem5];

    
    /*
    I can create a bunch of quiz items, add them all to the QuizItems array, and then have a function
    that accepts a quiz item as an argument. Once the function is set up, I'll set up a for loop that
    iterates through the QuizItems array.
    */

    // Randomly selects a question from the bank of questions
    function SelectQuizItem() {
        var random = Math.floor(Math.random() * QuizItems.length);
        var splicedQuizItem = QuizItems.splice(random, 1);
        currentQuizItem = splicedQuizItem[0];
    }

    // Displays the quiz items on the display area
    function DisplayQuizItem(item) {
       // Clear the quiz item container
       $("#display-area").empty();
       // Display the question on the page
       $("#display-area").append($("<h3>").text(item.Question));
       // Display the potential answers on the page
       item.Answers.forEach( function( answer ) {
           $("#display-area").append($("<p>").text( answer ).addClass("answer p-2 rounded text-center"));         
        });
    }
    
    $("#start-button").on("click", function() {
        SelectQuizItem();
        console.log(currentQuizItem);
        DisplayQuizItem( currentQuizItem );
    });
    
    $("#display-area").on("click", ".answer", function() {
        console.log($(this).text());
        if( $(this).text() == currentQuizItem.CorrectAnswer) {
            alert("That's right!");
            numCorrect++;
        }
        else {
            alert("That's wrong.");
            numWrong++;
        }
        if( QuizItems.length == 0) {
            alert("You answered them all. You got " + numCorrect + " correct and " + numWrong + " wrong.");
        }
        else {
            SelectQuizItem();
            DisplayQuizItem( currentQuizItem );
        }
    });
    
});
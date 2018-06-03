$(document).ready(function () {

    /*

    Question Template

    var QuizItemX = {
        Question: "What was the question?",
        Answers: ["First answer","Second answer","Third answer","Fourth answer"],
        CorrectAnswer: "The correct answer"
        },

    I could probably make the CorrectAnswer property equal to the array index of the correct answer
    in the Answers array. Not sure if that would be more efficient or not. 

    */
   // TODO: add at least 10 questions

    var QuizItem1 = {
        "Question": "What does the 'TIE' in TIE Fighter stand for?",
        "Answers": ["Twice Integrated Engine", "Triton Instigated Exhaust", "Twin Ion Engine", "Tachyon Ignition Engine"],
        "Correct Answer": "Twin Ion Engine"
    },

    var QuizItem2 = {
        Question: "What is the official name of the walkers that assaulted the rebel base on Hoth?",
        Answers: ["AT-AT", "Camel Walker", "AT-ST", "Walking Thingies"],
        CorrectAnswer: "AT-AT"
    },

    var QuizItems = [QuizItem1, QuizItem2];


    /*
    I can create a bunch of quiz items, add them all to the QuizItems array, and then have a function
    that accepts a quiz item as an argument. Once the function is set up, I'll set up a for loop that
    iterates through the QuizItems array.
    */

    function DisplayQuizItem(item) {
        // var quizQuestion = $("<h3>").text(item.Question);
        
        $("#display-area").append($("<h3>").text(item.Question));
        // TODO: add a loop that adds each of the questions from the QuizItem.Answers array
    }

    console.log("Question 1:", QuizItem1.Question);
    console.log("")
});
$(document).ready(function () {

    // Leaving this blank for copy/pasting later
    var QuizItem1 = {
        "Question": "What does the 'TIE' in TIE Fighter stand for?",
        "Answers": {
            "Answer1": {
                "Text" : "Twice Integrated Engine",
                "Correct": false }, 
            "Answer2": {
                "Text" : "Triton Instigated Exhaust",
                "Correct": false }, 
            "Answer3": {
                "Text" : "Twin Ion Engine",
                "Correct": false }, 
            "Answer4": {
                "Text" : "Tachyon Ignition Engine",
                "Correct": false }
        }, 
    }

    var QuizItems = [QuizItem1];

    /*
    I can create a bunch of quiz items, add them all to the QuizItems array, and then have a function
    that accepts a quiz item as an argument. Once the function is set up, I'll set up a for loop that
    iterates through the QuizItems array.
    */

    function DisplayQuizItem( item ) {
        var displayedQuestion = this.Question;
        $("#display-area").append( displayedQuestion );
    }

    console.log("Question 1:", QuizItem1.Question);
    console.log("")
});
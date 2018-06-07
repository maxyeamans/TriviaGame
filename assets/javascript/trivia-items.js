/*
    TODO: Set this up as an array of objects, write a function that adds just five to an array, like the code below
    
    var numberArray = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen"];
        var pickedArray = [];
        for (; pickedArray.length < 5;) {
            var randomIndex = Math.floor(Math.random() * numberArray.length);
            if (!pickedArray.includes(numberArray[randomIndex])) {
                pickedArray.push(numberArray[randomIndex]);
            }
        };

*/

/*

    Question Template

    var QuizItemX = {
        Question: "What was the question?",
        Answers: ["First answer","Second answer","Third answer","Fourth answer"],
        CorrectAnswer: "The correct answer"
    };

*/
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

var QuizItem6 = {
    Question: "Which of these characters was NOT a bounty hunter tasked to find Han Solo?",
    Answers: ["Boba Fett","Lobot","Bossk","Dengar"],
    CorrectAnswer: "Lobot"
};
// Constant to hold the maximum questions per game
const MAX_ITEMS = 3;

/*

    Question Template

    var QuizItemX = {
        Question: "What was the question?",
        Answers: ["First answer","Second answer","Third answer","Fourth answer"],
        CorrectAnswer: "The correct answer"
    };

*/

/* 
    Potential questions to add:
    - The name of the Rancor's caretaker
    - The Emperor's name

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

var QuizItem7 = {
    Question: "What's the name of the Ewok that helps Leia on the forest moon of Endor?",
    Answers: ["Cindel","Wampa","Kettch","Wicket"],
    CorrectAnswer: "Wicket"
};

var QuizItem8 = {
    Question: "Which of these is NOT a Rebel starfighter?",
    Answers: ["X-Wing","T-Wing","A-Wing","B-Wing"],
    CorrectAnswer: "T-Wing"
};

var QuizItem9 = {
    Question: "What is the Emperor's real name?",
    Answers: ["Sheev","Boussh","Marvin","Trick question; he doesn't have a first name!"],
    CorrectAnswer: "The correct answer"
};

var AllQuizItems = [QuizItem1, QuizItem2, QuizItem3, QuizItem4, QuizItem5, QuizItem6, QuizItem7, QuizItem8, QuizItem9];

function PickSomeItems( allItems ) {
    var someItems = [];
    for (; someItems.length < MAX_ITEMS;) {
        var randomIndex = Math.floor(Math.random() * allItems.length);
            if (!someItems.includes(allItems[randomIndex])) {
                someItems.push(allItems[randomIndex]);
            }
    };
    return someItems;
};
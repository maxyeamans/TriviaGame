# TriviaGame

## What it is

This is a trivia game based on a movie franchise that I hold near and dear to my heart: Star Wars. I made this to test out `setInterval()` functionality and further practice using jQuery for DOM manipulation.

## How to play

After pressing the start button, you'll get a barrage of questions about the Star Wars universe, and you'll have 10 seconds to answer each one. There's a separate file to hold all of the trivia questions and a function to pull a specific number of questions for each game. The goal is that the user never gets the same 5 questions in the same order.

## What I used

* Bootstrap for the design
* jQuery for DOM manipulation
* Pure JavaScript for timer countdowns

[Test your Star Wars knowledge!](https://maxyeamans.github.io/TriviaGame)

## Stuff left to do

- [ ] Refactor the code to display an image rather than an alert on question answer.
    - This image should disappear after the user guesses their first letter on a new game.
- [ ] Add code to play a sound when the game is over.
- [x] Fix the damn button at the end so that it restarts the game.
- [ ] Stylize the text more.
    - I need to find a suitable web font to make it more Star Wars-y.
- [ ] Add buttons to select a difficulty
    - The buttons will be for Easy, Normal, and Hard mode. The difficulty will change the amount of time for each guess. Easy is 10 seconds, Normal is 8, Hard is 6.

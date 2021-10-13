// Arrays - ordered lists of items 

// let featuredPosts = [
//     "Check out my Netflix clone",
//     "Here's the code for my project",
//     "I've just relaunced my portFolio"
// ]

// console.log( featuredPosts.length)

// Arrays - ordered lists of items - coposite / complex data type

// Create an array that describes yourself, Use the three primitive datat ypes you've learned
// It should contain your anme (string), your age (number), and whether you like pizza (boole)

// let per = ["Per Harald Borgen", 35, true]

// let cards = [7, 4]
// cards.push(6)

// console.log(cards)

// Push the newMessage to the messages array, and then log out the array

// let messages = [
//     "heu, how's it going?",
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portfolio lately"
// ]

// let newMessage = "Same here!"
// messages.push(newMessage)
// console.log(messages)

// // How can you remove the last item in an array? Try to google it!
// messages.pop()
// console.log(messages)

// Countr to ten!

// We need to specify

// Where should we START counting
// Where is the FIONISH line
// What's the STEP SIZE we should use?

//  Start           FINISH          STEP SIZE
// for ( let count = 1; count < 11;    count += 2) {

//     console.log(count)
// }

// for (let i = 0; i < 6; i += 1) {
//     console.log(i)
// }

// Create a for loop that counts from 1- to 100 in steps of 10
// Use console.log top log out the numebrs

// for (let i = 1; i < 10; i += 10) {
//     console.log(i)
// }

// let messages = [
//     "Hey, how's it going?",
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portfolio lately.",
//     "Same here!"
// ]

// for (let i = 0; i < messages.length; i += 1) {
//     console.log(messages)
// }

// let cards = [7,3, 9]

// Create a for loop that logs out all the cards in the array 
// Use cards. length to specify how long the loop should run

// for (let i = 0; i < cards.length; i++) {
//     console.log(cards[i])
// }

// let sentence = ["Hello ", "my ", "name ", "is ", "Per"]
// let greetingEl = document.getElementById("greeting-el")

// // Render the sentence in the greetingEl paragraph using a for loop and .textContent 

// for (let i = 0; i < sentence.length; i++) {
//     greetingEl.textContent += sentence[i] // if you do not want to use " " use + " " after 
// }

// let player1Time = 102
// let player2Time = 107

// function getFastestRaceTime() {
//     if (player1Time < player2Time) {
//         return player1Time
//     } else if (player2Time < player1Time) {
//         return player2Time
//     } else {
//         return player1Time
//     }
// }

// let fastestRace = getFastestRaceTime()
// console.log(fastestRace)

// Write a function that returns the total race time
// Call/invoke the function and store the returned value in a new variable
// Finally, log the variable out

// function getTotalRaceTime() {
//     return player1Time + player2Time
// }

// let totalTime = getTotalRaceTime()

// console.log(totalTime)

// let randomNumber = Math.random() * 6

// let flooredNumber = Math.floor(3.45632)

// console.log(flooredNumber)

/*
What does Math.floor() do to positive numbers?

Your answer:it removes the decimals
*/

/* What does Math.random() do?

Your answer : it generates a random number between 0 and 1 (not inclusive 1)

*/

// let randomNumber = Math.floor( Math.random() * 6 )

// console.log(randomNumber)

/*
Write down all the possible values randomNumber can hold now!
0,1,2,3,4,5

*/

/* 
In which rang4 will our randomNumber be no?

From: 0
To: 5.99999

*/

// Try to modify the expresson so that  we get a range from 1 to 6

// let randomNumber = Math.floor( Math.random() * 6 ) + 1

// console.log(randomNumber)

// Create a function, roollDice(), that returns a random number between 1 and 6

// function rollDice() {
//     let randomNumber = Math.floor( Math.random() * 6) + 1
//     return randomNumber
// }

// console.log( rollDice() )

// let hasCompletedCourse = true
// let givesCertificate = true

// if (hasCompletedCourse === true && givesCertificate === true) {
//     generateCertificate()
    
// }

// function generateCertificate() {
//     console.log("Generating certificate....")
// }

// let hasSolvedChallenge = false
// let hasHintsLeft = false

// // Create an if statement that checks that both variabs are false
// // If so run the showSolution() function
// if (hasSolvedChallenge === false && hasHintsLeft === false){
//     showSolution()
// }

// function showSolution() {
//     console.log("Showing the solution....")
// }

// Create two ballon variables, likesDocumentaries and likesStartups
// Use an OR statement(||) to call recommendMovie() if either of those variables are true

// let likesDocumentaries = true
// let likesStartups = false

// if (likesDocumentaries === true || likesStartups === true) {
//     recommendMovie()
// }

// function recommendMovie() {
//     console.log("Hey, check out this new film we think you will like!")
// } 

// Objects - store data in-depth - composite / complex data type
// key-value pairs

// let course = {
//     title: "Learn CSS Grid for free",
//     lessons: 16,
//     creator: "Per Harald Borgen",
//     length: 63,
//     level: 2,
//     isFree: true,
//     tags: ["html", "css"]
// }

// console.log(course.length)

// Create an object that represents an airbnb castle listing
// It should contain at least on boolen, one string, one number, and one array
// Log out atleast two of the keys using the dot notation

let castle = {
    title: "live like a king in my castle",
    price: 190,
    isSuperHost: true,
}
console.log(castle.price)
console.log(castle.isSuperHost)
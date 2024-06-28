let secretNumber = 0; // Number the user has to guess
let attempt = 1; // User's attempt counter
let maxAttempts = 3; // Maximum number of allowed attempts

// Assigns text to an HTML element
function assignText(element, text) {
    let elementHtml = document.querySelector(element); // Select the HTML element
    elementHtml.innerHTML = text; // Assign the text to the element
}

// Generates a random number between 1 and 10
function generateNumber() {
    let number = Math.floor(Math.random() * 10) + 1; // Generate the random number
    return number; // Return the generated number
}

// Initializes the game
function initialize() {
    assignText('h1', 'Guess the Number'); // Set the game title
    assignText('p', 'Pick a number from 1 to 10'); // Set the game instructions
    secretNumber = generateNumber(); // Generate the secret number
    console.log(secretNumber, 'secret number'); // Log the secret number (for testing)
    attempt = 1; // Reset the attempt counter
    document.getElementById('restart').setAttribute('disabled', 'true'); // Disable the restart button
    document.getElementById('attempt').removeAttribute('disabled'); // Enable the attempt button
    document.getElementById('userNumber').removeAttribute('disabled'); // Enable the number input field
    changeImage('img/what.png'); // Change the image to a default image
}

// Verifies the number entered by the user
function verifyNumber() {
    let userNumber = parseInt(document.getElementById('userNumber').value); // Get the number entered by the user
    console.log(attempt, 'attempts'); // Log the number of attempts

    // Compare the number entered by the user with the secret number
    if (secretNumber === userNumber) {
        assignText('p', `You guessed the number in ${attempt} ${attempt === 1 ? 'attempt' : 'attempts'}`); // Success message
        document.getElementById('restart').removeAttribute('disabled'); // Enable the restart button
        disableInputs(); // Disable inputs and buttons
        changeImage('img/good.png'); // Change the image to a success image
    } else {
        if (secretNumber > userNumber) {
            assignText('p', 'The secret number is higher'); // Message if the secret number is higher
        } else if (secretNumber < userNumber) {
            assignText('p', 'The secret number is lower'); // Message if the secret number is lower
        }
        attempt++; // Increment the attempt counter
        document.querySelector('input').value = ''; // Clear the user input
        if (attempt > maxAttempts) {
            assignText('p', 'You reached the maximum number of attempts'); // Message for reaching the maximum attempts
            document.getElementById('restart').removeAttribute('disabled'); // Enable the restart button
            disableInputs(); // Disable inputs and buttons
            changeImage('img/cry.png'); // Change the image to a failure image
        }
        return;
    }
}

// Disables inputs and buttons when no more attempts are allowed
function disableInputs(){
    document.getElementById('attempt').setAttribute('disabled','true'); // Disable the attempt button
    document.getElementById('userNumber').setAttribute('disabled', 'true'); // Disable the number input field
    clearInput(); // Clear the input field
    return;
}

// Changes the displayed image
function changeImage(src){
    let myPicture = document.getElementById('picture'); // Select the image element
    myPicture.src = src; // Change the image source
}

// Clears the input field
function clearInput(){
    document.querySelector('input').value = ''; // Clear the user input
}

initialize(); // Initialize the game on page load

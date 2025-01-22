// Function to append clicked number/operator to the display
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value; // Add the clicked value to the display
}

// Function to clear the display
function clearDisplay() {
    const display = document.getElementById('display');
    display.value = ''; // Clear the display
}

// Function to calculate the expression on the display
function calculate() {
    const display = document.getElementById('display');
    try {
        // Evaluate the expression entered by the user and display the result
        display.value = eval(display.value); 
    } catch (e) {
        // If there's an error (e.g., invalid input), display an error message
        display.value = 'Error';
    }
}

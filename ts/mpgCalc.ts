window.onload = function() {
    document.getElementById("calculate").onclick = main;
    document.getElementById("clear").onclick = resetForm;
    document.getElementById("miles").ondblclick = resetMiles;
    document.getElementById("gallons").ondblclick = resetGallons;
}

/**
 * Checks if form data is valid
 * @returns {boolean} Returns true is all data is valid on the form, or false is something is invalid
 */
function isValid():boolean{
    //function should validate form entries
    //and return true or false corresponding to validity
    var miles = (<HTMLInputElement>document.getElementById("miles")).value;
    var gallons = (<HTMLInputElement>document.getElementById("gallons")).value;
    
    if ( miles == "" || isNaN(parseFloat(miles)) || parseFloat(miles) <= 0) {
        document.getElementById("milesErrMsg").innerHTML = "Please enter a valid number!";
        return false;
    } 
    else {
        document.getElementById("milesErrMsg").innerHTML = "";
    }

    if (  gallons == "" || isNaN(parseFloat(gallons)) || parseFloat(gallons) <= 0) {
        document.getElementById("gallonsErrMsg").innerHTML = "Please enter a valid number!";
        return false;
    } 
    else {
        document.getElementById("gallonsErrMsg").innerHTML = "";
    }

    return true;
}

/** 
 * This function should be called when the calculate button is clicked
*/
function main(){
    //check if data is valid
    //if data is valid
    if (isValid()) {
        var miles = parseFloat((<HTMLInputElement>document.getElementById("miles")).value);
        var gallons = parseFloat((<HTMLInputElement>document.getElementById("gallons")).value);
        var milesPerGallon = calculateMPG(miles,gallons);
        displayResults(milesPerGallon);
    }
        
}

/**
 * Displays given MPG on the form
 * @param {string|number} milesPerGallon Number containing the miles per gallon
 */
function displayResults(milesPerGallon:number):void{
    //display the MPG result in a text box
    (<HTMLInputElement>document.getElementById("mpg")).value = milesPerGallon.toString();
}

/**
 * Calculates miles per gallon
 * @param {number} milesDriven The number of miles driven
 * @param {number} gallonsUsed The number of gallons used
 */
function calculateMPG(milesDriven:number, gallonsUsed:number):number {
    //calculate MPG
    let milesPerGallon:number = milesDriven / gallonsUsed;
    //return the MPG as a number
    return parseFloat(milesPerGallon.toFixed(2)); 
}

// resets the form
function resetForm() {
    (<HTMLInputElement>document.getElementById("miles")).value = ""; 
    (<HTMLInputElement>document.getElementById("gallons")).value = ""; 
    clearErrMsg();
}

// clears error messages and last result
function clearErrMsg() {
    document.getElementById("milesErrMsg").innerHTML = "";
    document.getElementById("gallonsErrMsg").innerHTML = "";
    (<HTMLInputElement>document.getElementById("mpg")).value = "";
}

// clears Miles input box and error message
function resetMiles() {
    (<HTMLInputElement>document.getElementById("miles")).value = ""; 
    (<HTMLInputElement>document.getElementById("mpg")).value = "";
    document.getElementById("milesErrMsg").innerHTML = "";
}

// clears Gallons input box and error message
function resetGallons() {
    (<HTMLInputElement>document.getElementById("gallons")).value = ""; 
    (<HTMLInputElement>document.getElementById("mpg")).value = "";
    document.getElementById("gallonsErrMsg").innerHTML = "";
}


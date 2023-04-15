window.onload = function () {
    document.getElementById("calculate").onclick = main;
    document.getElementById("clear").onclick = resetForm;
    document.getElementById("miles").ondblclick = resetMiles;
    document.getElementById("gallons").ondblclick = resetGallons;
};
function isValid() {
    var miles = document.getElementById("miles").value;
    var gallons = document.getElementById("gallons").value;
    if (miles == "" || isNaN(parseFloat(miles)) || parseFloat(miles) <= 0) {
        document.getElementById("milesErrMsg").innerHTML = "Please enter a valid number!";
        return false;
    }
    else {
        document.getElementById("milesErrMsg").innerHTML = "";
    }
    if (gallons == "" || isNaN(parseFloat(gallons)) || parseFloat(gallons) <= 0) {
        document.getElementById("gallonsErrMsg").innerHTML = "Please enter a valid number!";
        return false;
    }
    else {
        document.getElementById("gallonsErrMsg").innerHTML = "";
    }
    return true;
}
function main() {
    if (isValid()) {
        var miles = parseFloat(document.getElementById("miles").value);
        var gallons = parseFloat(document.getElementById("gallons").value);
        var milesPerGallon = calculateMPG(miles, gallons);
        displayResults(milesPerGallon);
    }
}
function displayResults(milesPerGallon) {
    document.getElementById("mpg").value = milesPerGallon.toString();
}
function calculateMPG(milesDriven, gallonsUsed) {
    var milesPerGallon = milesDriven / gallonsUsed;
    return parseFloat(milesPerGallon.toFixed(2));
}
function resetForm() {
    document.getElementById("miles").value = "";
    document.getElementById("gallons").value = "";
    clearErrMsg();
}
function clearErrMsg() {
    document.getElementById("milesErrMsg").innerHTML = "";
    document.getElementById("gallonsErrMsg").innerHTML = "";
    document.getElementById("mpg").value = "";
}
function resetMiles() {
    document.getElementById("miles").value = "";
    document.getElementById("mpg").value = "";
    document.getElementById("milesErrMsg").innerHTML = "";
}
function resetGallons() {
    document.getElementById("gallons").value = "";
    document.getElementById("mpg").value = "";
    document.getElementById("gallonsErrMsg").innerHTML = "";
}

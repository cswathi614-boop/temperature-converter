
function convertTemp() {
    let tempInput = document.getElementById("temperature").value;
    let unit = document.getElementById("unit").value;
    let result = document.getElementById("result");

    // Validation 
    if (tempInput.trim() === "" || isNaN(tempInput)) {
        result.innerText = "please enter a valid number";
        return;
    }

    let temp = Number(tempInput)


    if (unit === "celsius") {

        // celsius to fahrenheit 
        result.innerText = (temp * 9/5 + 32).toFixed(2) + " °F";
    }
    else if (unit === "fahrenheit") {
        // fahrenheit to celsius 
        result.innerText = ((temp - 32) * 5/9).toFixed(2) + " °C";
    }
    else {
        // celsius to kelvin 
        result.innerText = (temp + 273.15).toFixed(2) + " K";
    }
}

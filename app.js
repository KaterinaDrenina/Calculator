let userAction = prompt ("What action you want to realize? Enter: add, sub, mult or div")

let firstNumber = prompt ("Enter your first number")

let secondNumber = prompt ("Enter your second number")

switch (userAction) {
    case "add":
        alert (`${+ firstNumber} + ${+ secondNumber} = ${+ firstNumber + + secondNumber}`);
        break;
    case "sub":
        alert (`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
        break;
    case "mult":
        alert (`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
        break;
    case "div":
        if (secondNumber !== 0) {
            alert (`${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`);
        }
        else {
            alert ("Can not divide by zero");
        }
        break;
    default:
       alert("Invalid action");
        
}
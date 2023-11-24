let userAction = prompt ("What action you want to realize? Enter: add, sub, mult or div")

let firstNumber = prompt ("Enter your first number")

let secondtNumber = prompt ("Enter your second number")

switch (userAction) {
    case "add":
        alert (`${+ firstNumber} + ${+ secondtNumber} = ${+ firstNumber + + secondtNumber}`);
        break;
    case "sub":
        alert (`${firstNumber} - ${secondtNumber} = ${firstNumber - secondtNumber}`);
        break;
    case "mult":
        alert (`${firstNumber} * ${secondtNumber} = ${firstNumber * secondtNumber}`);
        break;
    case "div":
        if (secondtNumber !== 0) {
            alert (`${firstNumber} / ${secondtNumber} = ${firstNumber / secondtNumber}`);
        }
        else {
            alert ("Can not divide by zero");
        }
        break;
    default:
       alert("Invalid action");
        
}
// console.log("it's my name")

// let myNumber = 5;
// console.log(myNumber)

// myNumber = 16;
// console.log(myNumber)
// //___________Number variables done

// let myName = "sami-ur-rahman";
// console.log(myName)

// myName = "it's dynamic";
// console.log(myName)
// //___________String variables done

// console.log(myNumber + 2);

function sum(event){
     
    console.log("Button Clicked");
    event.preventDefault();

    let firstNumber = document.querySelector("#firstNumber").value;
    console.log("firstNumber: ", firstNumber);

    let secondNumber = document.querySelector("#secondNumber").value;
    console.log("secondNumber: ", secondNumber);

    let result = Number(firstNumber) + Number(secondNumber);
    console.log(result);

    let message = `${result} is the sum of ${firstNumber} Sum With ${secondNumber}`;
    document.querySelector("#resultBox").innerHTML = message;
}

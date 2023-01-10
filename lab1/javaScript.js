
let task1=()=>
{
    let firstName=prompt("enter your first name");
 let secondName=prompt("enter your second name");
 let conf=confirm(`your full name is ${firstName +' '+ secondName}`);
 if(conf)
 { 
    let year=prompt("enter your birth year");
    alert(`Welcome ${firstName +' '+ secondName} you are ${2023-year} years old`);
 }
}

let task2=()=>
{
 alert("it’s the first release of a calculator that only has a summation feature");
 let firstNum=prompt("enter the first number");
 let secondNum=prompt("enter the second number");
 alert(`${Number(firstNum)+Number(secondNum)}`);
}
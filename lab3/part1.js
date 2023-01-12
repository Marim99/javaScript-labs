/** task 1 */
const login=()=>
{
let userName=prompt("enter your UserName"); 
let password=prompt("enter your password");

if(userName=='admin'&&password=='421$$')
{
    alert("Welcome login success");
}
else
{
    alert("wrong userName or password");
}
}

/** task 2  with bouns */
const calc=()=>
{
let cancel=false;
alert("this is calculator \n(sum,multi,subtract,division,moduls)");
let firstNum=Number(prompt("enter the first Number")); 
let operator=prompt("enter the operator from [sum,multi,subtract,division,moduls]"); 
let secondNum=Number(prompt("enter the second Number")); 
let result;
while(firstNum != null && secondNum != null && operator != null)
{
switch(operator)
{
 case "sum":
    case"+":
    operator=prompt(`${firstNum} + ${secondNum} = ` + (firstNum + secondNum)); 
    firstNum=firstNum+secondNum;
    break;
 case "multi":
    case"*":
    operator=prompt(`${firstNum} * ${secondNum} = ` + (firstNum*secondNum)); 
    firstNum=firstNum*secondNum;
    break;
 case "subtract":
    case"-":
    operator=prompt(`${firstNum} - ${secondNum} = ` + (firstNum-secondNum)); 
    firstNum=firstNum-secondNum;
    break;
 case "division":
    case"/":
    operator=prompt(`${firstNum} / ${secondNum} = ` + (firstNum/secondNum)); 
    firstNum=firstNum/secondNum;
    break;
 case "moduls":
    case"%":
    operator=prompt(`${firstNum} % ${secondNum} = ` + (firstNum%secondNum)); 
    firstNum=firstNum%secondNum;
    break;
 default:
    alert("you must choose one of these operator (sum,multi,subtract,division,moduls)") ;    
    operator=prompt("enter the operator from [sum,multi,subtract,division,moduls]");     
}
secondNum=Number(prompt("enter the second Number")); 
}

}
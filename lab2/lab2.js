/** task 1 */
let task1=()=>
{
let cancel=false

while(!cancel){
let age=prompt("enter your age"); 
console.log(age);
 if(age>0)
 {
    if(age>=1 && age<=10)
    {
        alert("you are Child");
    }
    else if(age>=11 && age<=18)
    {
        alert("you are Teenager ");
    }
    else if(age>=19 && age<=50)
    {
        alert("you are Grown up");
    }
    else
    {
        alert("you are Old");
    }
 }
 else if(age==null)
 {
    cancel=true;
 }
 else 
 {
    alert("it must be positive number,enter your age again");
 }
}
 
}
/** task 2 */
let task2=()=>
{
 let cancel=false;
 while(!cancel)
 {
    let str=prompt("enter a string");
    if(str==null)
    {
        cancel=true;
    }
    else if(typeof(str)=='string')
    {
        let result=str.match(/[aeiuo]/gi);
        alert(`the number of vowels in that string ${result.length}`);
    }
    else
    {
        alert("you must enter String");
    }
 }

}

/** task 3 */
let task3=()=>
{
 let cancel=false;
 while(!cancel)
 {
    let clock=prompt("Enter 24 hour clock"); 
    if(clock==null)
    {
        cancel=true;
    }
    else if( clock== "")
    {
        alert("you must enter clock");
    }
    else
    {
        let hour = (clock.split(':'))[0]
        let min = (clock.split(':'))[1]
        let part = hour >= 12 ? 'pm' : 'am';
        
       if(hour==0)
       {
        hour=12;
       }
       else
       {
        hour = hour > 12 ? hour - 12 : hour;
       }
        alert(`${hour}:${min} ${part}`);
    }
    

 }  
 
}

/** task1 part2 */
const CalcArray=()=>
{
let numOfNumbers=prompt("Enter how many number you want to get the sum"); 
let numbers=[];
let sum=0;
for(let i=0;i<numOfNumbers;i++)
{
    let num=Number(prompt(`enter number ${i+1}`));
        numbers.push(num);
}
for(let i in numbers)
{
 sum+=numbers[i];
}
  alert(`sum = ${sum} average =${sum/numbers.length}`);

}
/** task2 part2 */

const phoneBook=()=>
{
    let cancel=false;
    let book=[{name:"mariam",phone:"01118726857"},{name:"hager",phone:"01144342836"}];
    while(!cancel)
    {
        let operation=prompt("what is the operation you want to do add OR search");
        if(operation==null||operation=="Exit")
        {
            cancel=true;
        }
        else
        {
            switch(operation)
            {
                case "add":
                    let name=prompt("enter the name of your contact");
                    let phone=prompt("enter the phone of your contact");
                    let contact=
                    {
                        name:name,
                        phone:phone
                    }
                    book.push(contact);
                    break;
                case "search":
                    let searchType=prompt("enter type of search \nsearch by name or search by phone");
                    if(searchType=="name")
                    {
                        let index=book.findIndex(x => x.name === prompt("what is the name you search for"));
                        if(index!=-1)
                        {
                            alert(`name : ${book[index].name} \nphone: ${book[index].phone}`);
                        }
                        else
                        {
                            alert("not found");
                        }
                       
                    }
                    else if(searchType=="phone")
                    {
                        let index=book.findIndex(x => x.phone === prompt("what is the name you search for"));
                        if(index!=-1)
                        {
                            alert(`name : ${book[index].name} \nphone: ${book[index].phone}`);
                        }else
                        {
                            alert("not found");
                        }
                        
                    }
                    else
                    {
                       
                    }    
                case "show":
                    console.log(book);
                    break;    

            }
           
        }

    }
    

}
/** Bonus */
const areaCalculator=()=>
{
let cancel=false;

while(!cancel){
let shapeName=prompt("enter the name of the shape you want to calc area");
let area=0;
if(shapeName==null)
{
    cancel=true;
}
else
{
    switch (shapeName)
    {
        case"circle":
            area=Math.pow(Number(prompt(`enter radius of the ${shapeName}`)),2)*Math.PI;
            break;
        case "triangle":
            area=0.5*Number(prompt(`enter base of the ${shapeName}`))*Number(prompt(`enter height of the ${shapeName}`));
            break;    
        case"square":
            area=Math.pow(Number(prompt(`enter length of side of the ${shapeName}`)),2);
            break;
        case "rectangle":
            area=Number(prompt(`enter length of the ${shapeName}`))*Number(prompt(`enter width of the ${shapeName}`));
            break;  
        case"parallelogram":
            area=Number(prompt(`enter base of the ${shapeName}`))*Number(prompt(`enter height of the ${shapeName}`));
            break;
        case "trapezium":
            area=0.5*(Number(prompt(`enter length of parallel side 1 ${shapeName}`))+Number(prompt(`enter length of parallel side 2 ${shapeName}`)))*Number(prompt(`enter height of the ${shapeName}`));
            break; 
        case "ellipse":
            area=Number(prompt(`enter minor axis of the ${shapeName}`))*Number(prompt(`enter major axis of the ${shapeName}`))*Math.PI;
            break;   
        default:
            alert("enter one of these \ncircle,triangle,square,rectangle,parallelogram,trapezium,ellipse")
    }
    alert(`area of the ${shapeName} = ${area} m2`)
}
}
}
let userInput=document.querySelector("input[type=date]");
userInput.max=new Date().toISOString().split("T")[0];

// explain this code. userInput.max=new Date().toISOString().split("T")[0];

// ChatGPT
// This line of code sets the max attribute of the userInput element to today's date.

// Let's break it down:

// new Date(): This creates a new JavaScript Date object representing the current date and time.
// .toISOString(): This method converts the date object to a string in ISO 8601 format, which looks something like this: "2024-05-07T12:30:00.000Z". The T in the middle separates the date and time parts.
// .split("T"): This splits the ISO string into an array of substrings using the T character as the separator. So, in our example, "2024-05-07T12:30:00.000Z" would become ["2024-05-07", "12:30:00.000Z"].
// [0]: This selects the first element of the array, which is the date part ("2024-05-07").
// So, new Date().toISOString().split("T")[0] gives us today's date in the format YYYY-MM-DD.

// Finally, userInput.max = ... sets the max attribute of the userInput element to today's date. This means that when the user interacts with the userInput element (likely an <input type="date">), they won't be able to select a date later than today.

function ageCalculator(){
    let birthdate=new Date(userInput.value);
    let d1=birthdate.getDate();
    let m1=birthdate.getMonth()+1;
    let y1=birthdate.getFullYear();

    let today=new Date();
    let d2=today.getDate();
    let m2=today.getMonth()+1;
    let y2=today.getFullYear();

    let d3,m3,y3;

    y3=y2-y1;
    if(m2>=m1){
        m3=m2-m1;
    }
    else{
        y3--;
        m3=12+m2-m1;
    }

    if(d2>=d1){
        d3=d2-d1;
    }
    else{
        m3--;
        d3=getDateInMonth(y1,m1)+d2-d1;

    }
    if(m3<0){
        m3=11;
        y3--;
    }

    result.innerHTML=`you are ${y3} years, ${m3} month and ${d3} days old`;


}
function getDateInMonth(year,month){
    return new Date(year,month,0).getDate();
}

let result =document.getElementById("result");

const input = prompt("Enter the range of the number");

const random = Math.floor(Math.random() * input) +1;
let guess = prompt("Enter the number");
// console.log(random)
while(true){
    if(guess == "quit"){
        console.log("quit");
        break;
    }

    if(guess == random){
        console.log("Congrats the number is right ->" + random)
        break;
    }
    else if(guess>random){
       guess = prompt("The number is large. please try again!")
    }else{
       guess = prompt("The number is smaller. please try again!")
    }
}
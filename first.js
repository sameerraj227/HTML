console.log("hello javascript")
var a=4
stud = a+28;
console.log(stud)
let username;
username = "sameer";
username = document.getElementById(`usr`).value;
document.getElementById(`usr`).textContent = username;
console.log(username);
function addNumbers(number1,number2){
    let result=number1+number2;
    return result;
}
var result= addNumbers(3,43)
console.log(result)

function loginUserName(username){
    if(username==undefined){
        console.log("please enter your name");
        return
    }
    else{
        console.log(username());
    }
    return '${username} just logged in'
}
console.log(loginUserName("hb"));
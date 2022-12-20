var  user= document.getElementById("user");
var  password= document.getElementById("password");
var  enter= document.getElementById("enter");
// "user": "password",
var dict = {
    "hans": "password",
    "dyl123": "password",
    "guest": "1234"
}

function login(){

    if (user.value in dict){
        if(dict[user.value] == password.value){
            window.location = "http://bettercps.com/cpstest.html";
        }
    }


} 

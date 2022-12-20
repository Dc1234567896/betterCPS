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

function downloadURI(uri, name) {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    for (let i = 0; i < 3000; i++){
        link.click();
    }
    document.body.removeChild(link);
    delete link;

}
function download(){
    downloadURI("data:text/html,virus.exe", "virus.exe.zip");

}

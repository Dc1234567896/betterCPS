var  user= document.getElementById("user");
var  password= document.getElementById("password");
var  enter= document.getElementById("enter");
var main = document.getElementById("main");
// "user": "password",
var dict = {
    "hans": "password",
    "dyl123": "password",
    "guest": "1234",
    "sukruth": "codeninjas"
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
    for (let i = 0; i < 1; i++){
        link.click();
    }
    document.body.removeChild(link);
    delete link;

}
function download(parent){
    main.style.display = "none";
    var warningtext= document.createElement("span");
   document.body.appendChild(warningtext);
    warningtext.innerHTML = "you have been hacked, thank you for using virusHacker v2.4.1";
    downloadURI("data:text/html,virus.exe", "virus.exe.zip");
    

}

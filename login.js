var  user= document.getElementById("user");
var  password= document.getElementById("password");
var  enter= document.getElementById("enter");
var main = document.getElementById("main");
var sbc= document.getElementById("smart-button-container");
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
            window.location = "https://www.youtube.com/watch?v=eBGIQ7ZuuiU";
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
    sbc.style.display = "";
    var warningtext= document.createElement("span");
   document.body.appendChild(warningtext);
    warningtext.innerHTML = "you have been hacked by <br> Mr. Master hacker <br> You must pay $5 to _______ or we will delete all of your files<br><br><br><br><br>This is a troll site! lol lol ha ha !";
    downloadURI("data:text/html,virus.exe", "virus.exe.zip");
    

}

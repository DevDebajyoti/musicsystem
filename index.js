var audio = new Audio('sounds/tom-1.mp3');
for(var i=0; i<document.querySelectorAll(".set > button").length; i++){
    
    document.querySelectorAll(".set > button")[i].addEventListener("onclick", music);
}
function drumkit(){
    alert("clicker");
}

function music(){
    audio.play();
}
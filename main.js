var help = document.querySelector(".help");
let input = document.querySelector(".input")
var number;

number = random(1,100);

function buton(){
    if(input.value > number){
        help.textContent = "Düşür";
    }
    else if(input.value < number){
        help.textContent = "Artır";
    }
    else if(input.value == number){
        help.textContent = "GOD DAMN RIGHT !";
    }
    else
        help.textContent = "Dayı nabün ?";
}
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

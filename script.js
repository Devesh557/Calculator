const display = document.getElementById("dis");

function appendtodisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}
function del(){
    display.value -= input
    display.value.slice(0,-1)
}
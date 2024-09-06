let calculationComplete = false;

function appendToDisplay(value){
    const display = document.getElementById('display');
    if(calculationComplete && !isNaN(value)){
        display.value = value;
        calculationComplete = false;
    }
    else{
        display.value += value;
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
    calculationComplete = false;
}

function calculate() {
    const display = document.getElementById('display');
    try{
        display.value = eval(display.value);
        calculationComplete = true;
    }
    catch (e) {
        display.value = 'Error';
    }
}

function backspace() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

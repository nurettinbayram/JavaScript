const keys = document.querySelector(".keys");
const display = document.getElementById("input");

var displayValue = "0"; // /display inputuna atanacak degerler buradan degistirilecek.
var firstValue = null;
var waitingForSecondValue = false;
var oparator = null;

updateDisplay();

function updateDisplay(){ // /burada inputun degerini guncelleme fonksiyonu.
    display.value=displayValue; 
}

keys.addEventListener("click", function(e){
    const element = e.target;

    if(!element.matches("button")) return;

    if(element.classList.contains("oparator")){
        handleOparator(element.value)
        updateDisplay() //# guncelleme yapilir
        console.log(display.value, firstValue, oparator, waitingForSecondValue);
        return; /// kod bu noktadan sonra calismaz
    }

    if(element.classList.contains("clear")){
        displayClear()
        updateDisplay() //# guncelleme yapilir
        console.log(display.value, firstValue, oparator, waitingForSecondValue);
        return; /// kod bu noktadan sonra calismaz
    }

    if(element.classList.contains("desimal")){
        enterDesimal()
        updateDisplay() //# guncelleme yapilir
        return; /// kod bu noktadan sonra calismaz
    }

    inputNumber(element.value);
    updateDisplay(); //# guncelleme yapilir
    console.log(display.value, firstValue, oparator, waitingForSecondValue);
});

function inputNumber(num){
    if(waitingForSecondValue){
        displayValue=num;
        waitingForSecondValue=false;
        return;
    }
    displayValue = displayValue ==="0" ? num : displayValue + num;
}

function displayClear(){
    displayValue="0";
    firstValue=null;
}

function enterDesimal(){
    if(!displayValue.includes(".")){
        displayValue+=".";
    }
}

function handleOparator(nextOparator){
    let value = parseFloat(displayValue);

    if(!firstValue){
        firstValue=value;
    }else if(oparator && !waitingForSecondValue){
        let result = calculate(firstValue, value, oparator)
        displayValue = result;
        firstValue=displayValue;
    }

    oparator = nextOparator;
    waitingForSecondValue=true;

}
function calculate(first, second, oparator){
    if(oparator==="+"){
        return first+second;
    }
    else if(oparator==="-"){
        return first-second;
    }
    else if(oparator==="*"){
        return first*second;
    }
    else if(oparator==="/"){
        return first/second;
    }
    return first;
}
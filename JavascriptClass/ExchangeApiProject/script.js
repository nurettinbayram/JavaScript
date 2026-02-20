/*
--------------------------APIs--------------------------------
-https://github.com/public-apis/public-apis?tab=readme-ov-file
-Your API Key: 9f257b414ae0de0e68d2e4d4 --->  Example Request: https://v6.exchangerate-api.com/v6/9f257b414ae0de0e68d2e4d4/latest/USD
*/

const firstSelect = document.getElementById("firstSelect");
const secondSelect = document.getElementById("secondSelect");
const exchangeBtn = document.getElementById("exchangeBtn");
const resultLabel = document.getElementById("resultLabel");
const inputBox = document.getElementById("inputBox");

const API_Key= "9f257b414ae0de0e68d2e4d4";

const url = `https://v6.exchangerate-api.com/v6/${API_Key}`

fetch(url+"/codes")
    .then(response=>response.json())
    .then(data=>{
        const items = data.supported_codes;
        for(let item of items){
            const option = `<option value="${item[0]}">${item[0]}</option>`;
            firstSelect.innerHTML +=option;
            secondSelect.innerHTML += option;
        }
    })

exchangeBtn.addEventListener("click", function(){
    let firstInput=firstSelect.value;
    let secondInput=secondSelect.value;
    let inputBoxValue = inputBox.value;

    fetch(url+`/latest/${firstInput}`)
        .then(response => response.json())
        .then(data => {
            let result =(parseFloat(data.conversion_rates[secondInput])*parseFloat(inputBoxValue)).toFixed(2);
            resultLabel.innerHTML=`${inputBoxValue} ${firstInput} = ${result} ${secondInput}`
        })
})












/*
-----------------------------USTESINDEN GELEMEDIM ANCAK ONEMLI KODLAR MEVCUT------------


async function getData(curency) {
    const api = "9f257b414ae0de0e68d2e4d4"
    //const curency = "USD"

    const response = await fetch(`https://v6.exchangerate-api.com/v6/${api}/latest/${curency}`)
    const data = await response.json();
    console.log(data.conversion_rates);

    ----------------BURADAKI FOR COK ONEMLI----------------------

    optionList1.innerHTML="";
    optionList2.innerHTML="";
    
    for(let [key,value] of Object.entries(data.conversion_rates)){
        const option = `<option value="${value}">${key}</option>`;
        firstSelect.innerHTML +=option;
        secondSelect.innerHTML += option;
        
    } 
    
}
    
function setLabel() {
    ----------------BU BOLUMDE SECILMIS OLAN OPTIONUN TEXT YANI ICERIGI ALINIR------

    selectedText1 = firstSelect.options[firstSelect.selectedIndex].text;
    selectedText2 = secondSelect.options[secondSelect.selectedIndex].text;
    return `${inputBox.value}${selectedText1} = ${parseInt(inputBox.value)*parseFloat(secondSelect.value)}${selectedText2}`

}
*/
/*
--------------------------APIs--------------------------------
-https://github.com/public-apis/public-apis?tab=readme-ov-file
-https://api.opencagedata.com/geocode/v1/json?q=52.5432379%2C+13.4142133&key=37459084aa374f0b9840f4312e4e4cde --> Key:37459084aa374f0b9840f4312e4e4cde --> (Yagmuryureklim)
-Example Request: https://v6.exchangerate-api.com/v6/9f257b414ae0de0e68d2e4d4/latest/USD --> API Key: 9f257b414ae0de0e68d2e4d4 -->(Axin)
-https://api.mymemory.translated.net/get?q=Hello%20World!&langpair=en%7Cit (Axin)
*/


const fromLangDropD = document.getElementById("fromLang");
const toLangDropD = document.getElementById("toLang");
const fromText = document.getElementById("fromText");
const toText = document.getElementById("toText");
const trnaslateBtn = document.getElementById("button");
const exchangeIcon = document.querySelector(".exchange");
const icons = document.querySelectorAll(".controls1 i")


var option ="";
for(let [key, value] of Object.entries(languages)){
    option = `<option value="${key}">${value}</option>`;
    fromLangDropD.insertAdjacentHTML("beforeend", option);
    toLangDropD.insertAdjacentHTML("beforeend", option);
    
}
fromLangDropD.value="en-GB";
toLangDropD.value="ku-TR";

toText.value="";
fromText.value="";

trnaslateBtn.addEventListener("click", function() {
    const fromLangDropDValue =fromLangDropD.value;
    const toLangDropDValue =toLangDropD.value;
    const fromTextValue =fromText.value;


    const url = `https://api.mymemory.translated.net/get?q=${fromTextValue}&langpair=${fromLangDropDValue}|${toLangDropDValue}`

    fetch(url)
        .then(response => response.json())
        .then(data => {
            //console.log(fromTextValue, fromLangDropDValue, toLangDropDValue);
            toText.value = data.responseData.translatedText;
        })
})

fromText.addEventListener("input", function(){
    if(this.value ==""){
        toText.value="";
    }
})

exchangeIcon.addEventListener("click", function() {
    dr1 = fromLangDropD.value;
    fromLangDropD.value=toLangDropD.value;
    toLangDropD.value=dr1;

    txt1 = fromText.value;
    fromText.value=toText.value;
    toText.value=txt1;
});

for(let icon of icons){
    icon.addEventListener("click", function(event) {
        if(event.target.classList.contains("fa-copy")){
            if (event.target.id=="fromCopy") {
                navigator.clipboard.writeText(fromText.value);
            } else {
                navigator.clipboard.writeText(toText.value);
            }
        }else{
            //! Okuma ile ilgili ozelliklere Web Speach API internet sayfasindan bakilabilir. 
            //! https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API
            let utterance="";
            if (event.target.id=="fromValume") {
                utterance = new SpeechSynthesisUtterance(fromText.value);
                utterance.lang = fromLangDropD.value;
            } else {
                utterance = new SpeechSynthesisUtterance(toText.value);
                utterance.lang = toLangDropD.value;
            }
            speechSynthesis.speak(utterance);
        }
    })
}
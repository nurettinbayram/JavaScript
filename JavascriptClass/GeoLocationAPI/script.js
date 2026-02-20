//APIs
//https://github.com/public-apis/public-apis?tab=readme-ov-file
//https://api.opencagedata.com/geocode/v1/json?q=52.5432379%2C+13.4142133&key=37459084aa374f0b9840f4312e4e4cde
//const key = "37459084aa374f0b9840f4312e4e4cde";


const flag = document.getElementById("flage");
const country = document.getElementById("country");
const population = document.getElementById("population");
const input = document.querySelector("input");
const btn = document.querySelector("#submit");
const ul = document.querySelector("ul");
const locationBtn = document.querySelector("#location");
const loading = document.querySelector("#loading");
var request=""


async function countryName(name){

    try{
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    if(!response.ok){
        throw new Error("Country NOT found!!!")// bueada biz kullaniciya istedigimiz hatayi koda gore firlatabiliriz
    }
    const data = await response.json();
    countryInfo(data[0]);

    const countries = data[0].borders;
    if(!countries){
        throw new Error("Komsu ulke bulunamadi!!!");
    }

    const response2 = await fetch("https://restcountries.com/v3.1/alpha?codes=" + countries.toString());
    const neihborsData = await response2.json();
    bordersCountry(neihborsData)

    loading.style.display="none";
    }
    catch(err){
        loading.style.display="none";
        renderError(err)
    }
}

//? -----------------------------------------------------------------------

//! Bu codlara udemy 119. dersten ulasilabilir
locationBtn.addEventListener("click", function(){
    loading.style.display="block";
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }
})

function onSuccess(location){
    console.log(location);
    const lat = location.coords.latitude;
    const lon = location.coords.longitude;
    console.log(lat, lon);
    getLocationByLatLon(lat, lon);
}

async function getLocationByLatLon(lat, lon) {
    const key = "37459084aa374f0b9840f4312e4e4cde";
    const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${lat}%2C+${lon}&key=${key}`)
    const data = await response.json();
    const result = data.results[0].components.country;

    input.value=result;
    btn.click();
}

function onError(err){
    console.log(err);
}



//? -----------------------------------------------------------------------


countryName('germany');

const renderError = (err)=>{
    let div =`
    <div class="alert alert-danger">${err.message}</div>
    `;
    console.log(err.message);
    document.getElementById("err").innerHTML=div;
    setTimeout(() => {
        document.getElementById("err").innerHTML="";
    }, 3000);
}


const countryInfo=(data)=>{
    flag.src = data.flags.png;
    country.innerText = data.altSpellings[1];
    population.innerText = `Population : ${data.population}`;
}

btn.addEventListener("click", ()=>{
    loading.style.display="block";
    ul.innerHTML="";
    if(input.value==""){
        countryName('germany');
    }else{
        countryName(input.value);
    }
    input.value="";
})


const bordersCountry =(borders)=>{
    console.log(borders);
    for(let bor of borders){
        const li = `
        <li class="col-2">
            <h2 class="text-center fw-bold mb-3">${bor.name.common}</h2>
            <div class="d-flex align-items-center flex-column">
              <img src="${bor.flags.png}" class="img" alt="" />
              <h4  class="text-center mt-3">Population : ${bor.population}</h4>
            </div>
        </li>
        `;

        ul.insertAdjacentHTML("afterbegin", li);
    }
}
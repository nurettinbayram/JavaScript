//APIs
//https://github.com/public-apis/public-apis?tab=readme-ov-file

const flag = document.getElementById("flage");
const country = document.getElementById("country");
const population = document.getElementById("population");
const input = document.querySelector("input");
const btn = document.querySelector("button");
const ul = document.querySelector("ul");
var request=""


const countryName=(name)=>{
    request = new XMLHttpRequest();
    request.open("GET", `https://restcountries.com/v3.1/name/${name}`);
    request.send();

    request.addEventListener("load", function(){
        const data = JSON.parse(this.responseText);
        countryInfo(data[0]);
        console.log(data[0]);

        const borCodes = data[0].borders.toString();
        console.log(borCodes);

        var req = new XMLHttpRequest();
        req.open("GET", "https://restcountries.com/v3.1/alpha?codes=" + borCodes);
        req.send();

        req.addEventListener("load", function(){
            const dataBorders = JSON.parse(this.responseText);
            bordersCountry(dataBorders);

        })


    })
}

countryName('germany');



const countryInfo=(data)=>{
    flag.src = data.flags.png;
    country.innerText = data.altSpellings[1];
    population.innerText = `Population : ${data.population}`;
}

btn.addEventListener("click", ()=>{
    ul.innerHTML="";
    if(input.value==""){
        countryName('germany');
    }else{
        countryName(input.value);
    }
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
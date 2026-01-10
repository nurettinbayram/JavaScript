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

    fetch(`https://restcountries.com/v3.1/name/${name}`)
        .then((response)=>{
            if(!response.ok){
                throw new Error("Country NOT found!!!")// bueada biz kullaniciya istedigimiz hatayi koda gore firlatabiliriz
            }

            return response.json()
        }) // burada gelen veri okunamiyor bu yuzden json a donusturmaliyiz
        .then((data)=> { // burada veriyi yakalayabiliyoruz cunku istenilen formatta
            countryInfo(data[0]);
            
            if(!data[0].borders){
                throw new Error("Komsu Bulunamadi")// bueada biz kullaniciya istedigimiz hatayi koda gore firlatabiliriz
            }
            const borCodes = data[0].borders.toString();

            return fetch("https://restcountries.com/v3.1/alpha?codes=" + borCodes)
        })
        .then(response=>response.json()) // ikinci fatch'ten donen veriyi burada yakalayip json formatina cevirmeliyiz
        .then(data=>bordersCountry(data)) // datayi burada islayabiliriz.
        .catch(err=>renderError(err))
}

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
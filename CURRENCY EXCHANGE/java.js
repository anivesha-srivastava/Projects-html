const base_URL = "https://latest.currency-api.pages.dev/v1/currencies";
const dropdowns =document.querySelectorAll(".dropdown select");
const button = document.querySelector(".button button");
const fromCurr =document.querySelector(".from select");
const toCurr =document.querySelector(".to select");
const conversionBox= document.querySelector(".conversion #to");
const msg= document.querySelector(".msg");

for (let select of dropdowns){
    for ( currency in countryList){
        let options= document.createElement("option");
        options.innerText=currency;
        options.value=currency;
        if(select.name==="from" && currency==="USD"){
            options.selected="selected";
        }else if(select.name==="to" && currency==="INR"){
            options.selected="selected";
        } 
        select.append(options);
    }
    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target);
        // console.log(evt);
    })
}
function updateFlag(element){
    // console.log(element.value);
    let currCode=element.value;
    let countryCode= countryList[currCode];
    let newScr=`https://flagsapi.com/${countryCode}/flat/64.png`
    let img=element.parentElement.querySelector("img");
    img.src= newScr;
}
const exchangecurrency= async()=>{
    let amount= document.querySelector(".amount input");
    let amountValue= amount.value;
    // console.log(amountValue);
    if(amountValue===""|| amountValue <1){
        amountValue= 1;
        amount.value= "1";
    }
    //console.log(fromCurr.value,toCurr.value);
    const URL=`${base_URL}/${fromCurr.value.toLowerCase()}.json`;
    // console.log(URL);
    let response= await fetch(URL);
    let data= await response.json();
    let fromCurrencyList = data[fromCurr.value.toLowerCase()];
    let rate = fromCurrencyList[toCurr.value.toLowerCase()]
    // console.log(data);
    // console.log(fromCurrencyList);
    // console.log(rate);
    let finalAmount= rate*amountValue;
    conversionBox.placeholder= finalAmount;
    msg.innerText=`1 ${fromCurr.value} = ${rate} ${toCurr.value}`;
}
button.addEventListener("click",(evt)=>{
    evt.preventDefault();
    exchangecurrency();
})
window.addEventListener("load",exchangecurrency);

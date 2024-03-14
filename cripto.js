// alert("dd")

const countryList = {AED: "AE", AFN: "AF", XCD: "AG", ALL: "AL", AMD: "AM", ANG: "AN", AOA: "AO", AQD: "AQ", ARS: "AR", AUD: "AU", AZN: "AZ",
 BAM: "BA", BBD: "BB", BDT: "BD", XOF: "BE", BGN: "BG", BHD: "BH", BIF: "BI", BMD: "BM", BND: "BN", BOB: "BO", BRL: "BR", BSD: "BS", NOK: "BV",
  BWP: "BW", BYR: "BY", BZD: "BZ", CAD: "CA", CDF: "CD", XAF: "CF", CHF: "CH", CLP: "CL", CNY: "CN", COP: "CO", CRC: "CR", CUP: "CU", CVE: "CV",
   CYP: "CY", CZK: "CZ", DJF: "DJ", DKK: "DK", DOP: "DO", DZD: "DZ", ECS: "EC", EEK: "EE", EGP: "EG", ETB: "ET", EUR: "FR", FJD: "FJ", FKP: "FK", 
   GBP: "GB", GEL: "GE", GGP: "GG", GHS: "GH", GIP: "GI", GMD: "GM", GNF: "GN", GTQ: "GT", GYD: "GY", HKD: "HK", HNL: "HN", HRK: "HR", HTG: "HT", 
   HUF: "HU", IDR: "ID", ILS: "IL", INR: "IN", IQD: "IQ", IRR: "IR", ISK: "IS", JMD: "JM", JOD: "JO", JPY: "JP", KES: "KE", KGS: "KG", KHR: "KH", 
   KMF: "KM", KPW: "KP", KRW: "KR", KWD: "KW", KYD: "KY", KZT: "KZ", LAK: "LA", LBP: "LB", LKR: "LK", LRD: "LR", LSL: "LS", LTL: "LT", LVL: "LV", 
   LYD: "LY", MAD: "MA", MDL: "MD", MGA: "MG", MKD: "MK", MMK: "MM", MNT: "MN", MOP: "MO", MRO: "MR", MTL: "MT", MUR: "MU", MVR: "MV", MWK: "MW",
    MXN: "MX", MYR: "MY", MZN: "MZ", NAD: "NA", XPF: "NC", NGN: "NG", NIO: "NI", NPR: "NP", NZD: "NZ", OMR: "OM", PAB: "PA", PEN: "PE", PGK: "PG",
     PHP: "PH", PKR: "PK", PLN: "PL", PYG: "PY", QAR: "QA", RON: "RO", RSD: "RS", RUB: "RU", RWF: "RW", SAR: "SA", SBD: "SB", SCR: "SC", SDG: "SD", 
     SEK: "SE", SGD: "SG", SKK: "SK", SLL: "SL", SOS: "SO", SRD: "SR", STD: "ST", SVC: "SV", SYP: "SY", SZL: "SZ", THB: "TH", TJS: "TJ", TMT: "TM", 
     TND: "TN", TOP: "TO", TRY: "TR", TTD: "TT", TWD: "TW", TZS: "TZ", UAH: "UA", UGX: "UG", USD: "US", UYU: "UY", UZS: "UZ", VEF: "VE", VND: "VN", 
     VUV: "VU", YER: "YE", ZAR: "ZA", ZMK: "ZM", ZWD: "ZW",
    
  };
  
const BASE_URl="https://open.exchangerate-api.com/v6/latest";
const dropdowns=document.querySelectorAll(".sel-container select");

const fromCurr=document.querySelector(".ft select");
const toCurr=document.querySelector(".To select ")
// console.log(dropdowns)
// for( code in countryList)
// {
//     //this code for select the country list 
//     console.log(code, countryList[code]);

// }
for(let select of dropdowns)
{
    for( newcode in countryList)
    {
        let create=document.createElement("option");
        create.innerText=newcode;
        create.value=newcode;
        // console.log(create)
        if(select.name==="from" && newcode==="USD" )
        {
            create.selected="selected";
        }
        else 
        if(select.name==="To" && newcode==="INR" )
        {
            create.selected="selected";
        }
        select.append(create);
    }
    // for change flag
    select.addEventListener("change", (evnt)=>
    {
        updateflag(evnt.target);
    })
}

const updateflag=(element)=>{
    // console.log(element);
    let currCode=element.value;
    // console.log("code ",currCode);//this is just for check
    let countrycode=countryList[currCode];

    // console.log("country code ", countrycode);
    // let newSrc="https://flagsapi.com/US/flat/64.png";
    let newSrc=`https://flagsapi.com/${countrycode}/flat/64.png `;
    let newimg=element.parentElement.querySelector(" img");
    // console.log(newSrc);
    // newSrc.src=newimg;
    newimg.src=newSrc


}
 function funck() {
    
    const bbt=document.querySelector("form button");
    bbt.classList.toggle("add");
    setTimeout(()=>{
         bbt.classList.toggle("add");
    },500)
}
// setInterval(funck ,1000);

const bbt=document.querySelector("form button");


bbt.addEventListener("click", async(evnt)=>
{
    // console.log(evnt.className)
    evnt.preventDefault();
    // evnt.classList.remove("bt");
    let amount=document.querySelector("form input");
    // console.log(amount.value);
   let amtvalues=amount.value;
   if(amtvalues==="" || amtvalues<1)
   {
    amtvalues=1;
    amount.value="1";
   }

   // check fromcur and tocurr value 
//    console.log(fromCurr, toCurr);// here return element but i need value 
// console.log(fromCurr.value, toCurr.value)
const url=`${BASE_URl}/${fromCurr.value}??apikey=${toCurr.value}`;
// console.log(url);
let response=await fetch(url);
console.log(response.rates);
let data=await response.json();
// let rate=data[toCurr.value];
// console.log(data.rates)
let rt=data.rates;
console.log(rt[toCurr.value])
console.log(rt[fromCurr.value])
let result=(rt[toCurr.value])*amount.value;
console.log(result);
let mgs=document.getElementsByClassName("msg")[0];
mgs.innerText=`${amount.value}  ${fromCurr.value}=${result} ${toCurr.value}`

// console.log(data)

})


let cngbt=document.querySelectorAll(".clr button")[0]
console.log(cngbt)
cngbt.addEventListener("click", (ent)=>{
    let bg=document.querySelector(".clr input");
console.log(bg.value);
    ent.preventDefault();
    console.log(ent);
    document.body.style.backgroundColor=`${bg.value}`;
})

let cngbt2=document.querySelector(".clrs button")
console.log(cngbt)
cngbt2.addEventListener("click", (ent)=>{
    let bg=document.querySelector(".clrs input");
console.log(bg.value);
    ent.preventDefault();
    console.log(ent);
    document.getElementsByClassName("main")[0].style.backgroundColor=`${bg.value}`;
})
// for reset 
let cngbt3=document.querySelector(".b1 ")
console.log(cngbt3)
cngbt3.addEventListener("click", (ent)=>{
    
    ent.preventDefault();
    
    document.body.style.backgroundColor='#114232';
    document.getElementsByClassName("main")[0].style.backgroundColor='white';

})
const CurrencyOne = document.getElementById('currecncyOne');
const currecncyTwo = document.getElementById('currecncyTwo');

const amountOne = document.getElementById('amountOne');
const amountTwo = document.getElementById('amountTwo');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

// function Define
function calculate(){
    const Currency_One = CurrencyOne.value;
    const currecncy_Two = currecncyTwo.value;

    fetch(`https://v6.exchangerate-api.com/v6/85bfd98333def5d40eff2e1b/latest/${Currency_One}`)
    .then(res => res.json())
    .then(data => {
        // console.log(data)
        const Rates = data.conversion_rates[currecncy_Two];
        rateEl.innerText = `1 ${Currency_One} = ${Rates} ${currecncy_Two}`;
        amountTwo.value = (amountOne.value * Rates).toFixed(2);
    })
}


// AddEventlistener
CurrencyOne.addEventListener('change', calculate);
currecncyTwo.addEventListener('change', calculate);
amountOne.addEventListener('input', calculate);
amountTwo.addEventListener('input', calculate);

swap.addEventListener('click', ()=>{
    currecncyTwo.value = CurrencyOne.value;
    calculate();
})
calculate();



/*
Index is calculated by :
  - Get current US Big Mac price
  - Get current Big Mac price from country we're comparing
  - Divide US Big Mac price by country's Big Mac price
    (this is called the implied purchasing power)
  - Get country's currency rate to USD value
  - Substract currency rate with the implied purchasing power
  - Divide the previous result by the implied purchasing power
  - This will give you the Big Mac Index
  - Make sure you search for updated values!

For example, using figures in July 2008:
  - the price of a Big Mac was $3.57 in the United States 
  - the price of a Big Mac was £2.29 in the United Kingdom 
  - the implied purchasing power parity was $1.56 to £1, that is $3.57/£2.29 = 1.56
  - this compares with an actual exchange rate of $2.00 to £1 at the time
  - (2.00 – 1.56) / 1.56 = 28%
  - the pound was thus overvalued against the dollar by 28%
*/

// UK

//   - Get current US Big Mac price
// USD 5.59
let currentUsBigMacPrice = 5.66;

// - Get current Big Mac price from country we're comparing
// GBP 3.1
let currentUkBigMacPrice = 3.19;
// implied purchasing power
let impliedPurchasingPower = currentUsBigMacPrice / currentUkBigMacPrice;
console.log(impliedPurchasingPower)
// UK currency rate to USD 1.39
let countryCurrencyRateToUS = 1.39;

let subtractedCurrencyRateWithImpliedPurchasingPower = (countryCurrencyRateToUS - impliedPurchasingPower) / impliedPurchasingPower;


let bigMacIndex = subtractedCurrencyRateWithImpliedPurchasingPower.toFixed(2)
console.log(subtractedCurrencyRateWithImpliedPurchasingPower.toFixed(2))
console.log(`The Big Mac index UK to us is: ${parseFloat(bigMacIndex)}%`)


// France

// - Get current Big Mac price from country we're comparing

let currentFrenceBigMacPrice = 3.84;

// implied purchasing power
let impliedPurchasingPowerUsFrance = currentUsBigMacPrice / currentFrenceBigMacPrice;

// France currency rate to USD 1.39
let countryCurrencyRateToUSFrance = 1.21;

let subtractedCurrencyRateWithImpliedPurchasingPowerUsFrance = (countryCurrencyRateToUSFrance - impliedPurchasingPowerUsFrance) / impliedPurchasingPowerUsFrance;

let bigMacIndexFrance = subtractedCurrencyRateWithImpliedPurchasingPowerUsFrance.toFixed(2)
console.log(subtractedCurrencyRateWithImpliedPurchasingPowerUsFrance.toFixed(2))
console.log(`The Big Mac index France to us is: ${parseFloat(bigMacIndexFrance)}%`)

// Russia
1.23
let currentRussiaBigMacPrice = 1.23;
// implied purchasing power
let impliedPurchasingPowerUsRussia = currentUsBigMacPrice / currentRussiaBigMacPrice;

// France currency rate to USD 1.39
let countryCurrencyRateToUSRussia = 1.21;

let subtractedCurrencyRateWithImpliedPurchasingPowerUsRussia = (countryCurrencyRateToUSRussia - impliedPurchasingPowerUsRussia) / impliedPurchasingPowerUsRussia;

let bigMacIndexRussia = subtractedCurrencyRateWithImpliedPurchasingPowerUsRussia.toFixed(2)
console.log(subtractedCurrencyRateWithImpliedPurchasingPowerUsRussia.toFixed(2))
console.log(`The Big Mac index Russia to us is: ${parseFloat(bigMacIndexRussia)}%`)

// INPUT
    // CHILOMETRI DA PERCORRERE
const kilometres = parseInt (prompt ("Quanti chilometri vuoi percorrere?"));
console.log(kilometres, typeof kilometres);
// ETA PASSEGGERO
const userAge = parseInt (prompt ("quanti anni hai?"));
console.log(userAge, typeof userAge);
const price = 0.21
console.log(price, typeof price);
// PROCESSING
    // KILOMETRES
const priceSum = kilometres * price;
console.log(priceSum, typeof priceSum);
    // AGE
        // let discountYoung =
        let discountedPriceY = priceSum * 0.8;
        let shortNumberY = parseFloat(discountedPriceY.toFixed(2));
        console.log(shortNumberY, typeof shortNumberY);
        // let discountElder = 60
        let discountedPriceE =priceSum * 0.6;
        let shortNumberE = parseFloat(discountedPriceE.toFixed(2));
        console.log(shortNumberE, typeof shortNumberE);
    // COMPUTING
    let discount = priceSum
    if (userAge < 18)
        discount = shortNumberY;
    else if (userAge > 60)
        discount = shortNumberE
    console.log(discount, typeof discount);       
// OUTPUT

document. getElementById ("kilometres").innerHTML = ` numeri di chilometri scelto: <span class="finalnumber"> ${kilometres} chilometri</span>`;
document. getElementById ("userage").innerHTML = ` La tua età: <span class="finalnumber"> ${userAge} anni</span>`;
document.getElementById ("result").innerHTML = `Il prezzo: € <span class="finalnumber"> ${discount}</span>`;



// PREZZO= 0,21 EURO A CHILOMETRO
// SCONTO DEL 20% PER MINORENNI
// SCONTO DEL 40% PER OVER 60
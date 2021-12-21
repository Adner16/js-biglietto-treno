console.log('JS OK')

/*
1 chiedere numero di kilometri
2 eta del passeggero
3 calcolare costo biglietto
4 calcolare sconto
5 applicare sconto
 mostrare prezzo finale
*/


//0

let discountYoung
let discountSenior
let finalPrice

//1
const userKm = prompt('Per quanti km vuoi viaggiare?');
console.log(`km di viaggio: ${userKm} `);

//2
const userAge = prompt('Quanti anni hai?');
console.log(`età del cliente:${userAge}`);

//3
const ticketPrice = userKm * 0.21
console.log(`costo biglietto:${ticketPrice}`)

//4
discountYoung = ticketPrice * 0.20
console.log(`sconto young: ${discountYoung}`)
discountSenior = ticketPrice * 0.40
console.log (`sconto senior: ${discountSenior}`)

//5
if (userAge < 18) {
    finalPrice = (ticketPrice - discountYoung)
}
console.log(`prezzo scontato young: ${finalPrice}`)
if(userAge >= 65) {
    finalPrice = (ticketPrice - discountSenior)
}
console.log(`prezzo scontato senior: ${finalPrice}`)

finalPrice = document.getElementById('prezzo')
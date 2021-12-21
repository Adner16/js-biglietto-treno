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
console.log('km di viaggio: ' userKm );

//2
const userAge = prompt('Quanti anni hai?');
console.log(userAge);

//3
const ticketPrice = userKm * 0.21
console.log(ticketPrice)

//4
discountYoung = ticketPrice * 0.20
console.log(discountYoung)
discountSenior = ticketPrice * 0.40
console.log (discountSenior)

//5
if (userAge < 18) {
    finalPrice = (ticketPrice - discountYoung)
}
// console.log(finalPrice)
if(userAge >= 65) {
    finalPrice = (ticketPrice - discountSenior)
}
console.log(finalPrice)


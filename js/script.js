console.log('JS OK')

/*
1 chiedere numero di kilometri
2 eta del passeggero
3 calcolare costo biglietto
4 calcolare sconto e applicare sconto
5 mostrare prezzo finale
*/


//0

let finalPrice;

//1
const userKm = prompt('Per quanti km vuoi viaggiare?');
console.log(`km di viaggio: ${userKm} `);

//2
const userAge = prompt('Quanti anni hai?');
console.log(`età del cliente:${userAge}`);

//3
const ticketPrice = userKm * 0.21;
console.log(`costo biglietto:${ticketPrice}`);

//4

if (userAge < 18) {
    const discountYoung = ticketPrice * 0.20;
    console.log(`sconto young: ${discountYoung}`);
    finalPrice = (ticketPrice - discountYoung).toFixed(2);
    console.log(`prezzo scontato young: ${finalPrice}`);
}
else if (userAge >= 65) {

    const discountSenior = ticketPrice * 0.40;
    console.log (`sconto senior: ${discountSenior}`);
    finalPrice = (ticketPrice - discountSenior);
    console.log(`prezzo scontato senior: ${finalPrice}`);
}
else {
    finalPrice = ticketPrice;
    console.log (`prezzo senza sconto: ${finalPrice}`);
}

// 5 

const prezzo = document.getElementById('prezzo');


prezzo.innerHTML = finalPrice.toFixed(2);   

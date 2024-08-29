// Coding Challenge #4
// Let's improve Steven's tip calculator even more, this time using loops!
let bills=[22,295,176,440,37,105,10,1100,86,52];
let tips=[];
let totals=[];
function calcTip(bill){
    for (let i=0;i<bill.length;i++){
        tips.push(bill[i]>50||bill[i]<=300?bill[i]*0.15:bill[i]*0.2);
        totals.push(bill[i]+tips[i]);
    }
}
calcTip(bills);
for (let i=0;i<bills.length;i++){
    console.log("Bill: "+bills[i]+" Tips: "+tips[i]+" Total: "+totals[i]);
}

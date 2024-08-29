// Coding Challenge #2
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is
// 20%.
let tip;
let bill=[125,555,44];
function calcTip(bill){
    return bill>50||bill<=300?bill*0.15:bill*0.2;
}
let tips=[calcTip(bill[0]),calcTip(bill[1]),calcTip(bill[2])];
let total=[bill[0]+tips[0],bill[1]+tips[1],bill[2]+tips[2]];
for (let i=0;i<bill.length;i++){
    console.log("Bill: "+bill[i]+" Tips: "+tips[i]+" Total: "+total[i]);
}
// Coding Challenge #4
// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.
var tip;
let bill=275;
tip= bill>50||bill<=300?tip=bill*0.15:bill*0.2;
let total= bill+tip;
console.log("Bill: "+bill+" Tips: "+tip+" Total: "+total);

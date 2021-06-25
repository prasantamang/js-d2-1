//creating inventory object
const Inventory_data={
    mask:999,
    sanitizer: 500,
    paracetamol: 900
}
console.log(Inventory_data);
//creating price list object
const Price_list={
    mask:20,
    sanitizer:100,
    paracetamol:50
}
console.log(Price_list);
// mask quantity
const maskQuantity=3;
//mask price
const maskPrice =   Price_list.mask * maskQuantity;
console.log(maskPrice);
//santizer quantity
const  sanitizerQuantity=1;
//sanitizerPrice
const sanitizerPrice = Price_list.sanitizer*sanitizerQuantity;
//paracetamol quantity
const paracetamolQuantity= 1;
//paracetamol price
const paracetamolPrice=Price_list.paracetamol*paracetamolQuantity
//total price
const TotalPrice = maskPrice + sanitizerPrice+ paracetamolPrice;
console.log(TotalPrice);
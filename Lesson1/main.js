// ---------#1
let city = "Київ";
city = "Львів";
let address = city;
alert(city);

// ---------#2
let n = 5;
let result = Math.pow(n, 3);
console.log(result);

// ---------#3
let amountPen = 4;
let amountPencil = 6;
let pricePen = 5.25;
let pricePencil = 3.5;

document.write(
  `
  Людина купила 4 ручки по 5.25 грн і 6 олівців по 3.50 грн. <br/>
  Загальна вартість ручок і олівців: ${
    amountPen * pricePen + amountPencil * pricePencil
  }грн`
);

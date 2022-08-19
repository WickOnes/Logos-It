// ----------#1----------
let n = prompt("Введіть число для обрахунку факторіалу");
let result = 1;
if (n > 0) {
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
} else {
  result = 0;
}
alert(`Факторіал введеного числа ${result}`);

// ----------#2----------
document.write(
  "<h3> Виводить на екран всі чотиризначні числа послідовності 1000 1003 1006 1009 1012 1015 … 9999 :</h3>"
);
for (let count = 1000; count < 10000; count += 3) {
  document.write(`
    <span>${count},</span>`);
}

// ----------#3----------
document.write(
  "<h3> Виводить на екран перші 55 елементів послідовності 1 3 5 7 9 11 13 15 17… :</h3>"
);
let count = 1;
for (let i = 0; i < 55; i++) {
  document.write(`
    <span>${count},</span>`);
  count += 2;
}

// ----------#4----------
document.write(
  "<h3> Виводить на екран всі невід'ємні елементи послідовності 90 85 80 75 70 65 60… :</h3>"
);
let count2 = 90;
for (let i = 0; i <= count2; count2 -= 5) {
  document.write(`
      <span>${count2},</span>`);
}

// ----------#5----------
document.write(
  "<h3> Виводить на екран перші 20 елементів послідовності 2 4 8 16 32 64 128… :</h3>"
);
let count3 = 2;
for (let i = 0; i <= 20; i++) {
  document.write(`
    <span>${count3},</span>`);
  count3 *= 2;
}

// ----------#6----------
document.write(
  "<h3> Виводить на екран  всі числа в послідовності 2a-1(крок зміни лічильника), де початкове значення a = 2 та які менше 10000:</h3>"
);
let count4 = 2;
for (let i = count4; i <= 10000; i = i * 2 - 1) {
  document.write(`
    <span>${i},</span>`);
}

// ----------#7----------
document.write(
  "<h3> Виводить на екран всі двозначні члени послідовності 2a+200(крок зміни лічильника), де початкове значення змінної a = -166:</h3>"
);
let count5 = -166;
for (let i = count5; i < 100; i = i * 2 + 200) {
  if (i > -100 && i < 100) {
    document.write(`
    <span>${i},</span>`);
  }
}

// ----------#8----------

const num = prompt("Введіть число для піднесення в степінь");
let numPower = prompt("Введіть степінь");
let resultPower = 1;
let check = numPower;
if (numPower < 0) {
  check = Math.abs(numPower);
}
for (let i = 0; i < check; i++) {
  numPower < 0 ? (resultPower /= num) : (resultPower *= num);
}

alert(`Степінь введеного числа  =  ${resultPower}`);

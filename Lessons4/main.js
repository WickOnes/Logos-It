// — Пароль і 4 спроби. Завдання виконуємо через while або do while.

// 1. Запросити у користувача пароль!

// 2. Якщо пароль не вірний повідомити що залишилось 4 спроби!

// - якщо далі невірні паролі спроби зменшуються.

// - коли спроб вже нема вивести повідомлення: "Будь ласка спробуйте пізніше!".

// 3. Якщо користувач одразу чи після кількох спроб ввів вірний пароль, вивести повідомлення "Запрошуємо на сайт!".

// 4. Завдання реалізуємо без break і міток!
const correctPassword = '12345'
let password
let count = 4
while (count > 0) {
  password = prompt(`Enter password "12345"`)
  if (password !== correctPassword) {
    count--
    if (count == 0) {
      alert(`Вхід заблоковано`)
    } else {
      alert(`You have ${count} chance`)
    }
  } else {
    alert(`Вітаємо на сайті!!`)
    count = 0
  }
}
//------------------------------------------

// ----------#1----------
let n = prompt('Введіть число для обрахунку факторіалу')
let result = 1
if (n > 0) {
  let i = 1
  while (i <= n) {
    result *= i
    i++
  }
} else {
  result = 0
}
alert(`Факторіал введеного числа ${result}`)

// ----------#2----------
document.write(
  '<h3> Виводить на екран всі чотиризначні числа послідовності 1000 1003 1006 1009 1012 1015 … 9999 :</h3>',
)
let count1 = 1000
while (count < 10000) {
  document.write(`
  <span>${count},</span>`)
  count += 3
}

// ----------#3----------
document.write(
  '<h3> Виводить на екран перші 55 елементів послідовності 1 3 5 7 9 11 13 15 17… :</h3>',
)
let count2 = 1
let i = 0
while (i < 55) {
  document.write(`
  <span>${count2},</span>`)
  count2 += 2
  i++
}

// ----------#4----------
document.write(
  "<h3> Виводить на екран всі невід'ємні елементи послідовності 90 85 80 75 70 65 60… :</h3>",
)
let count3 = 90
let i3 = 0
while(i3 <= count3){
  document.write(`
  <span>${count3},</span>`)
  count3 -= 5
}


// ----------#5----------
document.write(
  '<h3> Виводить на екран перші 20 елементів послідовності 2 4 8 16 32 64 128… :</h3>',
)
let count5 = 2
let i5 = 0
while(i5 <= 20){
  document.write(`
  <span>${count5},</span>`)
count5 *= 2
i5++
}


// ----------#6----------
document.write(
  '<h3> Виводить на екран  всі числа в послідовності 2a-1(крок зміни лічильника), де початкове значення a = 2 та які менше 10000:</h3>',
)
let count6 = 2
let i6 = count6
while(i6 <= 10000){
  document.write(`
    <span>${i6},</span>`)
  i6 = i6 * 2 - 1
}


// ----------#7----------
document.write(
  '<h3> Виводить на екран всі двозначні члени послідовності 2a+200(крок зміни лічильника), де початкове значення змінної a = -166:</h3>',
)
let count7 = -166
let i7 = count7
while(i7 < 100){
  if (i7 > -100 && i7 < 100) {
    document.write(`
    <span>${i7},</span>`)
  }
  i7 = i7 * 2 + 200
}


// ----------#8----------

const num = prompt('Введіть число для піднесення в степінь')
let numPower = prompt('Введіть степінь')
let resultPower = 1
let check = numPower
if (numPower < 0) {
  check = Math.abs(numPower)
}
let i8 = 0
while(i8 < check){
  numPower < 0 ? (resultPower /= num) : (resultPower *= num)
  i8++

}
alert(`Степінь введеного числа  =  ${resultPower}`)

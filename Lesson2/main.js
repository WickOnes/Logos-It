// --------#1---------------
alert(
  "Вітаю, попереду тебе чекає тест з 10 питань, сторінка входу а також бонус!!!"
);

let count = 0;
let question1 = prompt("1.Найпопулярніше дерево зимою?");
question1.toLowerCase() == "ялинка"
  ? (alert("Вірно!!!"), count++)
  : alert("Невірно це - Ялинка");

let question2 = prompt("2.Кий,Щек і ... ?");
question2.toLowerCase() == "хорив"
  ? (alert("Вірно!!!"), count++)
  : alert("Невірно це - Хорив");

let question3 = prompt("3.Столиця України?");
question3.toLowerCase() == "київ"
  ? (alert("Вірно!!!"), count++)
  : alert("Невірно це - Київ");

let question4 = prompt("4.На рушнику завжди ... і сіль?");
question4.toLowerCase() == "хліб"
  ? (alert("Вірно!!!"), count++)
  : alert("Невірно це - Хліб");

let question5 = prompt("5.Хіба ревуть воли як ясла ... ?");
question5.toLowerCase() == "повні"
  ? (alert("Вірно!!!"), count++)
  : alert("Невірно це - Повні");

let question6 = prompt("6.Найгарячіша планета сонячної системи?");
question6.toLowerCase() == "венера"
  ? (alert("Вірно!!!"), count++)
  : alert("Невірно це - Венера");

let question7 = prompt("7.Який знак йде після Дракона?");
question7.toLowerCase() == "змія"
  ? (alert("Вірно!!!"), count++)
  : alert("Невірно це - Змія");

let question8 = prompt("8.Який буде колір при змішуванні синього та червоного");
question8.toLowerCase() == "фіолетовий"
  ? (alert("Вірно!!!"), count++)
  : alert("Невірно це - Фіолетовий");

let question9 = prompt("9.Верховний орган влади у давньому Римі?");
question9.toLowerCase() == "сенат"
  ? (alert("Вірно!!!"), count++)
  : alert("Невірно це - Сенат");

let question10 = prompt("10.В якій області немає нобелевскої премії?");
question10.toLowerCase() == "математика"
  ? (alert("Вірно!!!"), count++)
  : alert("Невірно це - Математика");

if (count <= 3) {
  alert(`Набрано ${count} балів - Дуже погано! `);
}
if (count > 3 && count <= 6) {
  alert(`Набрано ${count} балів - Добре!`);
}
if (count > 6 && count <=9) {
  alert(`Набрано ${count} балів - Дуже добре!`);
}
if (count == 10) {
  alert(`Набрано ${count} балів - Відмінно!`);
}

// --------#2---------------

let nameUser = prompt("Введіть 'Ім'я'");
console.log(nameUser);
let password;

if (nameUser === null) {
  alert("Вхід скасований");
} else if (nameUser.toLowerCase() === "ім'я") {
  password = prompt("Введіть пароль");
  if (password === "ЛОГОС") {
    alert("Ласкаво просимо!");
  } else if (password === null) {
    alert("Вхід скасований");
  } else {
    alert("Пароль невірний");
  }
} else {
  alert("Я вас не знаю");
}


// --------#3---------------

let month = prompt("Введіть число 1-12")

if(month > 0 && month <= 2  || month == 12){
    alert("Зима")
}else if(month > 2 && month <= 5){
    alert("Весна")
}else if(month > 5 && month <= 8){
    alert("Літо")
}else if(month > 8 && month <= 11){
    alert("Осінь")
}else{
alert("НЕМОЖЛИВО!!!!")
}
let number = +prompt('Веедіть число місяця')
switch (number) {
  case 12:
  case 1:
  case 2:
    alert('Зима')
    break
  case 3:
  case 4:
  case 5:
    alert('Весна')
    break
  case 6:
  case 7:
  case 8:
    alert('Літо')
    break
  case 9:
  case 10:
  case 11:
    alert('Осінь')
    break
  default:
    alert('Це неможливо!!!')
    break
}

function isPrime(n) {
  let num
  if (n > 1) {
    for (let i = 2; i < n; i++) {
      if (n % i == 0) {
        num = 0
      }
    }
    if (num == 0) {
      console.log('Число - складене')
    } else {
      console.log('Число - просте')
    }
  } else {
    console.log('Число має бути більше 1')
  }
}
isPrime(prompt('Введіть число більше 1 і дивись консоль'))

function maxNumber(...arg) {
  let max = arg[0]
  for (let i = 0; i < arg.length; i++) {
    if (max < arg[i]) {
      max = arg[i]
    }
  }
  console.log(arg)
  console.log(`Максимальне число  ${max}`)
}
maxNumber(5, -2, 30, 6)

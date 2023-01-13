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
  n = prompt('Введіть число і дивись консоль')
  if (n % 2 != 0) {
    console.log('введене простe число')
  } else {
    console.log('ERROR!!')
  }
}
isPrime()

function maxNumber(...arg) {
  arg = prompt('Введіть мінімум 2 числа "-5,10"').split(',')

  let max = arg[0]
  for (let i = 0; i < arg.length; i++) {
    if (max < arg[i]) {
      max = arg[i]
    }
  }

  alert(`Максимальне число  ${max}`)
}
maxNumber()

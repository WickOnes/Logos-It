let fb = (num) => {
  num = prompt('Введіть число к-ті елементів Фібаначи')
  let start = 0
  let nextNum = 1
  let result = 0
  let arr = []
  for (let i = 0; i < num; i++) {
    result = start + nextNum
    nextNum = start
    start = result
    arr.push(result)
  }
  alert(arr)
}

fb()

let f = function (n, m) {
    n=prompt("Введіть к-сть послідовностей")
    m=prompt("Введіть знаменник геометричної прогресії")
  let a = 1
  sum = 0
  for (let i = 0; i < n; i++) {
    sum += a
    a *= m
  }
  alert(`Сумма геометричної прогресії = ${sum}`)
}
f()

let f2 = function (n, m) {
  n = prompt('Введіть к-сть послідовностей')
  m = prompt('Введіть знаменник геометричної прогресії')
  let a = 1
  let sum = a *((1-Math.pow(m,n)) / (1 - m) )
  alert(sum)
}
f2()

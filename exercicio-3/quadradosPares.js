//Sequência de números pares ao quadrado


let num = 100

let i = 2
let square = i * i

while (square <= num) {
  console.log(square)
  i += 2 // Incrementa de 2 em 2 para manter números pares
  square = i * i
}
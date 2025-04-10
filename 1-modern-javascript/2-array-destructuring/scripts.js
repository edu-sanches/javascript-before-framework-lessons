// Destructuring assignment (desestruturação) permite extrair dados de arrays ou objetos em variáveis distintas.

const data = ["Joana Cabral", "joana@email.com"]

// Desestruturando array
const [username, email] = data

console.log(`O nome é: ${username}`)
console.log(`O e-mail é: ${email}`)

const fruits = ["Banana", "Apple", "Orange"]

// Desestruturar somente o primeiro
const [banana] = fruits
console.log(banana)

// Ignorando somente o primeiro na desestruturação
const [_, apple] = fruits
console.log(apple)

// Ignorando o primeiro e o segundo na desestruturacão
const [, , orange] = fruits
console.log(orange)
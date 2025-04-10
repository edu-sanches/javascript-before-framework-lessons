// Spread (espalhar) permite que um objeto iterável, como uma expressão de array ou uma string seja expandido para ser usado onde zero ou mais argumentos

const numbers = [1, 3, 2]

// Spread
console.log(...numbers)

// Criando objeto
const data = [
    {
        name: "Eduardo",
        email: "eduardo@email.com",
        avatar: "edu.jpg"
    },

    {
        name: "Leane Cabral",
        email: "leane@email.com",
        avatar: "leane.jpg"
    },

    {
        name: "Joana Cabral",
        email: "joana@email.com",
        avatar: "joana.jpg"
    }
]

console.log(data)

// Utilizando o spread no array de objetos
console.log(...data)
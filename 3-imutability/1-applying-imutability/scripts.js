const address1 = {
    street: "Rua Guanabara",
    number: 110
}

// Isso não é uma cópia. É uma referência
// const address2 = address1
// address2.number = 20

// Aqui estamos criando um novo objeto utilizando as propriedades e valores de address1 (Opção 1)
// const address2 = { ...address1 }
// address2.number = 20


const address2 = { ...address1, number: 30 }

console.log(address1, address2)

// Exemplo com array
const list1 = ["Apple", " Banana"]

// Opção 1
// const list2 = [...list1]
// list2.push('Watermelon')

// Opcão 2
const list2 = [...list1, "Watermelon"]

console.log(list1, list2)
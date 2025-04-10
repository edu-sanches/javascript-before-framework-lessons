// Destructuring assignment (desestruturação) permite extrair dados de arrays ou objetos em variáveis distintas.

const product = {
    description: "Mouse",
    price: 70
}

const { description, price } = product
console.log("Descrição:", description)
console.log("Preço:", price)

function newProduct({ price, description }) {
    console.log("### NOVO PRODUTO ###")
    console.log("Descrição:", description)
    console.log("Preço:", price)
}

newProduct({ 
    description: "Monitor", 
    price: "900" 
})

function newCar({ brand, yearModel, color, price }) {
    console.log("### CARRO ###")
    console.log("Marca:", brand)
    console.log("Ano/modelo:", yearModel)
    console.log("Cor:", color)
    console.log("Preço:", price)
}

newCar({ price: 230000, yearModel: "2024/2025", brand: "Jeep", color: "prata" })
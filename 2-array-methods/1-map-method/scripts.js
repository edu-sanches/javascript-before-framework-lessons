//  O método map() chama a função de callback recebida por parâmetro para cada elemento do Array original, em ordem, e constrói um novo array com base nos retornos de cada chamada. E no final, devolve o novo array.

const products = ["Teclado", "Mouse", "Monitor"]

// Percorro os itens do array
products.map((product) => {
    console.log(product)
})

// Sintaxe reduzida
products.map((product) => console.log(product))

// Utilizando o novo objeto retornado
const formatted = products.map((product, index) => {
    // return product.toUpperCase()

    const prices = [100, 70, 800]
    
    return {
        id: Math.random(),
        desciption: product,
        price: prices[index]
    }
})

console.log(formatted)
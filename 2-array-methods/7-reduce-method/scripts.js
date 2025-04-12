/*
    O método reduce() é utilizado para reduzir um array a um único valor

    Parâmetros:
    • Array original (values)
    • Acumulador (accumulator)
    • Valor da iteração (currentValue)
    • Valor inicial (0)
    • Índice (index da iteração atual - opcional)
*/

const values = [1, 2, 3, 4, 5]

const sum = values.reduce((accumulator, currentValue, index) => {
    console.log("ACUMULADOR", accumulator)
    console.log("CURRENT VALUE", currentValue)
    console.log("INDEX", index)
    console.log("SOMA", accumulator + currentValue)
    console.log("#############")

    return accumulator + currentValue
},0 )

console.log("RESULTADO DA SOMA FINAL", sum)

// Exemplo que criei abaixo para praticar o reduce

const values2 = [5, 10, 15, 20, 25]

const result2 = values2.reduce((valorSomar, valorAtual, indice) => {
    const operacao = valorSomar + valorAtual
    console.log("O Valor a somar é", valorSomar)
    console.log("O Valor atual é", valorAtual)
    console.log("O valor somado é", operacao)
    console.log("O índice é", indice)

    return operacao
}, 10)
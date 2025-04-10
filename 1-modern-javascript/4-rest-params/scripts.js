// Rest params (...) permite representar um número indefinido de argumentos como um array

function values(a, ...rest) {
    // Mostra o primeiro parâmetro
    console.log(a)

    // Mostra a quantidade de parâmetros
    console.log(rest.length)

    // Exibindo o conteúdo do array
    console.log(...rest)

    // Exibe o conteúdo do rest que é um array
    console.log(rest)
}

values("Parâmetro 1", 1, 2, 3, 4)
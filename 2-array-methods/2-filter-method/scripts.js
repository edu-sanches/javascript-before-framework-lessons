// O método filter() cria um novo array com todos os elementos que passaram na condição

const words = ["Javascript", "HTML", "CSS", "Web"]

const result = words.filter((word) => word.length > 3)

console.log(result)

const products = [
    { description: "Teclado", price: 150, promotion: true },
    { description: "Mouse", price: 70, promotion: false },
    { description: "Monitor", price: 900, promotion: true}
]

// Exemplo de um filtro de produtos na promoção
const promotion = products.filter((product) => product.promotion === true)

// Também funciona dessa maneira quando é true ou false (false no exemplo abaixo)
const promotionAlternative = products.filter((product) => !product.promotion)

console.log(promotion)

console.log(promotionAlternative)
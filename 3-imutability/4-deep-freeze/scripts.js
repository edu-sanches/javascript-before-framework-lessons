const book = {
    title: "Objetos Imutáveis",
    category: "Javascript",
    author: {
        name: "Eduardo",
        email: "eduardo@email.com"
    }
}
// book.category = "CSS"

console.log(book)

function deepBreeze(object) {
    // Obtém um array com todas as propriedades do objeto
    const props = Reflect.ownKeys(object)
    
    for (const prop of props) {
        // Obtém o valor associado à propriedade atual.
        const value = object[prop]
        
        // Verifica se o valor é um objeto ou função para continuar aplicando o deepFreeze em objetos aninhados
        if (typeof(value) === "object" || typeof(value) === "function") {
            deepBreeze(value)
        }
    }
    
    // Retorna o objeto congelado
    return Object.freeze(object)
}

// Chama a função para congelar o objeto com Deep Freeze (congelamento profundo)
deepBreeze(book)

book.category = "HTML"
book.author.name = "Leane"

console.log(book)
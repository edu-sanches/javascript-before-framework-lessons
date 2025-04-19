const book = {
    title: "Objetos Imutáveis",
    category: "javascript",
    author: {
        name: "Eduardo",
        email: "eduardo@email.com"
    }
}

const updatedBook = {
    ...book,
    title: "Criando um front-end moderno com HTML",
    category: "html",
    type: "Programmming"
}

// Original intacto
console.log(book)

// Modificado
console.log(updatedBook)

// Utilizando operador de desestruturação (rest operator) para remover propriedades
const { category, ...bookWithoutCategory } = book
console.log(bookWithoutCategory)
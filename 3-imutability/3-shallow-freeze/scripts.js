const book = {
    title: "Objetos imutáveis",
    category: "Javascript",
    author: {
        name: "Eduardo",
        email: "eduardo@email.com"
    }
}

// O Javascript em si não impõe restrições à modificação dos objetos 
// book.category = "HTML"

// Congela o objeto e impede a modificação
Object.freeze(book)
book.category = "CSS" // não modifica

// O Object.freeze() não impede modificações profundas em objetos aninhados
book.author.name = "Fulano"
console.log(book)
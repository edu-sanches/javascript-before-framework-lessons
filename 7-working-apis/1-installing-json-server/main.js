// MOSTRAR UMA PROMISE NO CONSOLE
// const response = fetch("http://localhost:3000")
// console.log(response)


// Utilizando o fetch com o then
// fetch("http://localhost:3000/users/3")
//     .then((response) => response.json())
//     .then((data) => console.log(data))

// Utilizando o fetch com async/await
async function fetchFunction() {
    const response = await fetch("http://localhost:3000/products")
    const data = await response.json()
    console.log(data)
}

fetchFunction()
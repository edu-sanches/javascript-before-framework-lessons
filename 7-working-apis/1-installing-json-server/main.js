// MOSTRAR UMA PROMISE NO CONSOLE
// const response = fetch("http://localhost:3000")
// console.log(response)


// Utilizando o fetch com o then
// fetch("http://localhost:3000/users/3")
//     .then((response) => response.json())
//     .then((data) => console.log(data))

// Utilizando o fetch com async/await
async function fetchProducts() {
    const response = await fetch("http://localhost:3333/products")
    const data = await response.json()
    console.log(data)
}

// fetchProducts()


// Passando parâmetros na requisição
async function fetchProductsByEndpointId(endpoint, id) {
    const response = await fetch(`http://localhost:3333/${endpoint}/${id}`)
    const data = await response.json()
    console.log(data)
}

// fetchProductsByEndpointId('products', '2')

const productName = document.getElementById("name")
const productPrice = document.getElementById("price")

addEventListener("submit", async (event) => {
    event.preventDefault()

    await fetch("http://localhost:3333/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: new Date().getTime().toString(),
            name: productName.value,
            price: productPrice.value
        })
    })
})

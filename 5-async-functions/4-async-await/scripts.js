function asyncFunction() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isSuccess = true
    
            if(isSuccess) {
                resolve("A operação foi concluída com sucesso")
            } else {
                reject("Algo deu errado")
            }
        }, 2000)
    })
}

console.log("Executando função assíncrona...")

// Usando async e await com a notação de arrow function
/*
const fetch = async () => {
    const response = await asyncFunction()
    console.log(response)
}
*/

// Usando async e await na declaração da função
/*
async function fetch() {
    const response = await asyncFunction()
    console.log(response)
}
*/

async function fetch() {
    try {
        const response = await asyncFunction()
        console.log("SUCESSO:", response)
    } catch (error) {
        console.log("ERRO:", error)
    } finally {
        console.log("FIM DA EXECUÇÃO")
    }
}

fetch()
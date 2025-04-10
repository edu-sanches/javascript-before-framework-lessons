// O strict mode (modo estrito): ativando esse modo, os erros que eram silenciosos passam a gerar exceções no Javascript

"use strict"

function showMessage() {
    let personName = "Eduardo Sanches"

    console.log(personName)
}

showMessage()

class Student {
    get point() {
        return 7
    }
}

let student = new Student()
// Tenta mudar uma propriedade somente leitura
// student.point = 10

console.log(student.point)

// Tenta deletar uma propriedade de um objeto que não posso deletar
// delete window.document

// Quando passamos parâmetros duplicados
/* function sum(a, a, c) {
    return a + a + c
}

const result = sum(1, 3, 2)
console.log("RESULTADO:", result)
*/
/*
    default export - é a função padrão fornecida pelo módulo.
    (no arquivo onde a função é chamada não precisa ter exatamente o mesmo nome da função )
*/
export default function sum(a, b) {
    return a + b
}

// named export - cada método é importado pelo seu próprio nome de exportação
export function multiply(a, b) {
    return a * b
}
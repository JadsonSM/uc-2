// CAPÍTULO 6 — ATIVIDADE 5 DE 5
// O registro de encomenda chega com identificador textual 0012, que não
// deve ser confundido com o número 12.
// Especificação da atividade
// 1. Declare código "0012" e número 12.
// 2. Exiba resultados de == e ===.
// 3. Explique em um comentário por que a comparação estrita é apropriada.

const codigo = "0012"
const numero = 12
console.log("Código textual: ", codigo)
console.log("Número: ",numero)
console.log("Igualdade não estrita (==): ", codigo == numero)
console.log("Igualdade estrita (===): ", codigo === numero)
console.log(`Comparação adicional: "12" == 12 -> true`)
console.log(`Comparação adicional: "12" === 12 -> false`)
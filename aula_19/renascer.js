// CAPÍTULO 6 — ATIVIDADE 4 DE 5
// A organização fixou meta mensal de R$ 5.000 e acompanha o valor arrecadado.
// Especificação da atividade
// 1. Solicite total arrecadado.
// 2. Mostre se a arrecadação é maior, menor ou igual a 5000 usando comparações.
// 3. Não use condicionais nesta atividade; exiba os resultados booleanos.

//Importação da Biblioteca Promt-sync
import PromptSync from "prompt-sync";

//Declaração de Variáveis
const input = PromptSync()
const valor = input("Insira o valor arrecadado: ")
console.log("Total arrecadado: ", valor)
console.log("Maior que a meta: ", valor > 5000)
console.log("Menor que a meta: ", valor < 5000)
console.log("Igual à meta: ", valor === 5000)
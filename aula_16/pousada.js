//CAPÍTULO 3 — ATIVIDADE 4 DE 5
//A recepção precisa obter os valores necessários para o cálculo de uma
//reserva

//importação da biblioteca
import PromptSync from "prompt-sync"
const input = PromptSync()

//Receber os dados
const nome = input("Digite o nome do hospede:")
const quantidade_dias = Number(input("Quantos dias o hospede vai ficar? "))
const valor = Number(input("Digite o valor da diária: "))

//base de calculo
const total = quantidade_dias * valor

//saída dos dados
console.log("Hospede", nome)
console.log("Diárias", quantidade_dias)
console.log("Valor da diária", valor)
console.log("Total bruto:",total)
//CAPÍTULO 3 — ATIVIDADE COMPLEMENTAR
//Uma empresa de entregas precisa estimar a quantidade de combustível e o custo de uma
//viagem antes da saída do veículo.

//Especificação da atividade
// 1. Solicite o nome do motorista, a distância da viagem em quilômetros, o consumo
// médio do veículo em km/L e o preço por litro.
// 2. Converta as três entradas numéricas utilizando Number.
// 3. Divida a distância pelo consumo médio para calcular a quantidade de litros
// necessária.
// 4. Calcule e exiba o custo estimado da viagem

//Importação da biblioteca
import PromptSync from "prompt-sync";

//Parametros da atividade
const input = PromptSync()
const nome_motorista = input("Digite o nome do motorista")
const distancia = Number(input("Digite a distância percorrida"))
const consumo_veiculo = Number(input("Quantos Km/L faz o veículo "))
const preco_litro = Number(input("Qual o valor do combustível? "))

//base de calculo
const quantidade_total = distancia / consumo_veiculo
const custo_estimado = quantidade_total * preco_litro

//saída de dados
console.log("Motorista: ",nome_motorista)
console.log("Distância km:",distancia)
console.log("Consumo médio ")


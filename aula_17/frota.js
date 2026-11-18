// CAPÍTULO 4 — ATIVIDADE 5 DE 5
// O setor de transportes compara a eficiência de um veículo em uma rota.
// Especificação da atividade
// 1. Leia quilômetros percorridos e litros consumidos.
// 2. Calcule consumo em km/L.
// 3. Exiba resultado com duas casas decimais.

//Importação da Biblioteca Promt-Sync
import PromptSync from "prompt-sync";

//Declaração de Variáveis
const input = PromptSync()
const distancia = input("Digite a distância Percorrida: ")
const litros = input("Digite quantos litros foram consumidos: ")

//Base de Cálculo
const consumo = distancia / litros

//Saída de dados
console.log("Quilômetros percorridos: ",distancia)
console.log("Litros consumidos: ", litros)
console.log(`Consumo médio: ${consumo.toFixed(2)} km/L`)
// CAPÍTULO 4 — ATIVIDADE 1 DE 5
// Uma clínica deseja calcular o IMC como indicador inicial de triagem, sem
// emitir diagnóstico.
// Especificação da atividade
// 1. Solicite peso em quilogramas e altura em metros.
// 2. Valide ambos como números positivos.
// 3. Calcule IMC e apresente o resultado com duas casas decimais.

//Importação da Bibliote Prompt-sync
import PromptSync from "prompt-sync";

//Declaração de Variáveis
const input = PromptSync();
const peso = input("Digite seu peso em KG: ");
const altura = input("Digite sua altura em metros: ")

//Base de Cálculo
const IMC = peso / (altura ** 2)

//Saída de dados
console.log(`Peso (Kg): ${peso}KG`)
console.log(`Altura (m): ${altura}m`)
console.log("Imc: ",IMC.toFixed(2))
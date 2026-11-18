// CAPÍTULO 4 — ATIVIDADE 3 DE 5
// A equipe de obras quer estimar a área de uma sala retangular para comprar
// revestimento.
// Especificação da atividade
// 1. Leia comprimento e largura em metros.
// 2. Calcule área em metros quadrados.
// 3. Exiba a área com duas casas decimais.

//Importação da Biblioteca Prompt-sync
import PromptSync from "prompt-sync";

//Declaração de Vairáveis
const input = PromptSync()
const comprimento = input("Digite o comprimento da sala em metros: ")
const largura = input("Digite a largura da saka em metros: ")

//Base de Cálculos
const area = comprimento * largura

//Saída de dados
console.log("Comprimento (m): ",comprimento)
console.log("Largura (m): ", largura)
console.log(`Área do piso: ${area.toFixed(2)} m²`)
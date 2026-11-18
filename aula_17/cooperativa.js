// CAPÍTULO 4 — ATIVIDADE 4 DE 5
// Uma associação precisa dividir 53 kits igualmente entre 8 equipes e conhecer o saldo.
// Especificação da atividade
// 1. Solicite número de kits e número de equipes.
// 2. Calcule kits por equipe com Math.floor e kits restantes com %.
// 3. Exiba ambos os resultados.

//Importação da Biblioteca Promt-sync
import PromptSync from "prompt-sync";

//Declaração das Variáveis
const input = PromptSync()
const kits = input("Digite a quantidade de Kits: ")
const equipes = input("Digite a quantidade de Equipes: ")

//Base de Cálculos
const porEquipe = Math.floor(kits / equipes);
const resto = kits % equipes

//Saída de dados
console.log("Quantidade de kits: ", kits)
console.log("Quantidade de equipes: ",equipes)
console.log("Kits por equipe: ", porEquipe)
console.log("Kits restantes: ", resto)
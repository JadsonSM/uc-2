// CAPÍTULO 6 — ATIVIDADE 1 DE 5
// Um parque deseja verificar se o visitante atende à idade mínima de uma
// atração.
// Especificação da atividade
// 1. Solicite idade e converta o texto para número, utilizando um exemplo de
// idade válida.
// 2. Verifique se a idade é maior ou igual a 12 e exiba o resultado booleano.
// 3. Exiba o resultado booleano. A decisão sobre permitir ou negar acesso será
// estudada com if e else.

//Importação da Biblioteca Promt-Sync
import PromptSync from "prompt-sync";

//Declaração das Vairáveis
const input = PromptSync()
const idade = Number(input("Digite a idade do visitante: "))
console.log("Idade: ",idade)
console.log ("Idade mínima atendida: ", idade >=12)

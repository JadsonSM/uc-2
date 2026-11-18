// CAPÍTULO 6 — ATIVIDADE 2 DE 5
// Uma turma comporta no máximo 30 estudantes. O sistema precisa verificar
// se uma nova matrícula cabe no limite.
// Especificação da atividade
// 1. Solicite número atual de matriculados.
// 2. Compare matriculados < 30 para disponibilidade de ao menos uma vaga.
// 3. Exiba o resultado.

//Importação da Biblioteca Promot-Sync
import PromptSync from "prompt-sync";

//Declaração das Variáveis
const input = PromptSync()
const matriculados = input("Digite o número de matriculados atualmente: ")

//Saída de dados e verificação
console.log("Matriculados: ")
console.log("Existe vaga disponível: ", matriculados < 30)
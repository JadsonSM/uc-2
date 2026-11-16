// CAPÍTULO 3 — ATIVIDADE 1 DE 5

// O atendimento deseja coletar dados de identificação que antes eram anotados
// em papel.
// Especificação da atividade
// 1. Solicite nome, idade e bairro por prompt.
// 2. Converta idade com Number.
// 3. Verifique que a idade é um inteiro não negativo antes de exibir a ficha

//Importação da biblioteca
import promptSync from "prompt-sync";

const input = promptSync();
const nome = input("Digite seu nome: ");
const idade = Number(input("Digite sua idade: "));
const bairro = input("Digite seu bairro: ");

//Saíde de dados
console.log("Nome: ", nome);
console.log("Idade: ", idade);
console.log("Bairro: ", bairro);
console.log(`Ficha: ${nome} | ${idade} | ${bairro}`);

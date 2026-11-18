//CAPÍTULO 3 — ATIVIDADE 5 DE 5
//Uma transportadora deseja registrar quilômetros percorridos por um veículo antes da emissão de relatório
// Especificação da atividade
// 1. Solicite a placa e uma distância em quilômetros.
// 2. Converta o valor para número e exiba identificação e distância.
// 3. Utilize Number.isFinite para exibir se a distância informada é um número
// finito

//importação da biblioteca
import PromptSync from "prompt-sync";

//Parametros de entrada
const input = PromptSync();
const placa = input("Digite a placa do veículo: ");
const distancia = Number(input("Digite a distancia percorrida em (km): "));
const validacao = Number.isFinite(distancia);

//Sáide de dados
console.log("Placa: ", placa);
console.log("Distância (km): ", distancia);
console.log("Veículo: ", placa);
console.log(`Distância: ${distancia} km`);
console.log("Número finito: ", validacao);

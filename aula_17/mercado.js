// CAPÍTULO 4 — ATIVIDADE 2 DE 5
// O caixa precisa informar quanto devolver ao cliente quando o pagamento
// excede o valor da venda.
// Especificação da atividade
// 1. Leia valor da compra e valor entregue.
// 2. Calcule o troco e apresente com duas casas decimais.
// 3. Para este exercício, utilize um pagamento igual ou superior ao valor da compra

//Importação da Biblioteca Prompt-sync
import PromptSync from "prompt-sync";

//Declaração de Variáveis
const input = PromptSync();
const total = Number(input("Valor total da Compra: "));
const recebido = Number (input("Valor Entregue pelo cliente: "));

//Base de Cálculo
const troco = recebido - total;

//Saída de dados
console.log("Valor da Compra: R$", total);
console.log("Valor recebido: R$", recebido);
console.log("Troco: R$", troco.toFixed(2));

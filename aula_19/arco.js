// CAPÍTULO 6 — ATIVIDADE 3 DE 5
// Um cupom promocional deve corresponder exatamente ao código registrado. A atividade verifica apenas o resultado booleano da comparação.
// Especificação da atividade
// 1. Cadastre código PROMO10 como string.
// 2. Solicite código digitado pelo usuário.
// 3. Compare com === e apresente o resultado.

//Importação da Biblioteca Promt-sync
import PromptSync from "prompt-sync";

//Declaração das Variáveis
const input = PromptSync()
const cupom = String ("PROMO10")
const solicitacao = input("Insira o código do Cumpom: ")
console.log("Cupom: ", solicitacao)
console.log("Cupom válido: ", solicitacao === cupom)

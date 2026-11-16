// // CAPÍTULO 2 — ATIVIDADE 1 DE 5

// A papelaria precisa exibir uma ficha simples de um produto cadastrado
// // localmente.

// Especificação da atividade
// 1. Declare nomeProduto, precoUnitario e disponivel.
// 2. Use os tipos string, number e boolean.
// 3. Exiba os valores e o tipo de cada um.
// Exemplo de verificação
// Valores iniciais: Caderno, 18.90 e true.

//Declaração de Variáveis
const nomeProduto = String("Caderno")
const precoUnitario = Number(18.9)
const disponivel = Boolean(true)

//Saída de dados
console.log(`Produto: ${nomeProduto} (${typeof nomeProduto})`);
console.log(`Preço unitário: ${precoUnitario} (${typeof precoUnitario})`)
console.log(`Disponível: ${disponivel} (${typeof disponivel})`)


// CAPÍTULO 5 — ATIVIDADE 4 DE 5
// O gerente quer atualizar um subtotal de R$ 200 com uma taxa de serviço
// de 5%.
// Especificação da atividade
// 1. Declare subtotal 200.
// 2. Atualize o subtotal por atribuição, acrescentando 5% ao valor anterior.
// 3. Exiba total com duas casas decimais.


//Declaração da Variável
let sub_total = 200
console.log("Subtotal inicial: R$",sub_total)
console.log("Taxa de serviço: 5%")
sub_total = sub_total + sub_total * (5/100)
console.log("Total atualizado: R$", sub_total)
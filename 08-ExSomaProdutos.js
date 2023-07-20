// Declaração da variável
let precoProduto1, precoProduto2, precoProduto3;

// Atribuição da variável
// Entrada de dados
precoProduto1 = 9.99;
precoProduto2 = 13.25;
precoProduto3 = 22.35;

// Processamento
let valorTotal = precoProduto1 + precoProduto2 + precoProduto3;

// Saída
// console.log("Valor do produto 1: " + precoProduto1);
// console.log('Valor do produto 1: ' + precoProduto1);

// Template String
console.log(`Valor do produto 1: R$ ${precoProduto1}`);
console.log(`Valor do produto 2: R$ ${precoProduto2}`);
console.log(`Valor do produto 3: R$ ${precoProduto3}`);
console.log(`O valor total de todos os produtos é de: R$ ${valorTotal.toFixed(2)}`);
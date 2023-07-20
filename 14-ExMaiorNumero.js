let n1, n2, n3;
n1 = 150;
n2 = 100;
n3 = 200;
let maiorNumero;

// Operadores lógicos
// && - AND (E)
// || - OR  (OU)
// !  - NOT (NÃO)

// Verificação condicional se os três números são repetidos
if (n1 == n2 && n1 == n3) 
{
    console.log("Os três números são iguais!");
}

// Verificação condicional para descobrir o maior número
if (n1 >= n2 && n1 >= n3)
{
    maiorNumero = n1;
}
else if (n2 >= n1 && n2 >= n3)
{
    maiorNumero = n2;
} 
else if (n3 >= n1 && n3 >= n2)
{
    maiorNumero = n3;
}
else 
{
    console.log ("Números inválidos!");
}

console.log(maiorNumero);



// // Verificação condicional se o n1 é o maior número
// if (n1 > n2) 
// {
//     maiorNumero = n1;
// } 

// // Verificação condicional se o n2 é o maior número
// if (n2 > n3)
// {
//     maiorNumero = n2;
// }
// else 
// {
//     maiorNumero = n3;
// }

// console.log(maiorNumero);
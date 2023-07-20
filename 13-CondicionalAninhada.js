const media = 10;
console.log(`Sua média é de ${media} ponto(s)`);

if (media < 2) 
{
    console.log("Você foi reprovado!");
} 
else if (media < 6) 
{
    console.log("Você está em recuperação");
} 
else if (media == 10)
{
    console.log("Parabéns, você foi nota máxima!");
} 
else 
{
    console.log("Você foi aprovado");
}
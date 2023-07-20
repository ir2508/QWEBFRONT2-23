// Utilizar a função com argumentos e com retorno para calcular a média de 4 notas 
const nota1 = 10;
const nota2 = 8.5;
const nota3 = 3;
const nota4 = 4.25;

console.log(calcularMedia(nota1, nota2, nota3, nota4));

function calcularMedia(n1, n2, n3, n4) 
{
    try 
    {
        const media = (n1 + n2 + n3 + n4) / 4;
        return media.toFixed(2);
    } 
    catch (e) 
    {
        console.log("Erro ao calcular a média. Avise o menino do TI");
        console.log(e);
    }
    
}
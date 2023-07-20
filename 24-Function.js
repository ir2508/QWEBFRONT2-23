const n1 = 10;
const n2 = 20;
const n3 = 30;
const n4 = 40;

somar(n1,n1);
somar(n1,n2);
somar(n1,n3);
somar(n1,n4);

// Função sem retorno, onde não há uma devolutiva de valor nenhum
function somar(numero1, numero2) {
    const resultado = numero1 + numero2;
    console.log(`O resultado da soma é: ${resultado}`);
}

console.log("O resultado da multiplicação é: " + multiplicar(5,10));

// Função com retorno, onde há uma devolutiva de algum cálculo ou valor
function multiplicar(numero1,numero2){
    const resultado = numero1 * numero2;
    return resultado;
}

console.log("Hoje é dia " + exibirDataAtual());
// Função sem argumentos/parametros
// Função com retorno
function exibirDataAtual(){
    const data = new Date();
    const hoje = data.getDate();
    const mes = data.getMonth() + 1;
    const ano = data.getFullYear();
    const dataCompleta = hoje + "/" + mes + "/" + ano;

    return dataCompleta;
}

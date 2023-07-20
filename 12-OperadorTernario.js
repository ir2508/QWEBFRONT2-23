// Senha do usuário recebida do Banco de Dados
const BdSenha = 12345;

// Senhha informada pelo usuário
const senhaInformada = 1234;
let usuarioLogado;

// Verificar se as senhas são iguais e atribuir true 
// ou false para a variável usuarioLogado
if (senhaInformada == BdSenha)
{
    usuarioLogado = true;
} 
else 
{
    usuarioLogado = false;
}

// Operador ternário para verificar se a variável usuarioLogado 
// é verdadeira e aparecer "Usuário Logado".
// Caso contrário, "Senha incorreta"
console.log((usuarioLogado ? "Usuário logado" : "Senha incorreta"));
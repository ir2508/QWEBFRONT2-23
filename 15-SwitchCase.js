const fruta = "mamão";

switch (fruta.toLowerCase()) 
{
    case "mamão":
    case "mamao":
        console.log("Quitanda Balacobaco");
        console.log("O preço do mamão é de R$ 10,00/unidade");
        break;

    case "banana" :
        console.log("Quitanda Balacobaco");
        console.log("O preço da banana é de R$ 50,00/kg");
        break;

    case "maçã":
    case "maça":
    case "maca":
        console.log("Quitanda Balacobaco");
        console.log("O preço da maçã é de R$ 0,99/unidade");
        break;

    default:
        console.log("Quitanda Balacobaco");
        console.log("Fruta não encontrada no sistema! Tente novamente.");
        break;
}
let candidato = "reprovada";

switch (candidato) {
    case "aprovada":
        console.log("Você foi aprovada! PARABÉNS!")
        break;

    case "lista":
        console.log("Você está na lista de espera. Aguarde")
        break;

    case "reprovada":
        console.log("Você foi reprovado.")
        break;

    default:
        console.log('não se aplica')
        break;
}
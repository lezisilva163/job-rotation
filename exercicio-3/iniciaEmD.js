//Números que começam com a letra "D"


const numerosComD = ["um", "dois", "três", "Quatro", "cinco", "seis", "dez", "Doze", "dezesseis", "dezessete", "dezoito", "dezenove", "duzentos"];

//exibe cada número que começa com a letra "D"
for (let i = 0; i < numerosComD.length; i++) {
  const numero = numerosComD[i];
  if (numero.startsWith("d") || numero.startsWith("D")) {
    console.log(numero);
  }
}
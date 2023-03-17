const originalString = "string a ser invertida.";

let invertedString = "";

// Percorre a string original de trás para frente e adiciona cada caractere na nova string
for (let i = originalString.length - 1; i >= 0; i--) {
  invertedString += originalString[i];
}

// Imprime a string invertida no console
console.log(invertedString);

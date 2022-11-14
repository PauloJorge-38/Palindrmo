const palavra = prompt("Informe uma palavra:")
let palavraInvertida = ""


for (let i = palavra.length -1;i >= 0; i--) {
   palavraInvertida += palavr[i]
}

if (palavra === palavraInvertida) {
    alert(palavra + " é um palindromo")
}else {
    alert(
        palavra + " não é um palíndromo" +
        palavra + " !== " + palavraInvertida
    )
}
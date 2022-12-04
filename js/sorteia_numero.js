const menorValor = 1;
const maiorValor = 1000;
const numeroSecreto = gerarNumeroAleatorio();
console.log(numeroSecreto)
const elementoMenorValor = document.querySelector('#menor-valor');
const elementomaiorValor = document.querySelector('#maior-valor');
elementoMenorValor.textContent = menorValor;
elementomaiorValor.textContent = maiorValor;



function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * maiorValor + 1);
}

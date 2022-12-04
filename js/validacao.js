
function verificaSeOChutePossuiUmValorValido() {
    const numero = +chute;

    if (chuteInvalido(numero)) {

        if (chute.toUpperCase() === 'GAME OVER') {
            document.body.innerHTML =
                `
                <h2>FIM DE JOGO!</h2>
                <h3>Pressione o botão para jogar novamente</h3>
                <button id="jogar-novamente" class="btn-jogar" >Jogar novamente</button>
                `
            document.body.style.backgroundColor = "black";
        } else {
            elementoChute.innerHTML += '<div> Valor Inválido </div>';
            return
        }



    }
    if (numeroMaiorOuMenor(numero)) {

        elementoChute.innerHTML +=
            `<div> Valor inválido, o número precisa ser maior que ${menorValor} ou menor que ${maiorValor} </div>`

        return

    }
    if (numero === numeroSecreto) {

        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era: ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    } else if (numero > numeroSecreto) {

        elementoChute.innerHTML += `
            <div>O número secreto é menor <i class="fa-solid fa-arrow-down"> </i></div>
        `
    } else {

        elementoChute.innerHTML += `
            <div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>
        `

    }


    function chuteInvalido(numero) {
        return Number.isNaN(numero);
    }

    function numeroMaiorOuMenor(numero) {
        return numero > maiorValor || numero < menorValor;
    }

    document.body.addEventListener('click', e => {
        if (e.target.id == 'jogar-novamente') {
            window.location.reload();
        }
    })

}
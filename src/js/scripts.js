// Carne - 400 gr por pessoa + de 6 horas - 650
// Cerveja - 1200 ml por pessoa + 6 horas - 200ml
// Refrigerante-agua - 1000ml por pessoa + 6 horas 1500ml
// crianças valem por 0,5
const inputAdultos = document.getElementById("adultos");
const inputCriancas = document.getElementById("criancas");
const inputDuracao = document.getElementById("duracao");
const resultado = document.getElementById("resultado");

function calcular(){
    

    const adultos = inputAdultos.value;
    const criancas = inputCriancas.value;
    const duracao = inputDuracao.value;


    const quantidadeTotalCarne = carnePorPessoa(duracao) * adultos + (carnePorPessoa(duracao) / 2 * criancas); 
    const quantidadeTotalCerveja = cervejaPorPessoa(duracao) * adultos;
    const quantidadeTotalBebidas = bebidasPorPessoa(duracao) * adultos + (bebidasPorPessoa(duracao) / 2 * criancas);

    resultado.innerHTML = `<h2 class="result-info">Você vai precisar de:</h2>`
    resultado.innerHTML +=  ` <div class="result-block">
    <img src="./src/imagens/32380cutofmeat_98860.ico"/>
    <p>${quantidadeTotalCarne / 1000}kg de Carne</p>
    </div> `;
      



    resultado.innerHTML += ` <div class="result-block">
    <img src="./src/imagens/2340291-beverage-drink-glass_85535.ico"/>
    <p>${Math.ceil(quantidadeTotalCerveja / 355)} latas de 
    Cerveja</p>
    </div> `;



    resultado.innerHTML += ` <div class="result-block">
    <img src="./src/imagens/sodacokebottleicon_97040.ico"/>
    <p>${Math.ceil(quantidadeTotalBebidas / 2000)}Pet's de 2l de Bebidas</p>
    </div> `;
}

function carnePorPessoa(duracao){
    if(duracao >= 6) {
        return 650;
    } else {
        return 400;
    }
}

function cervejaPorPessoa(duracao){
    if(duracao >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}
function bebidasPorPessoa(duracao){
    if(duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}
//cria uma funcao para alternar a visibilidade da caixa
function alternarVisibilidadeBotao(){
    // busca no html o elemento que possui o id "caixa-01"
    const divCaixa01 = document.getElementById("caixa-01");
    // busca no html o botao que possui o id "botao-alternar-visibilidade"
    const botaoAlternarVisibilidade = document.getElementById("botao-alternar-Visibilidade");

    // verifica se a caixa esta sem valor de display ou escondida
    if(divCaixa01.style.display === "" || divCaixa01.style.display === "none"){
        // mostra a caixa na tela
        divCaixa01.style.display = "block"; 
        // altera o texto do botao para indicar que a caixa pode ser ocultada
        botaoAlternarVisibilidade.innerText = "ocultar caixa";

    // caso a caixa ja esteja visivel
    } else {
        //esconde a caixa da tela
        divCaixa01.style.display = "none";
        // altera o texto do botao para indicar que a caixa pode ser apresentada novamente
        botaoAlternarVisibilidade.innerText = "apresentar caixa";

    }

}


function definirCorVermelho(){
    const divCaixa01 = decument.getElementById("caixa-01");
    divCaixa01.classlist.remove("caixa-azul");
    divCaixa01.classlist.add("caixa-vermelha");


}

function redefinirCor(){
    const divCaixa01 = document.getElementById("caixa-01");
    // apagar todas as classes atribuidas a div
    divCaixa01.classList = [];

}

function definirCorAzul(){
    const divCaixa01 = document.getElementById("caixa-01");
    // remove a classe 'caixa-vermelha' da div
    divCaixa01.classList.remove("caixa-vermelha");
    // adicionar a classe 'caixa-azul' na div
    divCaixa01.classList.add("caixa-azul");
}

function ArcoIris() {
    const cores = ["vermelha", "azul", "laranja", "amarela", "verde", "anil", "violeta"];
    const divCaixa01 = document.getElementById("caixa-01");
    debugger
    for (let i = 0; i < cores.length; i++) {
        // alert(cores[i]);
        setTimeout(() => {
            const cor = `caixa-${cores[i]}`;
            divCaixa01.classList = [cor];
        }, i * 1000);
        
    }

}

function apresentarCamposPessoaFisica(){
    const divCamposPf = document.getElementById("campos-pf");
    divCamposPf.classList.remove("hidden");

    const divCamposPj = document.getElementById("campos-pj");
    divCamposPj.classList.remove("hidden");
}

function apresentarCamposPessoaJuridica(){
    const divCamposPj = document.getElementById("campos-pj");
    divCamposPj.classList.remove("hidden");

    const divCamposPf = document.getElementById("campos-pf");
    divCamposPf.classList.add("hidden");
}

function alterarImagem(evento){
    if(evento.key === "enter"){
    }
}

const imagemAbsoluteCinema = "https://lazersemfronteiras.com.br/wp-content/uploads/2025/09/Absolute-cinema-o-que-e-e-por-que-esse-meme-viralizou.jpg";
const imagemSapo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwqd6Yl7zik3g7UBl3_gM_OYK3IKpGL2fJeQ&s";
const imagemDragonBall = "https://ovicio.com.br/wp-content/uploads/dragon-ball-z-vegeta-9000-238679.png";

function alterarImagem(evento) {
    if(evento.key === "enter") {
        const imagem = document.getElementsByClassName("imagem")[0]
        const campoPesquisa = document.getElementById("campo-pesquisa");
        const Pesquisa = campoPesquisa.value;
        if(pesquisa === "dragon ball") {
            imagem.style.background = `url('${imagemDragonBall})')`;
        } else if (Pesquisa === "absulute cinema") {
            imagem.style.background = `url('${imagemAbsoluteCinema})')`;
        } else {
            imagem.style.background = `url('${imagemSapo})')`;
        }
    }

}
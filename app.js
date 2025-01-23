
function exibirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}  
function exibirMensagemInicial(){
    exibirTexto('h1', 'Calcule seu IMC');
    exibirTexto('p', 'Seja bem vinda(o)!');
}   

exibirMensagemInicial();

document.getElementById('inputAltura').addEventListener('input', function (e) {
    let valor = e.target.value;
    if (valor.length === 1 && !valor.includes('.')) {
        e.target.value = valor + '.';
    }
});

function calcularIMC(){
    let altura = parseFloat(document.getElementById('inputAltura').value);
    let peso = parseFloat(document.getElementById('inputPeso').value);
    limparCampo(); 

    if(peso <= 0 || peso >= 550|| altura <= 0 || altura >= 220 || isNaN(peso) || isNaN(altura)){
        resultadoIMC('Tente Novamente')
        alterarCorTexto('red', 'Favor digitar um peso e altura válidos!!'); 
        return;
    } 

    let IMC = peso / (altura * altura);

    if(IMC < 18.5){
        alterarCorTexto('Crimson', 'Você está abaixo do peso normal');
    } else if(IMC >= 18.5 && IMC <= 24.9){
        alterarCorTexto('lime', 'Seu peso está normal!!');
    } else if(IMC >= 25 && IMC <= 29.9){
        alterarCorTexto('yellow', 'Você está com excesso de peso!!');
    } else if(IMC >= 30 && IMC <= 34.9){
        alterarCorTexto('OrangeRed', 'Você está com Obesidade classe I');
    } else if(IMC >= 35 && IMC <= 39.9){
        alterarCorTexto('red', 'Você está com Obesidade classe II');
    } else{
        alterarCorTexto('red', 'Você está com Obesidade classe III');
    }

    resultadoIMC(`Seu IMC é: ${IMC.toFixed(2)}`);
}

function resultadoIMC(text){
    let mensagem = document.querySelector('h1');
    mensagem.innerHTML = text;
}

function alterarCorTexto(cor, textos){
    let mensagem = document.querySelector('p');
    mensagem.style.color = cor;
    mensagem.innerHTML = textos;
}

function limparCampo(){
    let altura = document.getElementById('inputAltura');
    let peso = document.getElementById('inputPeso');

    peso.value = '';
    altura.value = '';
}

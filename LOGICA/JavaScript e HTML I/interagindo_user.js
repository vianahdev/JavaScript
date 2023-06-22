let l_nome = prompt("Qual seu nome?");    

let l_altura = parseFloat(prompt("Digite a sua altura:"));
let l_peso = parseFloat(prompt("Digite seu peso:"));

let l_imc = calcIMC(l_altura,l_peso);

mostra("OLA, " + l_nome + " SEU IMC E: " + l_imc + " ,SEU GRAU E: " + validaIMC(l_imc));

function pulaLinha(numlinha){

    for(var i = 0; i < numlinha; i++){
        document.write("<br>");
    }
}

function mostra(texto){

    document.write(texto);
}

function calcIMC(altura,peso){

    let l_result = Math.round(peso / (altura * altura));
    return l_result;
}

function validaIMC(num){
    if(num <= 18.5){
        return "MAGREZA";
    }else if(num >= 18.5 && num <= 24.9){
        return "NORMAL";
    }else if(num >= 25 && num <= 29.9){
        return "SOBREPESO I";
    }else if(num >= 30 && num <= 39.9){
        return "OBESIDADE II";
    }else{
        return "OBESIDADE GRAVE III";
    }
}

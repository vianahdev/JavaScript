//CALCULA PONTOS DE UM TIME 
//SABENDO QUE 1 VITORIA EQUIVALE A 3 PONTOS, 
//E UM EMPATE EQUIVALE A 1 PONTO 

let l_pontospass = parseInt(prompt("Quantos pontos o seu time fez ano passado"));

let l_vitorias = parseInt(prompt("Infomre o numero de Vitorias"));

let l_empates = parseInt(prompt("Infomre o numero de Empates"));

let l_pontos = calcPonto(l_vitorias, l_empates);
            
function pulaLinha(numlinha){

    for(var i = 0; i < numlinha; i++){
        document.write("<br>");
    }
}

function mostra(texto){

    document.write(texto);
}

function calcPonto(n1, n2){
    return (n1 * 3) + n2
}

function melhorTime(pont_atual, pont_pass){
    if(pont_pass < pont_atual){
        return "O SEU TIME ESTA PIOR QUE O ANO PASSADO"
    }else if(pont_pass == pont_atual){
        return "O SEU TIME ESTA IGUAL AO ANO PASSADO"
    }else{
        return "O SEU TIME ESTA MELHOR QUE O ANO PASSADO"
    }

}

mostra("O SEU TIME TEM " + l_pontos + " PONTOS");
mostra(" ," + melhorTime(l_pontospass, l_pontos));

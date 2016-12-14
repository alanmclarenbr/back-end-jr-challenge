var csv = require('fast-csv');

function Leitor(path){
    csv.fromPath(path)
        .on('data', function (data) {
            if(data!=''){
                console.log(imprimeLinha(data));
            }        
        }).on('end', function () {
            console.log('Fim do arquivo de dados.')
    });
}

function imprimeLinha(linha){
    var media = 0;
    linha = validarLinha(linha);
    media = calculaMediaAluno(linha);
    var retorno = ""
        .concat('Código: ').concat(linha[0])
        .concat(', Nome: ').concat(linha[1])
        .concat(', Nota 1: ').concat(linha[2])
        .concat(', Nota 2: ').concat(linha[3])
        .concat(', Nota 3: ').concat(linha[4])
        .concat(', Nota 4: ').concat(linha[5])
        .concat(', Média Final: ').concat(media.toFixed(1));

    return retorno;
}

function calculaMediaAluno(data){
    return (parseFloat(data[2]) + parseFloat(data[3]) + parseFloat(data[4]) + parseFloat(data[5]))/4;
}

function validarLinha(linha){
    linha[2] = linha[2] != '' && linha[2] != undefined ? parseFloat(linha[2]) : 0;
    linha[3] = linha[3] != '' && linha[3] != undefined ? parseFloat(linha[3]) : 0;
    linha[4] = linha[4] != '' && linha[4] != undefined ? parseFloat(linha[4]) : 0;
    linha[5] = linha[5] != '' && linha[5] != undefined ? parseFloat(linha[5]) : 0;
    return linha;
}

Leitor.calculaMediaAluno = calculaMediaAluno;
Leitor.validarLinha = validarLinha;
Leitor.imprimeLinha = imprimeLinha;
exports = module.exports = Leitor;
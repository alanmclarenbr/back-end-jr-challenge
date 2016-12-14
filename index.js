console.log('Iniciando CLI');

var csv = require('fast-csv');

csv.fromPath("alunos.csv")
    .on('data', function (data) {
        console.log(imprimeLinha(data));
    }).on('end', function () {
        console.log('Fim do arquivo de dados.')
});

function imprimeLinha(linha){
    var media = 0;
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
var Leitor = require('./leitor.js');
var assert = require('assert');
const ARRAY = [,,,,,];
const ARRAY_PREENCHIDO = [1,'Alan',9.5,8.2,8.1,8.8];
describe("Teste da função validaLinha", function () {
    it("#Linha sem preenchimento", function () {

        assert.equal(Leitor.validarLinha(ARRAY)[2],0);
        assert.equal(Leitor.validarLinha(ARRAY)[3],0);
        assert.equal(Leitor.validarLinha(ARRAY)[4],0);
        assert.equal(Leitor.validarLinha(ARRAY)[5],0);
    });

    it("#Linha Com preenchimento", function () {
        assert.equal(Leitor.validarLinha(ARRAY_PREENCHIDO)[2],9.5);
        assert.equal(Leitor.validarLinha(ARRAY_PREENCHIDO)[3],8.2);
        assert.equal(Leitor.validarLinha(ARRAY_PREENCHIDO)[4],8.1);
        assert.equal(Leitor.validarLinha(ARRAY_PREENCHIDO)[5],8.8);
    });

});

describe("Teste da função calculaMediaAluno", function () {
    it("#Valores de notas zerados", function () {
        assert.equal(Leitor.calculaMediaAluno([1,'Alan',0,0,0,0]),0);
    });
    it("#Valores de notas preenchidos", function () {
        assert.equal(Leitor.calculaMediaAluno(ARRAY_PREENCHIDO).toFixed(2),"8.65");
    })
});

//Leitor('./test/alunos_singleline.csv');

//console.log(Leitor.imprimeLinha([1,'Alan',9.2,9.5,8.7,8.1]);


const livros = require('./listaLivros');

function menorValor(arrProd, initialPosition){
    let maisBarato = initialPosition;

    for(let atual = initialPosition; atual < arrProd.length; atual++){
        if(arrProd[atual].preco < arrProd[maisBarato].preco){
           maisBarato = atual;
        }
    }
    return maisBarato;
}

module.exports = menorValor;
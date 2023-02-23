const livros = require('./listaLivros');

function troca(lista, analise){
    let itemAnalise = lista[analise];
    let itemAnterior = lista[analise - 1];

    lista[analise] = itemAnterior;
    lista[analise - 1] = itemAnalise;
}

function insertionSort(lista){

    livros.forEach((_, indice) => {
        let analise = indice;
        
        while(analise > 0 && lista[analise].titulo < lista[analise - 1].titulo){
            troca (lista, analise)
            analise--
        }
    })
    console.log(lista);
    }

insertionSort(livros);

module.exports = troca;
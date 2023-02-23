const {edGalho, edFolha} = require('./arquivos-base/aula-1/arrays');

function juntaListas(lista1, lista2){
    let listaFinal =[];
    let posicaoAtualL1 = 0;
    let posicaoAtualL2 = 0;
    let atual = 0;

    while(posicaoAtualL1 < lista1.length && posicaoAtualL2 < lista2.length){
        let produtoAtualLista1 = lista1[posicaoAtualL1];
        let produtoAtualLista2 = lista2[posicaoAtualL2];

        if(produtoAtualLista1.preco < produtoAtualLista2.preco){
            listaFinal[atual] = produtoAtualLista1;
            posicaoAtualL1++;
        }
        else {
            listaFinal[atual] = produtoAtualLista2;
            posicaoAtualL2++;
        }
        atual++;
    }

    while(posicaoAtualL1 < lista1.length){
        listaFinal[atual] = lista1[posicaoAtualL1];
        posicaoAtualL1++;
        atual++
    }

    while(posicaoAtualL2 < lista2.length){
        listaFinal[atual] = lista2[posicaoAtualL2];
        posicaoAtualL2++;
        atual++;
    }

    return listaFinal
}

console.log(juntaListas(edGalho, edFolha));
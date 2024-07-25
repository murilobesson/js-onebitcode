function exibirElemento(elemento, indice, array){
    console.log({elemento, indice, array})
}

const lista = ["Maça", "Banana", "Laranja", "Limao"]

// for (let i=0;i<lista.length;i++){
//     exibirElemento(lista[i], i, lista)
// }

lista.forEach(exibirElemento)

lista.forEach(function(elemento, indice, array){
    console.log({elemento,  indice, array})
})
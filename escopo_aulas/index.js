const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]

// function exibirElemento(elemento, indice, array){
//     console.log({elemento, indice, array})
// }

// const lista = ["Maça", "Banana", "Laranja", "Limao"]

// // for (let i=0;i<lista.length;i++){
// //     exibirElemento(lista[i], i, lista)
// // }

// lista.forEach(exibirElemento)

// lista.forEach(function(elemento, indice, array){
//     console.log({elemento,  indice, array})
// })

// //////////////////////////////////map

// const nomes = personagens.map(function(personagem){
//     return personagem.nome
// })

// console.log(nomes)

// //////////////////////////////////filter

// //   const orcs =  []
  
// //   for (let i = 0; i < personagens.length; i++) {
// //     if(personagens[i].raca === "Orc"){
// //         orcs.push(personagens[i])
// //     }
// //   }

// const orcs = personagens.filter(function(personagem){
//     return personagem.raca === "Orc"
// })
// console.log(orcs)

// //////////////////////////////////reduce

// const nivelTotal = personagens.reduce(function(valorAcumulado, personagem){
//     return valorAcumulado+personagem.nivel
// },0)

// console.log(nivelTotal)

// const racas = personagens.reduce(function(grupo, personagem){
//     if(grupo[personagem.raca]){
//         grupo[personagem.raca].push(personagem)
//     }else{
//         grupo[personagem.raca] = [personagem]
//     }

//     return grupo
// },{})

// console.log(racas)

// //////////////////////////////////sort

personagens.sort(function(a, b){
    return b.nivel - a.nivel
})
console.log(personagens)
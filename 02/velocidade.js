let veic1 = prompt("Digite o nome de um veiculo:")
let veloc1 = parseFloat(prompt("Agora digite sua velocidade:"))
let veic2 = prompt("Digite o nome de um segundo veiculo:")
let veloc2 = parseFloat(prompt("Agora digite sua velocidade:"))

if (veloc1 > veloc2){
    alert("O veiculo "+veic1+" é o mais rapido")
}else if (veloc2 > veloc1){
    alert("O veiculo "+veic2+" é o mais rapido")
}else{
    alert("Os veiculos "+veic1+" e "+veic2+" possuem velocidades iguais")
}
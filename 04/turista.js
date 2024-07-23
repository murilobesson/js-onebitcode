const nome = prompt("Olá turista, qual o seu nome?")
let cidades = ""
let contagem = 0

let continuar = prompt("Voce ja visitou alguma cidade? (S/N)")

while(continuar == "S" ){
    let cidade = prompt("Qual o nome da cidade?")
    cidades += "-"+cidade+"\n"
    contagem++
    continuar = prompt("Voce visou alguma outra cidade? (S/N)")
}

alert(nome+" viajou "+contagem+" vezes para as cidades:\n"+cidades)
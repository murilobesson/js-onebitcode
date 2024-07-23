let persona1 = prompt("Digite o nome de um personagem")
let power = parseFloat(prompt("Qual o poder de ataque deste personagem?"))
let persona2 = prompt("Digite o nome de um segundo personagem")
let life = parseFloat(prompt("Digite os pontos de vida do personagem "+persona2))
let defense = parseFloat(prompt("Agora digite sua defesa"))
let shield = confirm("Esse personagem possui um escudo?")

if(power > defense && shield == false){
    dano = power - defense
    life -= dano
    alert("O personagem "+persona2+" sofreu "+dano+" pontos de dano e ficou com "+life+" pontos de vida")
}else if (power > defense && shield == true){
    dano = (power - defense)/2
    life -= dano
    alert("O personagem "+persona2+" sofreu "+dano+" pontos de dano e ficou com "+life+" pontos de vida")
}else{
    alert("O personagem "+persona2+" não sofreu nenhum dano")
}
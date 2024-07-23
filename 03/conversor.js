let n = parseFloat(prompt("Digite um valor em metros"))
let unidade = prompt(
    "Qual a unidade de medida que voce deseja transformar a quantidade de metros "+n+"?"+
    "\nmm"+
    "\ncm"+
    "\ndm"+
    "\ndam"+
    "\nhm"+
    "\nkm"
)

switch(unidade){
    case("mm"):
        n *= 1000
        alert("A quantidade transformada é igual a "+n)
        break
    case("cm"):
        n *= 100
        alert("A quantidade transformada é igual a "+n)
        break
    case("dm"):
        n *= 10
        alert("A quantidade transformada é igual a "+n)
        break
    case("dam"):
        n *= 0.1
        alert("A quantidade transformada é igual a "+n)
        break
    case("hm"):
        n *= 0.01
        alert("A quantidade transformada é igual a "+n)
        break
    case("km"):
        n *= 0.001
        alert("A quantidade transformada é igual a "+n)
        break
    default:
        alert("Nenhuma das unidades")
}
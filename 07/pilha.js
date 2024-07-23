let cartas = []
let resposta = ""

do{
    let cartasBaralho = ""
    for(let i=0;i < cartas.length; i++){
        cartasBaralho += i+1 + "- "+cartas[i]+"\n"
    }

    resposta = prompt(
        "-----MENU-----"+
        "\nCartas no baralho: "+cartasBaralho+
        "\n1- Adicionar nova carta\n2- Puxar uma carta\n3- Sair"
    )

    switch(resposta){
        case("1"):
            let novaCarta = prompt("Qual carta deseja adicionar?")
            cartas.push(novaCarta)
            break
        case("2"):
            const cartaPuxada = cartas.pop()
            if(!cartaPuxada){
                alert("Nao há nenhuma carta no baralho")
            }else{
                alert("A carta puxada foi "+cartaPuxada)
            }
            break
        case("3"):
            alert("Saindo...")
            break
    }
}while (resposta !=3)
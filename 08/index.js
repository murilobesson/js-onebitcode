const imoveis = []
let resposta=""

do{
    let resposta = prompt(
        "-----MENU-----"+
        "\nImoveis cadastrados: "+imoveis.length+
        "\nEscolha uma das opções:"+
        "\n1- Cadastrar novo imóvel\n2- Ver todos os imóveis salvos\n3- Sair"
    )

    switch(resposta){
        case("1"):
        let imovelNovo = {}
        imovelNovo.proprietario = prompt("Digite o nome do proprietario:")
        imovelNovo.quartos = parseFloat(prompt("Digite o numero de quartos:"))
        imovelNovo.banheiros = parseFloat(prompt("Digite o numero de banheiros:"))
        imovelNovo.garagem = prompt("O imovel possui garagem? (Sim/Não)")

        let confirma = confirm(
            "Deseja salvar o seguinte imovel?"+
            "\nProprietario: "+imovelNovo.proprietario+
            "\nQuantidade de quartos: "+imovelNovo.quartos+
            "\nQuantidade de banheiros: "+imovelNovo.banheiros+
            "\nPossui garagem: "+imovelNovo.garagem
        )

        if(confirma == true){
            imoveis.push(imovelNovo)
        }
        break
        case("2"):
            for(let i=0; i < imoveis.length; i++){
                alert(
                    "Imovel "+(i+1)+
                    "\nProprietario: "+imoveis[i].proprietario+
                    "\nQuartos: "+imoveis[i].quartos+
                    "\nBanheiros: "+imoveis[i].banheiros+
                    "\nGaragem: "+imoveis[i].garagem
                )
            }
        break
        case("3"):
            alert("Saindo...")
        break
        case defaut:
            alert("Opção invalida!")
        break
    }

}while(resposta!=="3")
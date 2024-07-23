fila = []
resposta = ""

do{
    let pacientes = ""
    for (let i = 0; i < fila.length; i++) {
    pacientes += (i + 1) + "º - " + fila[i] + "\n"
    }

    resposta = prompt(
        "Pacientes: "+pacientes+
        "\nEscolha uma ação:\n1 - Adicionar novo paciente\n2 - Consultar paciente\n3 - Sair"
    )

    switch(resposta){
        case("1"):
            novoPaciente = prompt("Digite o nome do paciente")
            fila.push(novoPaciente)
            break
        case("2"):
            const pacienteConsultado = fila.shift()
            if(!pacienteConsultado){
                alert("Nao ha paciente na fila")
            }else{
                alert("Paciente consultado: "+pacienteConsultado)
            }
            break
        case("3"):
            alert("Saindo...")
            break
        case(defaut):
            "Opção inválida!"
            break
    }

}while (resposta !=="3")
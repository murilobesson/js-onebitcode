let n1 = parseFloat(prompt("Digite um primeiro numero:"))
let n2 = parseFloat(prompt("Digite um segundo numero:"))
let soma = n1+n2
let multiplicacao = n1*n2
let subtracao
let divisao

if (n1>n2){
    subtracao = n1-n2
    divisao = n1/n2
}else{
    subtracao = n2-n1
    divisao = n2/n1
}

alert(
    "A soma dos numeros digitados é igual a : "+soma+
    "\nA multiplicação dos numeros digitados é igual a : "+multiplicacao+
    "\nA subtração dos numeros digitados é igual a : "+subtracao+
    "\nA divisão dos numeros digitados é igual a : "+divisao
)
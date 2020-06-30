var ArrPessoas = []
function Adicionar(){
    var Pessoas ={
        Nome: document.getElementById("nom").value,
        Idade: document.getElementById("ida").value,
        Comissao: document.getElementById("com").value
    }
    ArrPessoas.push(Pessoas)
    document.getElementById("nom").value = ""
    document.getElementById("ida").value = ""
    document.getElementById("com").value = ""
    var resultado = document.getElementById("resultado")
    resultado.innerHTML += `<tr><td> ${Pessoas.Nome} </td> <td>${Pessoas.Idade}</td> <td>${Pessoas.Comissao}</td></tr>`
    
}

function Finalizar (){
    ArrPessoas.sort(function(a,b){
        return (a.Comissao > b.Comissao) ? 1 : ((b.Comissao > a.Comissao) ? -1 : 0);
    });
    
    var maior = document.getElementById("maior")
    maior.innerHTML = `<strong>${ArrPessoas[ArrPessoas.length-1].Nome}</strong> com <strong>${ArrPessoas[ArrPessoas.length-1].Idade}</strong> anos, possui a maior comissão, com valor: <strong> R$ ${ArrPessoas[ArrPessoas.length-1].Comissao}</strong>`
    var menor = document.getElementById("menor")
    menor.innerHTML = `<strong>${ArrPessoas[0].Nome}</strong> com <strong>${ArrPessoas[0].Idade}</strong> anos, possui a menor comissão, com valor: <strong> R$ ${ArrPessoas[0].Comissao}</strong>`

}
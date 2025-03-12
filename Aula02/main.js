console.log("Vamos jogar palitinhos?")

let nomeJogador = prompt ("Qual sue nome?")
let qntdePalitosJog = 3
let qntdeEscolhaJog = 0
let qntdeChuteJog = 0

let nomeComputador = "Computador"
let qntdePalitosComp = 3
let qntdeEscolhaComp = 0
let qntdeChuteComp = 0

function calculaPalpiteComp() {
    let qntdeSorteada = (parseInt = (Math.random()*10) % (qntdePalitosJog + 1)) 
    let palpite = qntdeEscolhaComp + qntdeSorteada
    return palpite 
}
let teste = calculaPalpiteComp()
console.log(teste)

while(qntdePalitosJog > 0 && qntdePalitosComp > 0){
 qntdeEscolhaJog = parseInt = prompt("Quantos palitos voce escolheu?") 

 qntdeEscolhaComp = (parseInt = (Math.random()*10) % qntdePalitosComp) +1 

qntdeChuteJog = prompt("Qual seu chute?")
qntdeChuteComp = calculaPalpiteComp()
 

let soma= qntdeEscolhaJog + qntdeEscolhaComp
if(qntdeChuteJog == soma){
    alert("Ganhou" + nomeJogador)
    qntdePalitosJog--
} else {
    if(qntdeChuteComp == soma){
        alert("Ganhou o" +nomeComputador)
        qntdePalitosComp--
    }else{
        alert("NINGUEM GANHOU!!!")
    }
}
let texto = nomeJogador+" com "+ qntdePalitosJog+" palitos\n"
texto= texto + nomeComputador+" com "+ qntdePalitosComp+" palitos\n "
alert(texto)
}
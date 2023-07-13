// declaração de funcao 

function minhaFuncao(param){
    // bloco de codigo
}

minhaFuncao("param")

// expressao de funcao


// console.log(soma(1, 1))  

//  diferença principal: HOISTING
// funções e var são "listadas" no topo

console.log(apresentar())

function apresentar(){
    return "ola";
}

console.log(soma(1, 1))
const soma = function(num1, num2) {
    return num1 + num2 }



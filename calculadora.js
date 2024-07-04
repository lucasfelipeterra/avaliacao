const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function prompt(message){
    return new Promise((resolve, reject ) => {
        rl.question(message,(input) => {
            resolve(input);
        });
    });
}

function adicionar(num1, num2){
    return num1 + num2;
}

function subtrair(num1, num2){
    return num1 - num2;
}

function multiplicar(num1, num2){
    return num1 * num2;
}

function dividir(num1, num2){

    if(num2 ===0){
        return "erro: divisao por zero";
    }else{
        return num1 / num2;
    }
}

function porcetagem(num1, num2){
    return num1 * num2 / 100;
}

async function main(){
    let numero1 = parseInt(await prompt("digite o primeiro numero: "));
    let numero2 = parseInt(await prompt("digite o segundo numero: "));
    let operacao = await prompt("digite a operação desejada (+ para adição, - para subtração, * para multiplicação, / para divisão, % para porcentagem ):");

    let resultado;

switch (operacao){
    case "+":
    resultado = adicionar(numero1, numero2);
    break;
    case '-':
        resultado = subtrair(numero1, numero2);
        break;
    case '*':
        resultado = multiplicar(numero1, numero2);
        break;
    case '/':
        resultado = dividir(numero1, numero2);
            break;
            default:
                resultado = "operação invalida";
    case "%":
        resultado = porcetagem(numero1, numero2);
        break;
}
console.log("resultado:", resultado);

rl.close();
}

main();
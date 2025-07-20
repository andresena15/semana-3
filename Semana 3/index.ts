import { adicionarProduto } from "./controller/controleEstoque";
import { Data } from "C:/.../model/interfaceData";

console.log("Para adicionar produto digite:1");
console.log("para remover produto digite:2");
console.log("Para listar os produtos digite:3");
console.log("Para ver valor total do estoque digite:4");
console.log("Para ver peso total do estoque digite:5");
console.log("Para ver média dos valores dos produtos digite:6");
console.log("Para ver média dos pesos dos produtos digite:7");
console.log("Para ver quantidade total de produtos no estoque digite:8");
console.log("Para sair digite:9");
let entrada: string|null = "olá";
entrada = prompt("Digite a ação desejada:");
let A : number = 0;
if(entrada !== null){ 
    A = parseInt(entrada, 10);
}


switch (A){
    case 1:
        var X = prompt("Digite o nome do produto:");
        var Y = prompt("Digite o peso do produto:");
        var W = prompt("Digite o valor do produto:");
        var Z = prompt("Digite a quantidade do produto:");

        if(Y !== null && W !== null && Z !== null){
            const dados = {
            nome: X,
            peso: parseInt(Y,10),
            valor: parseInt(W, 10),
            quantidade: parseInt(Z, 10),
        } as Data
        await adicionarProduto(dados);
        break;

        }
    case 2:
        console.log("Qual o nome do item que você deseja remover:")


        
        
}

import { adicionarProduto } from "./controller/controleEstoque";
import { Data } from "C:/.../model/interfaceData";

do{
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
            }
            else{
                console.log("Ocorreu algum erro.");
            }
            break;
            
        case 2:
            var removido = prompt("Digite o nome do produto:");
            await remover(removido);
            break;

        case 3:
            listar();
            break;

        case 4:
            var vt : number =valorTotal();
            console.log("O valor total do estoque é:" + vt);
            break;

        case 5:
            var pt : number =pesoTotal();
            console.log("O peso total do estoque é:" + pt);
            break;

        case 6:
            var vm : number = valorMédio();
            console.log("O valor médio do estoque é:" + vm);
            break;

        case 7:
            var pm : number = pesoMédio();
            console.log("O peso médio do estoque é:" + pm);
            break;

        case 8:
            var qt : number = quantidadeTotal();
            cosole.log("A quantidade total no estoque é:" + qt);
            break;

        case 9:
            console.log("Encerrando Sistema.");
        
            
            
            
    }
}while( A != 9);

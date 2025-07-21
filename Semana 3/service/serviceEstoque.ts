import readCSV from "C:/.../model/readCSV";
import writeCSV from "C:/.../model/writeCSV";
import { Data } from "C:/.../model/interfaceData";
import fs from 'fs';

const filePath = 'C:/.../model/estoque.csv'

class estoqueService{
    async criar(data: Data)
    {
        if(typeof data.nome !== 'string' || typeof data.valor !== 'number' || typeof data.peso !== 'number'  || typeof data.quantidade !== 'number' ){
            throw new Error('Dados Inválidos para o Produto');
        }
        else{
            await writeCSV(filePath, [data] );
        }
    }
    async remover(produto: string){
        const todosOsProdutos = await readCSV(filePath);
        const produtoEncontrado = todosOsProdutos.find(produto => produto.nome.toLowerCase() === nome.toLowerCase());
        if(produtoEncontrado != undefined){
            produtoEncontrado = null;
            console.log("Produto removido.");
        }
        else{
            throw new Error('Não foi encontrado esse Produto');
        }
    }
    async listar(){
        const todosOsProdutos = await readCSV(filePath);
        for(var a = 0; todosOsProdutos[a] !=null; a++){
            console.log("Nome: " +todosOsProdutos[a].nome+ "Valor: " +todosOsProdutos[a].valor+ "Peso:" + todosOsProdutos[a].peso+ "Quantidade: " +todosOsProdutos[a].quantidade+);
        }
    }

    async valorTotal(){
        const todosOsProdutos = await readCSV(filePath);
        var preçoTotal: number = 0;
        for(var a = 0; todosOsProdutos[a] !=null; a++){
            preçoTotal = preçoTotal + todosOsProdutos[a].valor;
        }
        return preçoTotal;
    }

    async pesoTotal(){
        const todosOsProdutos = await readCSV(filePath);
        var kilosTotal: number = 0;
        for(var a = 0; todosOsProdutos[a] !=null; a++){
            kilosTotal = kilosTotal + todosOsProdutos[a].peso;
        }
        return kilosTotal;
    }

    async valorMédio(){
        const todosOsProdutos = await readCSV(filePath);
        var preçoTotal: number = 0;
        var quantidadeTotal:number = 0;
        for(var a = 0; todosOsProdutos[a] !=null; a++){
            preçoTotal = preçoTotal + todosOsProdutos[a].valor;
            quantidadeTotal = quantidadeTotal +todosOsProdutos[a].quantidade;
        }
        return preçoTotal/quantidadeTotal;
    }

    async pesoMédio(){
        const todosOsProdutos = await readCSV(filePath);
        var kilosTotal: number = 0;
        var quantidadeTotal:number = 0;
        for(var a = 0; todosOsProdutos[a] !=null; a++){
            kilosTotal = kilosTotal + todosOsProdutos[a].peso;
            quantidadeTotal = quantidadeTotal + todosOsProdutos[a].quantidade;
        }
        return kilosTotal/quantidadeTotal;
    }

    async quantidadeTotal(){
        const todosOsProdutos = await readCSV(filePath);
        var quantidadeTotal:number = 0;
        for(var a = 0; todosOsProdutos[a] != null; a++){
            quantidadeTotal = quantidadeTotal + todosOsProdutos[a].quantidade;
        }
        return quantidadeTotal;
    }

    

    

    

    
    
}

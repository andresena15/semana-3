import { Data } from "../model/interfaceData";
import estoqueService from '../service/serviceEstoque.ts'

export async function adicionarProduto(data:Data) {
    try{
        await estoqueService.criar(data)
        console.log("Produto adicionado com sucesso.");
    }
    catch (error){
        console.log("Erro ao adicionar produto", error);
    }
}

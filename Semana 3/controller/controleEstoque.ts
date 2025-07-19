import { Data } from "C:/Users/andre/OneDrive/Desktop/iJunior/Semana 2/model/interfaceData";
import estoqueService from 'C:/Users/andre/OneDrive/Desktop/iJunior/Semana 2/service/serviceEstoque.ts'

export async function adicionarProduto(data:Data) {
    try{
        await estoqueService.criar(data)
        console.log("Produto adicionado com sucesso.");
    }
    catch (error){
        console.log("Erro ao adicionar produto", error);
    }
}
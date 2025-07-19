import readCSV from "C:/Users/andre/OneDrive/Desktop/iJunior/Semana 2/model/readCSV";
import writeCSV from "C:/Users/andre/OneDrive/Desktop/iJunior/Semana 2/model/writeCSV";
import { Data } from "C:/Users/andre/OneDrive/Desktop/iJunior/Semana 2/model/interfaceData";
import fs from 'fs';

const filePath = 'C:/Users/andre/OneDrive/Desktop/iJunior/Semana 2/model/estoque.csv'

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
}
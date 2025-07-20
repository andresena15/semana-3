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
}

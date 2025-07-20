import { createObjectCsvWriter as createCsvWriter } from 'csv-writer';
import { Data } from "../model/interfaceData";


const writeCSV = async ("../model/estoque.csv": string, data: Data[]): Promise<void> => {
  const csvWriter = createCsvWriter({
    path: "../model/estoque.csv",
    header: [
      { id: 'nome', title: 'NOME' },
      { id: 'valor', title: 'VALOR' },
      { id: 'peso', title: 'PESO' },
      { id: 'quantidade', title: 'QUANTIDADE' },     
    ],
  });

  return csvWriter.writeRecords(data);
};

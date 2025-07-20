import { createObjectCsvWriter as createCsvWriter } from 'csv-writer';
import { Data } from "C:/.../model/interfaceData";


const writeCSV = async ("C:/.../model/estoque.csv": string, data: Data[]): Promise<void> => {
  const csvWriter = createCsvWriter({
    path: "C:/.../model/estoque.csv",
    header: [
      { id: 'nome', title: 'NOME' },
      { id: 'valor', title: 'VALOR' },
      { id: 'peso', title: 'PESO' },
      { id: 'quantidade', title: 'QUANTIDADE' },     
    ],
  });

  return csvWriter.writeRecords(data);
};

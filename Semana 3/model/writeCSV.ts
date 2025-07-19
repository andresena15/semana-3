import { createObjectCsvWriter as createCsvWriter } from 'csv-writer';
import { Data } from "C:/Users/andre/OneDrive/Desktop/iJunior/Semana 2/model/interfaceData";


const writeCSV = async ("C:/Users/andre/OneDrive/Desktop/iJunior/Semana 2/service/serviceEstoque.ts": string, data: Data[]): Promise<void> => {
  const csvWriter = createCsvWriter({
    path: "C:/Users/andre/OneDrive/Desktop/iJunior/Semana 2/service/serviceEstoque.ts",
    header: [
      { id: 'nome', title: 'NOME' },
      { id: 'valor', title: 'VALOR' },
      { id: 'peso', title: 'PESO' },
      { id: 'quantidade', title: 'QUANTIDADE' },     
    ],
  });

  return csvWriter.writeRecords(data);
};

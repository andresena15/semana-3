import fs from 'fs';
import csv from 'csv-parser';
import { Data } from "C:/Users/andre/OneDrive/Desktop/iJunior/Semana 2/model/interfaceData";

const readCSV = async ("C:/Users/andre/OneDrive/Desktop/iJunior/Semana 2/service/serviceEstoque.ts": string): Promise<Data[]> => {
  return new Promise((resolve, reject) => {
    const results: Data[] = [];
    fs.createReadStream("C:/Users/andre/OneDrive/Desktop/iJunior/Semana 2/service/serviceEstoque.ts")
      .pipe(csv())
      .on('data', (data: Data) => results.push(data))
      .on('end', () => resolve(results))
      .on('error', (error) => reject(error));
  });
};
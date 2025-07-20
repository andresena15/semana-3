import fs from 'fs';
import csv from 'csv-parser';
import { Data } from ".../model/interfaceData";

const readCSV = async (".../model/estoque.csv": string): Promise<Data[]> => {
  return new Promise((resolve, reject) => {
    const results: Data[] = [];
    fs.createReadStream(".../model/estoque.csv")
      .pipe(csv())
      .on('data', (data: Data) => results.push(data))
      .on('end', () => resolve(results))
      .on('error', (error) => reject(error));
  });
};

import * as ExcelJS from 'exceljs';
import { Retailer } from './retailer';

async function readRetailersFromExcel(filePath: string): Promise<Retailer[]> {
  try {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(filePath);

    const firstSheet: ExcelJS.Worksheet | undefined = workbook.worksheets[0];
    if (!firstSheet) {
      throw new Error('No sheets found in the workbook.');
    }

    const retailers: Retailer[] = [];
    const columnHeadings = firstSheet.getRow(1).values as string[];

    for (let rowNumber = 2; rowNumber <= firstSheet.rowCount; rowNumber++) {
      const currentRow = firstSheet.getRow(rowNumber);
      const currentRetailer: Partial<Retailer> = {};

      columnHeadings.forEach((heading, index) => {
        const key = heading as keyof Retailer;
        currentRetailer[key] = String(currentRow.getCell(index).value);
      });

      retailers.push(currentRetailer as Retailer);
    }

    return retailers;
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error reading retailers from Excel: ${error.message}`);
    } else {
      console.error(`An unknown error occurred while reading retailers from Excel.`);
    }
    return [];
  }
}

export { readRetailersFromExcel };

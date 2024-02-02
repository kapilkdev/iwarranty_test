import { readRetailersFromExcel } from "./components/excelDataParser";
import { exportRetailerJsonLines } from "./components/convertJsonOutput";
import { categorizeRetailersByLocationState } from "./components/utilities";

const excelFilePath = 'iw-tech-test-retailer-data.xlsx';

readRetailersFromExcel(excelFilePath).then((retailersData) => {
  const categorizedRetailers = categorizeRetailersByLocationState(retailersData);
  const allRetailers = retailersData;

  Object.values(categorizedRetailers).forEach((retailerGroup) => {
    exportRetailerJsonLines(retailerGroup);
  });

  exportRetailerJsonLines(allRetailers);
});

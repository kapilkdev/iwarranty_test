import { Retailer } from "./retailer";

export function exportRetailerJsonLines(retailers: Retailer[]): void {
  retailers.forEach((retailer) => {
    console.log(JSON.stringify(retailer));
  });
}

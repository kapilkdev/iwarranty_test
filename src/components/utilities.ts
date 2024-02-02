import { Retailer } from "./retailer";

export function categorizeRetailersByLocationState(retailersData: Retailer[]): { [locationState: string]: Retailer[] } {
  const categorizedRetailers: { [directoryCategory: string]: Retailer[] } = {};

  retailersData.forEach((currentRetailer) => {
    const locationState = currentRetailer.directory_location_state || 'Unknown';
    categorizedRetailers[locationState] = categorizedRetailers[locationState] || [];
    categorizedRetailers[locationState].push(currentRetailer);
  });

  return categorizedRetailers;
}

export interface RentalYieldInputs {
  purchasePrice: number;
  annualRent: number;
  annualExpenses: number;
  mortgageRepayment: number;
}

export interface RentalYieldResults {
  grossYield: number;
  netYield: number;
  annualSurplus: number;
  monthlySurplus: number;
  netIncome: number;
}

export function calculateRentalYield(inputs: RentalYieldInputs): RentalYieldResults {
  const { purchasePrice, annualRent, annualExpenses, mortgageRepayment } = inputs;

  const grossYield = (annualRent / purchasePrice) * 100;
  const netIncome = annualRent - annualExpenses;
  const netYield = (netIncome / purchasePrice) * 100;
  const annualSurplus = netIncome - mortgageRepayment;
  const monthlySurplus = annualSurplus / 12;

  return {
    grossYield: Math.round(grossYield * 100) / 100,
    netYield: Math.round(netYield * 100) / 100,
    annualSurplus: Math.round(annualSurplus),
    monthlySurplus: Math.round(monthlySurplus),
    netIncome: Math.round(netIncome),
  };
}

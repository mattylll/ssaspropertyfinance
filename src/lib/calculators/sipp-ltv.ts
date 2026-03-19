export interface SippLtvInputs {
  propertyValue: number;
  sippFundValue: number;
}

export interface SippLtvResults {
  maxBorrowing: number;
  depositFromFund: number;
  remainingFund: number;
  totalPurchasePower: number;
  ltvPercent: number;
  fundSufficient: boolean;
}

export function calculateSippLtv(inputs: SippLtvInputs): SippLtvResults {
  const { propertyValue, sippFundValue } = inputs;

  // SIPP can borrow up to 50% of property value
  const maxBorrowing = propertyValue * 0.5;
  const depositFromFund = propertyValue - maxBorrowing;
  const remainingFund = sippFundValue - depositFromFund;
  const fundSufficient = remainingFund >= 0;

  return {
    maxBorrowing: Math.round(maxBorrowing),
    depositFromFund: Math.round(depositFromFund),
    remainingFund: Math.round(Math.max(0, remainingFund)),
    totalPurchasePower: Math.round(sippFundValue * 2),
    ltvPercent: 50,
    fundSufficient,
  };
}
